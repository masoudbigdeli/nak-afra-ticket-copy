import { FC, lazy, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import RouteModel from '../../../models/route-model'
import routes from '../../../configs/routes'
import PATH_OF_ROUTES from '../../../enums/path-of-routes'

const TopNavigationWrapper = lazy(() => import('../../../styles/components/layout/top-navigation'))
const Icon = lazy(() => import('../../icons/icon'))

interface TopNavigationProps {
    forceHideBackBtn?: boolean,
}

const TopNavigation: FC<TopNavigationProps> = ({ forceHideBackBtn }) => {
    const { t } = useTranslation()
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const currentRoute: RouteModel | undefined = useMemo(() => {
        return routes.find((route: RouteModel) => (route.pathMatcher(pathname)))
    }, [pathname])

    const showNotifications: boolean = useMemo(() => {
        if (!currentRoute) return false
        return routes
            .filter((route: RouteModel) => (route.showNotificationsIcon))
            .map((route: RouteModel) => (route.id))
            .includes(currentRoute.id)
    }, [currentRoute])

    const goToNotifications = useCallback(() => navigate(PATH_OF_ROUTES.NOTIFICATIONS), [navigate])

    const handleBackButtonClick = useCallback(() => {
        if (forceHideBackBtn) return
        window.history.back()
    }, [forceHideBackBtn, navigate])

    if (!currentRoute || !currentRoute.uiLayoutConfig.hasHeader) return null

    return (
        <TopNavigationWrapper>
            <div className='item'>
                {
                    forceHideBackBtn
                        ? null
                        : <Icon iconName='backArrow' size='1.5' style={{ cursor: 'pointer' }} onClick={handleBackButtonClick} />
                }
            </div>
            <div className='item title'>
                {t(`topNavigation.${currentRoute.title}`)}
            </div>
            <div className='item' >
                {
                    showNotifications
                        ? <Icon iconName='notificationIcon' size='1.5' style={{ cursor: 'pointer' }} onClick={goToNotifications} />
                        : null
                }
            </div>
        </TopNavigationWrapper>
    )
}

export default TopNavigation