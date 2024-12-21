import { FC, useCallback, useLayoutEffect, useState } from 'react'
import { TicketDetailWrapper, TicketsBottomBtnsWrapper } from '../../../styles/pages/tickets/ticket-detail'
import TicketFollowingUpPageWrapper from '../../../styles/pages/tickets/following-up-ticket'
import TicketDetailHeader from '../ticket-detail/header'
import * as yup from 'yup'
import Error from '../../../components/form/error'

import { UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Form from '../../../components/form'
import Textarea from '../../../components/form/elements/textarea'
import Label from '../../../components/form/label'
import Button from '../../../components/button'
import PATH_OF_ROUTES from '../../../enums/path-of-routes'
import apiUri from '../../../configs/api-uri'
import { ticketDetailDataS2CMiddleware } from '../../../services-data-middleware/server-to-client/ticket'
import { ServerTicketDetailModel } from '../../../models/api-reponse/ticket'
import LoadingFullPage from '../../../components/loading'
import { useNavigate, useParams } from 'react-router-dom'
import useCrudService from '../../../services/crud-service'
import { sendTicketFollowingupMessageFormC2SMiddleware } from '../../../services-data-middleware/client-to-server/ticket'
import PageError from '../../../components/page-error'
import toaster from '../../../components/toaster'

const FollowingUpTicket: FC = () => {
    const { t } = useTranslation()
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const { getEntity, createEntity } = useCrudService()
    const [fetchLoading, setFetchLoading] = useState<boolean>(true)
    const [fetchError, setFetchError] = useState<boolean>(false)
    const [pageInitialValue, setPageInitialValue] = useState<{ id: number, subject: string, text: string }>({ id: NaN, subject: '', text: '' })

    const formValidation = yup.object({
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
            const serverResponse = ticketDetailDataS2CMiddleware(response.data as ServerTicketDetailModel)
            setPageInitialValue({ text: serverResponse.text, id: serverResponse.id, subject: serverResponse.subject })
        } catch {
            setFetchError(true)
        } finally {
            setFetchLoading(false)
        }
    }, [id, getEntity, setFetchLoading, setFetchError, setPageInitialValue])

    useLayoutEffect(() => {
        if (typeof id === 'string' && id !== '') {
            doFetchById()
        } else {
            setTimeout(() => navigate(PATH_OF_ROUTES.TICKETS), 250)
        }
    }, [])

    const onValidSubmit = useCallback(async (data: { text: string }) => {
        try {
            const requestPayload = { ...data }
            await createEntity(
                apiUri.ticketFollowingUp.uri(id || ''),
                apiUri.ticketFollowingUp.permissions,
                sendTicketFollowingupMessageFormC2SMiddleware(requestPayload)
            )
            navigate(PATH_OF_ROUTES.TICKETS)
        } catch (error) {
            toaster.ERROR(t('form.error.formNotValid'))
        }
    }, [id])

    const handleSubmit = useCallback((data: { reactHookFormObject: UseFormReturn<{ text: string }>, defaultValue: { text: string } }) => {
        data.reactHookFormObject.handleSubmit(
            (data: { text: string }) => onValidSubmit(data),
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
        <TicketFollowingUpPageWrapper>
            <TicketDetailWrapper>
                {
                    fetchLoading
                        ? <LoadingFullPage />
                        : <>
                            <TicketDetailHeader title={pageInitialValue.subject} id={pageInitialValue.id} />
                            <Form<{ text: string }>
                                formType='CREATE'
                                defaultValue={{ text: '' }}
                                validation={formValidation}
                                fieldsRenderer={(data: { reactHookFormObject: UseFormReturn<{ text: string }>, defaultValue: { text: string } }) => {
                                    return (
                                        <>
                                            <Textarea<{ text: string }>
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
                                            <TicketsBottomBtnsWrapper>
                                                <Button
                                                    type='FILLED'
                                                    width='100%'
                                                    size='XL'
                                                    title={t('ticketsPage.followingUpTicket.send')}
                                                    onClick={() => handleSubmit(data)}
                                                    loading={false}
                                                    disabled={false}
                                                    hasIcon={false}
                                                />
                                            </TicketsBottomBtnsWrapper>
                                        </>
                                    )
                                }}
                            />
                        </>
                }
            </TicketDetailWrapper>

        </TicketFollowingUpPageWrapper>
    )
}

export default FollowingUpTicket