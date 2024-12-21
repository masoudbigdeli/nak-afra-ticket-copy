import { FC, Fragment, useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PagesContainer from '../../styles/general/pages-container'
import NotificationsPageWrapper from '../../styles/pages/notifications'
import NotificationItem from './notification'
import { notificationListDataS2CMiddleware } from '../../services-data-middleware/server-to-client/notification'
import USE_PAGINATION_ACTION_TYPE from '../../enums/use-pagination-action-type'
import useCrudService from '../../services/crud-service'
import usePaginationConfig from '../../hooks/use-pagination-config'
import { Tab } from '../../components/tabs'
import usePagination from '../../hooks/use-pagination'
import useScrollDetection, { VerticalDirectionType } from '../../hooks/use-scroll-detection'
import apiUri from '../../configs/api-uri'
import calculateTotalPageOfList from '../../utils/calculate-total-page-of-list'
import PageError from '../../components/page-error'
import PATH_OF_ROUTES from '../../enums/path-of-routes'
import { useNavigate } from 'react-router-dom'
import { queryParamsGenerator } from '../contracts/helper'
import { ListLoadingWrapper, LoaderText } from '../../styles/components/loading'
import { LoaderBars } from '../../components/loading'
import NoItem from '../../components/no-item'

const Notifications: FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { getEntity } = useCrudService()
    const { latestConfig, bulkLatestConfigSetter } = usePaginationConfig('access')

    const [loading, setLoading] = useState<boolean>(true)
    const [fetchError, setFetchError] = useState<boolean>(false)
    const [isInitialRequest, setIsInitialRequest] = useState<boolean>(true)

    const [data, setData] = useState<Array<any>>([])

    const { page, lowestPage, highestPage, perPage, totalPage, filter, sort, dispatch } = usePagination<Tab<string>, undefined>({
        ...latestConfig,
    })

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
        _filter: Tab<string>,
        _sort: any,
        preData: Array<any>,
        verticalDirection?: 'top' | 'down',
        isInitial?: boolean
    ) => {
        setIsInitialRequest(isInitial ? true : false)
        try {
            setLoading(true)
            setFetchError(false)
            const response = await getEntity(
                apiUri.notifications.uri(queryParamsGenerator(page, perPage, filter, sort)),
                apiUri.notifications.permissions,
            )

            let recievedData: Array<any> = (response.data as any).data
            let totalPage = calculateTotalPageOfList((response.data as any).total, perPage)

            if (page === totalPage && page > 1 && recievedData.length < perPage && isInitial) {
                const responseOfPreviousPage = await getEntity(
                    apiUri.notifications.uri(queryParamsGenerator((page - 1), perPage, filter, sort)),
                    apiUri.notifications.permissions,
                )
                recievedData = [...(responseOfPreviousPage.data as any).data, ...recievedData]
                dispatch({ type: USE_PAGINATION_ACTION_TYPE.LOWEST_PAGE, payload: totalPage - 1 })
            }

            dispatch({ type: USE_PAGINATION_ACTION_TYPE.TOTAL_PAGE, payload: totalPage })
            if (!verticalDirection) {
                setData(() => notificationListDataS2CMiddleware([...recievedData]))
            }
            if (verticalDirection === 'down') {
                setData(() => [...preData, ...notificationListDataS2CMiddleware(recievedData)])
            } else {
                setData(() => [...notificationListDataS2CMiddleware(recievedData), ...preData])
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
            handleRequest(payload, perPage, filter, sort, data, verticalDirection)
        } else {
            const payload: number = lowestPage === 1 ? 1 : lowestPage - 1
            dispatch({ type: USE_PAGINATION_ACTION_TYPE.LOWEST_PAGE, payload })
            handleRequest(payload, perPage, filter, sort, data, verticalDirection)
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
        <PagesContainer style={{ overflowY: 'auto', }}>
            <NotificationsPageWrapper>
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
                    data ? data.map((notification) => (
                        <Fragment key={notification.id}>
                            <NotificationItem
                                {...notification}
                            />
                        </Fragment>
                    ))
                        : <NoItem loading={loading} text={t('notificationsPage.thereIsNoNotification')} />
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
            </NotificationsPageWrapper>
        </PagesContainer>
    )
}

export default Notifications