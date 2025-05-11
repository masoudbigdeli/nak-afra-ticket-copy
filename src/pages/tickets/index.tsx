import { FC, useRef, useCallback, useMemo, Fragment, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import TicketsPageWrapper, { TicketsButtonContainer, TicketsGroupWrapper, TicketsPageTabsWrapper } from '../../styles/pages/tickets'
import Tabs, { Tab } from '../../components/tabs'
import { ticketListDataS2CMiddleware } from '../../services-data-middleware/server-to-client/ticket'
import Ticket from './ticket'
import Button from '../../components/button'
import Icon from '../../components/icons/icon'
import { useNavigate } from 'react-router-dom'
import PATH_OF_ROUTES from '../../enums/path-of-routes'
import apiUri from '../../configs/api-uri'
import { queryParamsGenerator } from '../contracts/helper'
import useCrudService from '../../services/crud-service'
import NoItem from '../../components/no-item'
import { ListLoadingWrapper, LoaderText } from '../../styles/components/loading'
import { LoaderBars } from '../../components/loading'
import { calculateFetchHasMore } from '../../utils/calculate-fetch-has-more'
import { useInfiniteQuery } from '@tanstack/react-query'
import replaceChar1WithChar2 from '../../utils/replace-char1-with-char2'
import StoreModel from '../../models/store-model'
import useStore from '../../state-management/store'

const Tickets: FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { getEntity } = useCrudService()
    const loadMoreRef = useRef<HTMLDivElement | null>(null)
    const ticketsPageTabsWrapperRef = useRef<HTMLDivElement | null>(null)

    const tabOptions: Array<Tab<string>> = useMemo(() => [
        { id: 1, label: t('ticketsPage.OPENTicketTab'), value: 'status=0' },
        { id: 2, label: t('ticketsPage.READTicketTab'), value: 'status=1' },
        { id: 3, label: t('ticketsPage.FOLLOWINGUPTicketTab'), value: 'status=2' },
        { id: 4, label: t('ticketsPage.CLOSEDTicketTab'), value: 'status=3' },
    ], [])

    const initialFilter: Tab<string> | null = useStore((store: StoreModel) => store.entitiesListFetchLatestConfig['ticket']?.filter)
    const entitiesListFetchLatestConfig = useStore((store: StoreModel) => store.entitiesListFetchLatestConfig)
    const setEntitiesListFetchLatestConfig = useStore((store: StoreModel) => store.setEntitiesListFetchLatestConfig)

    useEffect(() => {
        const hash: string = (initialFilter ? initialFilter.label : tabOptions[0].label)
        navigate({
            pathname: PATH_OF_ROUTES.TICKETS,
            hash: replaceChar1WithChar2(hash, ' ', '-')
        })
    }, [])

    const filter: Tab<string> = useMemo(() => {
        if (!initialFilter) return tabOptions[0]
        return initialFilter
    }, [initialFilter, tabOptions])

    const handleTabClick = useCallback((tab: Tab<string>) => {
        if (tab.value === filter.value) return
        navigate({
            pathname: PATH_OF_ROUTES.TICKETS,
            hash: replaceChar1WithChar2(tab.label, ' ', '-')
        })
        setEntitiesListFetchLatestConfig({
            ...entitiesListFetchLatestConfig,
            ticket: { 'filter': tab }
        })
    }, [filter])

    const fetchTickets = async (
        { pageParam = 1, queryKey }: { pageParam?: number; queryKey: (string | { filter: Tab<string> })[] }
    ) => {
        const [, { filter }] = queryKey as [string, { filter: Tab<string> }]
        try {

            const res = await getEntity(
                apiUri.ticketList.uri(queryParamsGenerator(pageParam, 10, filter)),
                apiUri.ticketList.permissions
            )
            return {
                items: ticketListDataS2CMiddleware((res.data as any).data),
                hasMore: calculateFetchHasMore((res.data as any).meta.total, (res.data as any).meta.per_page, (res.data as any).meta.current_page)
            }
        } catch (error) {

        }
    }

    const { data, hasNextPage, isFetchNextPageError, isFetchingNextPage, isLoading, fetchNextPage } = useInfiniteQuery({
        queryKey: ['tickets', { filter }],
        initialPageParam: 1,
        queryFn: fetchTickets,
        getNextPageParam: (lastPage, allPages) => {
            if (!lastPage) return undefined
            return lastPage.hasMore ? allPages.length + 1 : undefined
        },
        staleTime: 1000 * 60 * 10,
        gcTime: 1000 * 60 * 10,
    })

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasNextPage) {
                fetchNextPage()
            }
        }, { threshold: 1 })

        if (loadMoreRef.current) observer.observe(loadMoreRef.current)
        return () => observer.disconnect()
    }, [hasNextPage, fetchNextPage])

    return (
        <>
            <TicketsPageWrapper data-scroll-key="true" style={{ overflowY: 'auto', height: '100vh' }}>
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
                        data && data?.pages[0] !== undefined
                            ? data?.pages.map((page) =>

                                page?.items.map((item: any) => (

                                    <Fragment key={item.id}>
                                        <Ticket
                                            {...item}
                                        />
                                    </Fragment>

                                ))
                            )
                            : <NoItem loading={isLoading} text={t('ticketsPage.noTicketsFound')} />
                    }
                    {
                        isFetchNextPageError
                            ? <Button
                                type='FILLED'
                                size='M'
                                title={t('ticketsPage.tryAgain')}
                                hasIcon={true}
                                icon={Icon}
                                iconName='refresh'
                                loading={isLoading}
                                disabled={false}
                                onClick={() => fetchNextPage}
                            />
                            : null
                    }
                    {
                        isLoading || isFetchingNextPage

                            ? <ListLoadingWrapper >
                                <LoaderBars size={1} />
                                <LoaderText size={0.75}>
                                    {t('ticketsPage.loadingTickets')}
                                </LoaderText>
                            </ListLoadingWrapper>
                            : null
                    }
                    <div ref={loadMoreRef} style={{ height: '20px' }} />
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
