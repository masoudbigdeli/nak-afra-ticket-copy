import { FC } from 'react'
import PATH_OF_ROUTES from '../enums/path-of-routes'
import { IconName } from '../components/icons/icon-list'

interface RouteModel {
    id: string,
    path: PATH_OF_ROUTES
    pathMatcher: (pathName?: string) => boolean
    showInBottomNavigation: boolean
    showNotificationsIcon?: boolean
    bottomNavigationIconName: IconName | ''
    title: string
    cmp: FC
    layout: FC<{ children: JSX.Element }>
    isPublic?: boolean
    permissions?: Array<string>
    limitAfterLogin?: boolean
    isFullPage: boolean
    uiLayoutConfig: {
        hasHeader: boolean
        hasFooter: boolean
        forceHideBackBtn?: boolean
    }
}

export default RouteModel