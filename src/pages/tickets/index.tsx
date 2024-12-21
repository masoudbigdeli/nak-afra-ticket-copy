import { FC, useRef, useState, useCallback, useLayoutEffect, useMemo, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import TicketsPageWrapper, { TicketsButtonContainer, TicketsGroupWrapper, TicketsPageTabsWrapper } from '../../styles/pages/tickets'
import Tabs, { Tab } from '../../components/tabs'
import { ticketListDataS2CMiddleware } from '../../services-data-middleware/server-to-client/ticket'
import Ticket from './ticket'
import Button from '../../components/button'
import Icon from '../../components/icons/icon'
import { useNavigate } from 'react-router-dom'
import PATH_OF_ROUTES from '../../enums/path-of-routes'
import USE_PAGINATION_ACTION_TYPE from '../../enums/use-pagination-action-type'
import apiUri from '../../configs/api-uri'
import { queryParamsGenerator } from '../contracts/helper'
import calculateTotalPageOfList from '../../utils/calculate-total-page-of-list'
import useCrudService from '../../services/crud-service'
import usePaginationConfig from '../../hooks/use-pagination-config'
import usePagination from '../../hooks/use-pagination'
import useScrollDetection, { VerticalDirectionType } from '../../hooks/use-scroll-detection'
import NoItem from '../../components/no-item'
import PageError from '../../components/page-error'
import { ListLoadingWrapper, LoaderText } from '../../styles/components/loading'
import { LoaderBars } from '../../components/loading'

const Tickets: FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { getEntity } = useCrudService()
    const { latestConfig, bulkLatestConfigSetter } = usePaginationConfig('ticket')
    const ticketsPageTabsWrapperRef = useRef<HTMLDivElement | null>(null)

    const tabOptions: Array<Tab<string>> = useMemo(() => [
        { id: 1, label: t('ticketsPage.OPENTicketTab'), value: 'status=0' },
        { id: 2, label: t('ticketsPage.READTicketTab'), value: 'status=1' },
        { id: 3, label: t('ticketsPage.FOLLOWINGUPTicketTab'), value: 'status=2' },
        { id: 4, label: t('ticketsPage.CLOSEDTicketTab'), value: 'status=3' },
    ], [])

    const [loading, setLoading] = useState<boolean>(false)
    const [fetchError, setFetchError] = useState<boolean>(true)
    const [isInitialRequest, setIsInitialRequest] = useState<boolean>(true)

    const [data, setData] = useState<Array<any>>([])
    const { page, lowestPage, highestPage, perPage, totalPage, filter, sort, dispatch } = usePagination<Tab<string>, undefined>({
        ...latestConfig,
        filter: latestConfig.filter || tabOptions[0]
    })

    const handleTabClick = useCallback((tab: Tab<string>) => {
        if (tab.value === filter.value) return
        dispatch({ type: USE_PAGINATION_ACTION_TYPE.FILTER, payload: tab })
        setData([])
        handleRequest(1, perPage, tab, sort, [], undefined, false)
    }, [perPage, filter, sort, dispatch])

    const { elementRef, verticalDirection } = useScrollDetection<HTMLDivElement>({
        loading,
        onTouchCallback: (verticalDirection: 'top' | 'down') => handlePagination(verticalDirection)
    })

    const loadingType: VerticalDirectionType | null = useMemo(() => {
        if (!loading) return null
        if (!verticalDirection) return null
        return verticalDirection
    }, [verticalDirection, loading])

    const handleRequest = useCallback(async (
        page: number,
        perPage: number,
        filter: Tab<string>,
        sort: any,
        preData: Array<any>,
        verticalDirection?: 'top' | 'down',
        isInitial?: boolean
    ) => {
        setIsInitialRequest(isInitial ? true : false)
        try {
            setLoading(true)
            setFetchError(false)
            const response = await getEntity(
                apiUri.ticketList.uri(queryParamsGenerator(page, perPage, filter, sort)),
                apiUri.ticketList.permissions,
            )

            let recievedData: Array<any> = (response.data as any).data
            let totalPage = calculateTotalPageOfList((response as any).total, perPage)

            if (page === totalPage && page > 1 && recievedData.length < perPage && isInitial) {
                const responseOfPreviousPage = await getEntity(
                    apiUri.ticketList.uri(queryParamsGenerator((page - 1), perPage, filter, sort)),
                    apiUri.ticketList.permissions,
                )
                recievedData = [...(responseOfPreviousPage.data as any).data, ...recievedData]
                dispatch({ type: USE_PAGINATION_ACTION_TYPE.LOWEST_PAGE, payload: totalPage - 1 })
            }

            dispatch({ type: USE_PAGINATION_ACTION_TYPE.TOTAL_PAGE, payload: totalPage })
            if (!verticalDirection) {
                setData(() => ticketListDataS2CMiddleware([...recievedData]))
            }
            if (verticalDirection === 'down') {
                setData(() => [...preData, ...ticketListDataS2CMiddleware(recievedData)])
            } else {
                setData(() => [...ticketListDataS2CMiddleware(recievedData), ...preData])
                if (page > 1) onSuccessCallback()
            }
        } catch (err) {
            setFetchError(true)
            if (verticalDirection === 'down') {
                const payload: number = highestPage - 1
                dispatch({ type: USE_PAGINATION_ACTION_TYPE.HIGHEST_PAGE, payload })
            }
            if (verticalDirection === 'top') {
                const payload: number = lowestPage <= 1 ? 1 : lowestPage + 1
                dispatch({ type: USE_PAGINATION_ACTION_TYPE.LOWEST_PAGE, payload })
            }
        } finally {
            setLoading(false)
        }
    }, [loading, lowestPage, highestPage, setData, setIsInitialRequest, dispatch])

    const onSuccessCallback = useCallback(() => {
        setTimeout(() => elementRef.current?.scrollTo({ top: 1, behavior: 'smooth' }), 500)
    }, [elementRef])

    const handlePagination = useCallback(async (verticalDirection: 'top' | 'down') => {
        if (loading) return
        if (verticalDirection === 'top' && lowestPage === 1) return
        setLoading(true)
        if (verticalDirection === 'down') {
            if (totalPage && highestPage >= totalPage) {
                setLoading(false)
                return
            }
            const payload: number = highestPage + 1
            dispatch({ type: USE_PAGINATION_ACTION_TYPE.HIGHEST_PAGE, payload })
            handleRequest(payload, perPage, filter, sort, data, verticalDirection, false)
        } else {
            const payload: number = lowestPage === 1 ? 1 : lowestPage - 1
            dispatch({ type: USE_PAGINATION_ACTION_TYPE.LOWEST_PAGE, payload })
            handleRequest(payload, perPage, filter, sort, data, verticalDirection, false)
        }
    }, [loading, perPage, filter, sort, data, highestPage, lowestPage, dispatch, setLoading])

    useLayoutEffect(() => {
        bulkLatestConfigSetter({ page, perPage, filter, sort })
    }, [page, perPage, filter, sort])

    useLayoutEffect(() => {
        handleRequest(page, perPage, filter, sort, data, undefined, true)
    }, [])


    if (fetchError) {
        return (
            <PageError
                btnText={t('form.error.tryAgainBtn')}
                message={t('form.error.dataFetchingError')}
                onTryAgainBtnClick={() => handleRequest(page, perPage, filter, sort, data, undefined, isInitialRequest)}
                onBackBtnClick={() => navigate(PATH_OF_ROUTES.HOME)}
            />
        )
    }

    return (
        <>
            <TicketsPageWrapper style={{ overflowY: 'auto', height: '100vh' }}>
                <TicketsPageTabsWrapper ref={ticketsPageTabsWrapperRef}>
                    <Tabs
                        tabs={tabOptions}
                        activeTab={filter}
                        onTabClick={handleTabClick}
                    />
                </TicketsPageTabsWrapper>
                <TicketsGroupWrapper
                    siblingContainerHeight={ticketsPageTabsWrapperRef.current?.clientHeight}
                >
                    {
                        loadingType === 'top'
                            ? <ListLoadingWrapper >
                                <LoaderBars size={1} />
                                <LoaderText size={0.75}>
                                    {t('accessesPage.loadingAccesses')}
                                </LoaderText>
                            </ListLoadingWrapper>
                            : null
                    }
                    {
                        data && data.length
                            ? data.map((ticket) => {
                                return (
                                    <Fragment key={ticket.id}>
                                        <Ticket
                                            {...ticket}
                                        />
                                    </Fragment>
                                )
                            })
                            : <NoItem loading={loading} text={t('ticketsPage.noTicketsFound')} />
                    }
                    {
                        loadingType === 'down'
                            ? <ListLoadingWrapper >
                                <LoaderBars size={1} />
                                <LoaderText size={0.75}>
                                    {t('ticketsPage.loadingTickets')}
                                </LoaderText>
                            </ListLoadingWrapper>
                            : null
                    }
                </TicketsGroupWrapper>
            </TicketsPageWrapper>
            <TicketsButtonContainer>
                <Button
                    style={{
                        borderRadius: '1rem',
                        direction: 'ltr',
                        padding: '1rem',
                        height: '3.5rem',
                        width: 'max-content',
                    }}
                    type="FILLED"
                    size="M"
                    disabled={false}
                    loading={false}
                    hasIcon={true}
                    iconName="newTicket"
                    icon={Icon}
                    title={t('ticketsPage.newTicket')}
                    onClick={() => navigate(PATH_OF_ROUTES.CREATE_TICKET)}
                />
            </TicketsButtonContainer>
        </>
    )
}

export default Tickets
