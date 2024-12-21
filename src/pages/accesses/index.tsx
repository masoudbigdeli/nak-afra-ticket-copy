import { FC, Fragment, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import usePaginationConfig from '../../hooks/use-pagination-config'
import usePagination from '../../hooks/use-pagination'
import useScrollDetection, { VerticalDirectionType } from '../../hooks/use-scroll-detection'
import USE_PAGINATION_ACTION_TYPE from '../../enums/use-pagination-action-type'
import AccessesPageWrapper, { AccesesGroupWrapper, AccessesPageTabsWrapper } from '../../styles/pages/accesses'
import { accessListDataS2CMiddleware } from '../../services-data-middleware/server-to-client/access'
import Tabs, { Tab } from '../../components/tabs'
import Access from './access'
import useCrudService from '../../services/crud-service'
import apiUri from '../../configs/api-uri'
import calculateTotalPageOfList from '../../utils/calculate-total-page-of-list'
import { queryParamsGenerator } from '../contracts/helper'
import { ListLoadingWrapper, LoaderText } from '../../styles/components/loading'
import { LoaderBars } from '../../components/loading'
import NoItem from '../../components/no-item'
import PageError from '../../components/page-error'
import PATH_OF_ROUTES from '../../enums/path-of-routes'
import { useNavigate } from 'react-router-dom'

const Accesses: FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { getEntity } = useCrudService()
    const { latestConfig, bulkLatestConfigSetter } = usePaginationConfig('access')
    const accessesPageTabsWrapperRef = useRef<HTMLDivElement | null>(null)

    const tabOptions: Array<Tab<string>> = useMemo(() => [
        { id: 1, label: t('accessesPage.activeAccessesTab'), value: 'status=1' },
        { id: 2, label: t('accessesPage.expiredAccessesTab'), value: 'status=0' }
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

    const { elementRef, verticalDirection, onScroll } = useScrollDetection<HTMLDivElement>({
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
                apiUri.accessList.uri(queryParamsGenerator(page, perPage, filter, sort)),
                apiUri.accessList.permissions,
            )

            let recievedData: Array<any> = (response.data as any).data
            let totalPage = calculateTotalPageOfList((response.data as any).meta.total, perPage)

            if (page === totalPage && page > 1 && recievedData.length < perPage && isInitial) {
                const responseOfPreviousPage = await getEntity(
                    apiUri.accessList.uri(queryParamsGenerator((page - 1), perPage, filter, sort)),
                    apiUri.accessList.permissions,
                )
                recievedData = [...(responseOfPreviousPage.data as any).data, ...recievedData]
                dispatch({ type: USE_PAGINATION_ACTION_TYPE.LOWEST_PAGE, payload: totalPage - 1 })
            }

            dispatch({ type: USE_PAGINATION_ACTION_TYPE.TOTAL_PAGE, payload: totalPage })
            if (!verticalDirection) {
                setData(() => accessListDataS2CMiddleware([...recievedData]))
            }
            if (verticalDirection === 'down') {
                setData(() => [...preData, ...accessListDataS2CMiddleware(recievedData)])
            } else {
                setData(() => [...accessListDataS2CMiddleware(recievedData), ...preData])
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
        <AccessesPageWrapper>
            <AccessesPageTabsWrapper ref={accessesPageTabsWrapperRef}>
                <Tabs
                    tabs={tabOptions}
                    activeTab={filter}
                    onTabClick={handleTabClick}
                />
            </AccessesPageTabsWrapper>
            <AccesesGroupWrapper
                siblingContainerHeight={accessesPageTabsWrapperRef.current?.clientHeight}
                ref={elementRef} onScroll={onScroll}
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
                    data
                        ?
                        data.map((access) => (
                            <Fragment key={access.id}>
                                <Access
                                    id={access.id}
                                    startDate={access.startDate}
                                    endDate={access.endDate}
                                    status={access.status}
                                    personName={access.personName}
                                    startTime={access.startTime}
                                    endTime={access.endTime}
                                    personDescription={access.personDescription}
                                    description={access.description}
                                />
                            </Fragment>
                        ))
                        : <NoItem loading={loading} text={t('accessesPage.noAccssesFound')} />
                }
                {
                    loadingType === 'down'
                        ? <ListLoadingWrapper >
                            <LoaderBars size={1} />
                            <LoaderText size={0.75}>
                                {t('accessesPage.loadingAccesses')}
                            </LoaderText>
                        </ListLoadingWrapper>
                        : null
                }
            </AccesesGroupWrapper>
        </AccessesPageWrapper>
    )
}

export default Accesses