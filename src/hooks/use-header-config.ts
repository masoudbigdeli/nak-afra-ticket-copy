import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import RouteModel from '../models/route-model'
import routes from '../configs/routes'

interface UseHeaderConfig {
    showHeader: boolean
    forceHideBackBtn: boolean
}

const useHeaderConfig = (): UseHeaderConfig => {
    const { pathname } = useLocation()

    const currentRoute: RouteModel | undefined = useMemo(() => {
        return routes.find((route: RouteModel) => (route.pathMatcher(pathname)))
    }, [pathname])

    if (!currentRoute) return {
        showHeader: false,
        forceHideBackBtn: false
    }

    return {
        showHeader: currentRoute.uiLayoutConfig.hasHeader,
        forceHideBackBtn: currentRoute.uiLayoutConfig.forceHideBackBtn || false
    }
}

export default useHeaderConfig