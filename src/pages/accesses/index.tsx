import { FC, Fragment, useCallback, useEffect, useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import AccessesPageWrapper, { AccesesGroupWrapper, AccessesPageTabsWrapper } from '../../styles/pages/accesses'
import { accessListDataS2CMiddleware } from '../../services-data-middleware/server-to-client/access'
import Tabs, { Tab } from '../../components/tabs'
import Access from './access'
import useCrudService from '../../services/crud-service'
import apiUri from '../../configs/api-uri'
import { queryParamsGenerator } from '../contracts/helper'
import { ListLoadingWrapper, LoaderText } from '../../styles/components/loading'
import { LoaderBars } from '../../components/loading'
import NoItem from '../../components/no-item'
import { useNavigate } from 'react-router-dom'
import { useInfiniteQuery } from '@tanstack/react-query'
import { calculateFetchHasMore } from '../../utils/calculate-fetch-has-more'
import useStore from '../../state-management/store'
import StoreModel from '../../models/store-model'
import PATH_OF_ROUTES from '../../enums/path-of-routes'
import replaceChar1WithChar2 from '../../utils/replace-char1-with-char2'
import Button from '../../components/button'
import Icon from '../../components/icons/icon'


const Accesses: FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { getEntity } = useCrudService()
    const accessesPageTabsWrapperRef = useRef<HTMLDivElement | null>(null)
    const loadMoreRef = useRef<HTMLDivElement | null>(null)

    const tabOptions: Array<Tab<string>> = useMemo(() => [
        { id: 1, label: t('accessesPage.activeAccessesTab'), value: 'status=1' },
        { id: 2, label: t('accessesPage.expiredAccessesTab'), value: 'status=0' }
    ], [])

    const initialFilter: Tab<string> | null = useStore((store: StoreModel) => store.entitiesListFetchLatestConfig['access']?.filter)
    const entitiesListFetchLatestConfig = useStore((store: StoreModel) => store.entitiesListFetchLatestConfig)
    const setEntitiesListFetchLatestConfig = useStore((store: StoreModel) => store.setEntitiesListFetchLatestConfig)

    useEffect(() => {
        const hash: string = (initialFilter ? initialFilter.label : tabOptions[0].label)
        navigate({
            pathname: PATH_OF_ROUTES.ACCESSES,
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
            pathname: PATH_OF_ROUTES.ACCESSES,
            hash: replaceChar1WithChar2(tab.label, ' ', '-')
        })
        setEntitiesListFetchLatestConfig({
            ...entitiesListFetchLatestConfig,
            access: { 'filter': tab }
        })
    }, [filter])

    const fetchAccesses = async (
        { pageParam = 1, queryKey }: { pageParam?: number; queryKey: (string | { filter: Tab<string> })[] }
    ) => {
        const [, { filter }] = queryKey as [string, { filter: Tab<string> }]
        try {

            const res = await getEntity(
                apiUri.accessList.uri(queryParamsGenerator(pageParam, 10, filter)),
                apiUri.accessList.permissions
            )

            return {
                items: accessListDataS2CMiddleware((res.data as any).data),
                hasMore: calculateFetchHasMore((res.data as any).meta.total, (res.data as any).meta.per_page, (res.data as any).meta.current_page)
            }
        } catch (error) {

        }
    }

    const { data, hasNextPage, isFetchNextPageError, isFetchingNextPage, isLoading, fetchNextPage } = useInfiniteQuery({
        queryKey: ['accesses', { filter }],
        initialPageParam: 1,
        queryFn: fetchAccesses,
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
        <AccessesPageWrapper>
            <AccessesPageTabsWrapper ref={accessesPageTabsWrapperRef}>
                <Tabs
                    tabs={tabOptions}
                    activeTab={filter}
                    onTabClick={handleTabClick}
                />
            </AccessesPageTabsWrapper>
            <AccesesGroupWrapper
                data-scroll-key="true"
                siblingContainerHeight={accessesPageTabsWrapperRef.current?.clientHeight}
            >
                {
                    data && data?.pages[0] !== undefined
                        ? data?.pages.map((page) =>

                            page?.items.map((item: any) => (

                                <Fragment key={item.id}>
                                    <Access
                                        id={item.id}
                                        startDate={item.startDate}
                                        endDate={item.endDate}
                                        status={item.status}
                                        personName={item.personName}
                                        startTime={item.startTime}
                                        endTime={item.endTime}
                                        personDescription={item.personDescription}
                                        description={item.description}
                                    />
                                </Fragment>

                            ))
                        )
                        : <NoItem loading={isLoading} text={t('accessesPage.noAccssesFound')} />
                }
                {
                    isFetchNextPageError
                        ? <Button
                            type='FILLED'
                            size='M'
                            title={t('accessesPage.tryAgain')}
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
                                {t('accessesPage.loadingAccesses')}
                            </LoaderText>
                        </ListLoadingWrapper>
                        : null
                }
                <div ref={loadMoreRef} style={{ height: '20px' }} />
            </AccesesGroupWrapper>
        </AccessesPageWrapper>
    )
}

export default Accesses