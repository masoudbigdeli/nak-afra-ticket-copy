import { FC, Fragment, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PagesContainer from '../../styles/general/pages-container'
import NotificationsPageWrapper from '../../styles/pages/notifications'
import NotificationItem from './notification'
import { notificationListDataS2CMiddleware } from '../../services-data-middleware/server-to-client/notification'
import useCrudService from '../../services/crud-service'
import apiUri from '../../configs/api-uri'
import { queryParamsGenerator } from '../contracts/helper'
import { ListLoadingWrapper, LoaderText } from '../../styles/components/loading'
import { LoaderBars } from '../../components/loading'
import NoItem from '../../components/no-item'
import { calculateFetchHasMore } from '../../utils/calculate-fetch-has-more'
import { useInfiniteQuery } from '@tanstack/react-query'

const Notifications: FC = () => {
    const { t } = useTranslation()
    const { getEntity } = useCrudService()


    const loadMoreRef = useRef<HTMLDivElement | null>(null)









    const fetchNotifications = async (
        { pageParam = 1 }: { pageParam?: number}
    ) => {
        try {

            const res = await getEntity(
                apiUri.notifications.uri(queryParamsGenerator(pageParam, 10)),
                apiUri.notifications.permissions
            )

            return {
                items: notificationListDataS2CMiddleware((res.data as any).data),
                hasMore: calculateFetchHasMore((res.data as any).meta.total, (res.data as any).meta.per_page, (res.data as any).meta.current_page)
            }
        } catch (error) {

        }
    }

    const { data, hasNextPage, isFetchNextPageError, isFetchingNextPage, isLoading, fetchNextPage } = useInfiniteQuery({
        queryKey: ['notifications'],
        initialPageParam: 1,
        queryFn: fetchNotifications,
        getNextPageParam: (lastPage, allPages) => {
            if (!lastPage) return undefined
            return lastPage.hasMore ? allPages.length + 1 : undefined
        }
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
        <PagesContainer data-scroll-key="true" style={{ overflowY: 'auto', }}>
            <NotificationsPageWrapper>
                {
                    data && data?.pages[0] !== undefined 
                        ? data?.pages.map((page) =>

                            page?.items.map((item: any) => (

                                <Fragment key={item.id}>
                                    <NotificationItem
                                        {...item}
                                    />
                                </Fragment>

                            ))
                        )
                        : <NoItem loading={isLoading} text={t('notificationsPage.thereIsNoNotification')} />
                }
                {
                    isFetchNextPageError
                        ? 'button'
                        : null
                }
                {
                    isLoading || isFetchingNextPage

                        ? <ListLoadingWrapper >
                            <LoaderBars size={1} />
                            <LoaderText size={0.75}>
                                {t('notificationsPage.loadingNotifications')}
                            </LoaderText>
                        </ListLoadingWrapper>
                        : null
                }
                <div ref={loadMoreRef} style={{ height: '20px' }} />
            </NotificationsPageWrapper>
        </PagesContainer>
    )
}

export default Notifications