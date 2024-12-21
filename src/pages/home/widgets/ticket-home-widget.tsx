import { FC, useCallback, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useCrudService from '../../../services/crud-service'
import apiUri from '../../../configs/api-uri'
import { queryParamsGenerator } from '../../contracts/helper'
import { ListLoadingWrapper } from '../../../styles/components/loading'
import { LoaderBars } from '../../../components/loading'
import { PageErrorText } from '../../../styles/components/page-error'
import Button from '../../../components/button'
import NoItem from '../../../components/no-item'
import Icon from '../../../components/icons/icon'
import PATH_OF_ROUTES from '../../../enums/path-of-routes'
import TriangleError from '../../../components/icons/icons-components/triangle-error'
import TicketHomeWidgetWrapper from '../../../styles/pages/home/widgets/ticket-home-widget'
import { ticketListDataS2CMiddleware } from '../../../services-data-middleware/server-to-client/ticket'
import Ticket from '../../tickets/ticket'

const TicketHomeWidget: FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { getEntity } = useCrudService()
    const [loading, setLoading] = useState<boolean>(false)
    const [fetchError, setFetchError] = useState<boolean>(true)
    const [data, setData] = useState<Array<any>>([])

    const doFetch = useCallback(async () => {
        if (loading) return
        setLoading(true)
        setFetchError(false)
        try {
            const response = await getEntity(
                apiUri.ticketList.uri(queryParamsGenerator(1, 2, undefined, undefined)),
                apiUri.ticketList.permissions,
            )
            setData(() => ticketListDataS2CMiddleware([...(response.data as any).data]))
        } catch (err) {
            setFetchError(true)
        } finally {
            setLoading(false)
        }
    }, [loading, setData])

    const goToMainList = useCallback(() => navigate(PATH_OF_ROUTES.TICKETS), [navigate])

    useLayoutEffect(() => {
        doFetch()
    }, [])

    if (loading) {
        return (
            <TicketHomeWidgetWrapper loadingOrError={true} style={{ gap: '1rem' }}>
                <div className='header'>
                    <span>{t('homePage.tickets')}</span>
                    <span></span>
                </div>
                <ListLoadingWrapper >
                    <LoaderBars size={1.5} />
                </ListLoadingWrapper>
            </TicketHomeWidgetWrapper>
        )
    }

    if (fetchError) {
        return (
            <TicketHomeWidgetWrapper loadingOrError={true} style={{ gap: '1rem' }}>
                <div className='header'>
                    <span>{t('homePage.tickets')}</span>
                    <span></span>
                </div>
                <TriangleError />
                <PageErrorText style={{ fontSize: '0.75rem' }}>
                    {t('homePage.ticketsFetchError')}
                </PageErrorText>
                <Button
                    width='50%'
                    size='M'
                    type='ERROR'
                    title={t('homePage.tryAgainBtn')}
                    disabled={false}
                    hasIcon={false}
                    onClick={doFetch}
                    loading={false}
                />
            </TicketHomeWidgetWrapper>
        )
    }

    return (
        <TicketHomeWidgetWrapper dataLength={data?.length}>
            <div className='header'>
                <span>{t('homePage.tickets')}</span>
                <Button
                    size='L'
                    type='SUCCESS_TEXT'
                    title={t('homePage.all')}
                    disabled={!data.length}
                    hasIcon={true}
                    icon={Icon}
                    iconName={data && data.length ? 'arrowLeftGreen' : 'arrowLeftGery'}
                    onClick={goToMainList}
                    loading={false}
                    style={{ paddingInline: '0rem' }}
                />
            </div>
            <div className="list">
                {
                    data && data.length
                        ? data.map((ticket) => (
                            <div className='item-wrapper' key={ticket.id}>
                                <Ticket
                                    {...ticket}
                                />
                            </div>
                        ))
                        : <NoItem loading={loading} text={t('ticketsPage.noTicketsFound')} />
                }
            </div>
        </TicketHomeWidgetWrapper>
    )
}

export default TicketHomeWidget