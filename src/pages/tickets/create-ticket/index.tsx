import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
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
import Resetter from '../../../components/form/resetter'
import ImagePicker from '../../../components/form/elements/image-picker'
import PATH_OF_ROUTES from '../../../enums/path-of-routes'
import Button from '../../../components/button'
import useCrudService from '../../../services/crud-service'
import toaster from '../../../components/toaster'
import apiUri from '../../../configs/api-uri'
import convertArrayToObjectBySpecificKey from '../../../utils/convert-array-to-object-by-specific-key'
import { createOrUpdateTicketFormC2SMiddleware } from '../../../services-data-middleware/client-to-server/ticket'
import LoadingFullPage from '../../../components/loading'

export interface TicketCreateModel {
    subject: string
    text: string
    images: Array<File>
}

const CreateTicket: FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { createEntity, uploadMultipleFile } = useCrudService()

    const formDefaultVelue: TicketCreateModel = {
        subject: '',
        text: '',
        images: []
    }

    const formValidation = yup.object({
        subject: yup
            .string()
            .required(t('form.error.required')),
        text: yup
            .string()
            .required(t('form.error.required')),
    }).required()

    const onValidSubmit = useCallback(async (data: TicketCreateModel) => {
        try {
            let uploadedImages: Array<number> = []
            if (data.images.length) {
                const uploaded = await uploadMultipleFile(
                    apiUri.uploadFiles.uri(),
                    apiUri.uploadFiles.permissions,
                    convertArrayToObjectBySpecificKey<File>(data.images, data.images.length > 1 ? 'picture' : 'picture1', true)
                )
                uploadedImages = (uploaded.data as Array<{ id: number, url: string }>).map((item: { id: number, url: string }) => (
                    item.id
                ))
            }
            const requestPayload = { ...data, images: uploadedImages }

            await createEntity(
                apiUri.ticketCreate.uri(),
                apiUri.ticketCreate.permissions,
                createOrUpdateTicketFormC2SMiddleware(requestPayload)
            )
            navigate(PATH_OF_ROUTES.TICKETS)
        } catch (error) {
            toaster.ERROR(t('form.error.formNotValid'))
        }
    }, [])

    const handleSubmit = useCallback((data: { reactHookFormObject: UseFormReturn<TicketCreateModel>, defaultValue: TicketCreateModel }) => {
        data.reactHookFormObject.handleSubmit(
            (data: TicketCreateModel) => onValidSubmit(data),
            () => toaster.ERROR(t('form.error.formNotValid'))
        )()
    }, [onValidSubmit])

    return (
        <TicketPagesWrapper>
            <TicketDetailWrapper>
                <Form<TicketCreateModel>
                    formType='CREATE'
                    defaultValue={formDefaultVelue}
                    validation={formValidation}
                    fieldsRenderer={(data: { reactHookFormObject: UseFormReturn<TicketCreateModel>, defaultValue: TicketCreateModel }) => {
                        return (<>
                            <Input<TicketCreateModel>
                                name='subject'
                                data={data}
                                dir='rtl'
                                size='l'
                                label={Label}
                                labelText={t('ticketsPage.updateTicket.subject')}
                                labelStyle={{ fontSize: '0.75rem', fontWeight: 400 }}
                                error={Error}
                                resetter={Resetter}
                            />
                            <Textarea<TicketCreateModel>
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
                            <ImagePicker<TicketCreateModel>
                                name='images'
                                data={data}
                                label={t('ticketsPage.updateTicket.attachAtMostThreeImages')}
                                countOfColumns={3}
                                maxSelection={3}
                                multiple={true}
                                accept='image/*'
                                fileVlidator={(file: File, _data: any) => file.size <= 3145728} // 3 Mb
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
                                {data.reactHookFormObject.formState.isSubmitting ? <LoadingFullPage /> : null}
                            </TicketsBottomBtnsWrapper>
                        </>
                        )
                    }}
                />
            </TicketDetailWrapper>
        </TicketPagesWrapper>
    )
}

export default CreateTicket