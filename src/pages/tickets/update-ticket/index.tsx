import { FC, useCallback, useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { UseFormReturn } from 'react-hook-form'
import * as yup from 'yup'
import { TicketDetailWrapper, TicketsBottomBtnsWrapper } from '../../../styles/pages/tickets/ticket-detail'
import TicketPagesWrapper from '../../../styles/pages/tickets/update-ticket'
import Input from '../../../components/form/elements/input'
import Form from '../../../components/form'
import Error from '../../../components/form/error'
import Label from '../../../components/form/label'
import Textarea from '../../../components/form/elements/textarea'
import ImagePicker from '../../../components/form/elements/image-picker'
import PATH_OF_ROUTES from '../../../enums/path-of-routes'
import Button from '../../../components/button'
import useCrudService from '../../../services/crud-service'
import toaster from '../../../components/toaster'
import apiUri from '../../../configs/api-uri'
import convertArrayToObjectBySpecificKey from '../../../utils/convert-array-to-object-by-specific-key'
import Loading from '../../../components/loading'
import { ticketDetailDataS2CMiddleware } from '../../../services-data-middleware/server-to-client/ticket'
import { ServerTicketDetailModel } from '../../../models/api-reponse/ticket'
import { createOrUpdateTicketFormC2SMiddleware } from '../../../services-data-middleware/client-to-server/ticket'
import PageError from '../../../components/page-error'

export interface TicketUpdateModel {
    subject: string
    text: string
    images: Array<{ id: number, url: string } | File>
}

const UpdateTicket: FC = () => {
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const { getEntity, updateEntity, uploadMultipleFile } = useCrudService()
    const [fetchLoading, setFetchLoading] = useState<boolean>(true)
    const [fetchError, setFetchError] = useState<boolean>(false)
    const [formInitialValue, setFormInitialValue] = useState<TicketUpdateModel>({ subject: '', text: '', images: [] })

    const formValidation = yup.object({
        subject: yup
            .string()
            .required(t('form.error.required')),
        text: yup
            .string()
            .required(t('form.error.required')),
    }).required()

    const doFetchById = useCallback(async () => {
        setFetchLoading(true)
        setFetchError(false)
        try {
            const response = await getEntity(
                apiUri.getTicketById.uri(id || ''),
                apiUri.getTicketById.permissions
            )
            setFormInitialValue(ticketDetailDataS2CMiddleware(response.data as ServerTicketDetailModel))
        } catch {
            setFetchError(true)
        } finally {
            setFetchLoading(false)
        }
    }, [id, getEntity, setFetchLoading, setFetchError, setFormInitialValue])

    useLayoutEffect(() => {
        if (typeof id === 'string' && id !== '') {
            doFetchById()
        } else {
            setTimeout(() => navigate(PATH_OF_ROUTES.TICKETS), 250)
        }
    }, [])

    const onValidSubmit = useCallback(async (data: TicketUpdateModel) => {
        try {
            let uploadedImages: Array<number> = data.images
                .map((item: { id: number, url: string } | File) => (item instanceof File ? -1 : item.id))
                .filter((item: number) => (item >= 0))

            const newImages: Array<File> = []
            for (let i = 0; i < data.images.length; i++) {
                if (data.images[i] instanceof File) {
                    newImages.push(data.images[i] as File)
                }
            }

            if (newImages.length) {
                const uploaded = await uploadMultipleFile(
                    apiUri.uploadFiles.uri(),
                    apiUri.uploadFiles.permissions,
                    convertArrayToObjectBySpecificKey<File>(newImages, newImages.length > 1 ? 'picture' : 'picture1', true)
                )

                for (let i = 0; i < (uploaded.data as Array<{ id: number, url: string }>).length; i++) {
                    uploadedImages.push((uploaded.data as Array<{ id: number, url: string }>)[i].id)
                }
            }
            const requestPayload = { ...data, images: uploadedImages }
            await updateEntity(
                apiUri.ticketUpdate.uri(id || ''),
                apiUri.ticketUpdate.permissions,
                createOrUpdateTicketFormC2SMiddleware(requestPayload)
            )
            navigate(PATH_OF_ROUTES.TICKETS)
        } catch (error) {
            toaster.ERROR(t('form.error.formNotValid'))
        }
    }, [id])

    const handleSubmit = useCallback((data: { reactHookFormObject: UseFormReturn<TicketUpdateModel>, defaultValue: TicketUpdateModel }) => {
        data.reactHookFormObject.handleSubmit(
            (data: TicketUpdateModel) => onValidSubmit(data),
            () => toaster.ERROR(t('form.error.formNotValid'))
        )()
    }, [onValidSubmit])

    if (fetchError) {
        return (
            <PageError
                btnText={t('form.error.tryAgainBtn')}
                message={t('form.error.dataFetchingError')}
                onTryAgainBtnClick={doFetchById}
                onBackBtnClick={() => navigate(PATH_OF_ROUTES.TICKETS)}
            />
        )
    }

    return (
        <TicketPagesWrapper>
            <TicketDetailWrapper>
                {
                    fetchLoading
                        ? <Loading />
                        : <Form<TicketUpdateModel>
                            formType='UPDATE'
                            defaultValue={formInitialValue}
                            validation={formValidation}
                            fieldsRenderer={(data: { reactHookFormObject: UseFormReturn<TicketUpdateModel>, defaultValue: TicketUpdateModel }) => {
                                return (<>
                                    <Input<TicketUpdateModel>
                                        name='subject'
                                        data={data}
                                        dir='rtl'
                                        size='l'
                                        label={Label}
                                        labelText={t('ticketsPage.updateTicket.subject')}
                                        labelStyle={{ fontSize: '0.75rem', fontWeight: 400 }}
                                        error={Error}
                                        disabled={true}
                                    />
                                    <Textarea<TicketUpdateModel>
                                        name='text'
                                        data={data}
                                        size='l'
                                        label={Label}
                                        labelText={t('ticketsPage.updateTicket.explanation')}
                                        labelStyle={{ fontSize: '0.75rem', fontWeight: 400 }}
                                        minHeight='13.875rem'
                                        maxHeight='max-content'
                                        error={Error}
                                    />
                                    <ImagePicker<TicketUpdateModel>
                                        name='images'
                                        data={data}
                                        label={t('ticketsPage.updateTicket.attachAtMostThreeImages')}
                                        countOfColumns={3}
                                        maxSelection={3}
                                        multiple={true}
                                        accept='image/*'
                                        fileVlidator={(file: File, _data: any) => file.size <= 3670187} // 3.5 Mb
                                        onInvalidCallbak={() => toaster.ERROR(t('form.error.fileSizeIsInvalid'), { toastId: 'this_id_for_singletone' })}
                                    />
                                    <TicketsBottomBtnsWrapper>
                                        <Button
                                            type='FILLED'
                                            width='100%'
                                            size='XL'
                                            title={t('form.btns.submit')}
                                            onClick={() => handleSubmit(data)}
                                            loading={false}
                                            disabled={!data.reactHookFormObject.formState.isValid || data.reactHookFormObject.formState.isSubmitting}
                                            hasIcon={false}
                                        />
                                        {data.reactHookFormObject.formState.isSubmitting ? <Loading /> : null}
                                    </TicketsBottomBtnsWrapper>
                                </>
                                )
                            }}
                        />
                }
            </TicketDetailWrapper>
        </TicketPagesWrapper>
    )
}

export default UpdateTicket