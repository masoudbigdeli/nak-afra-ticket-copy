import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import RouteModel from '../models/route-model'
import routes from '../configs/routes'

const useSynchronizerRouteLayout = (): RouteModel['uiLayoutConfig'] => {
    const { pathname } = useLocation()

    const currentRoute: RouteModel | undefined = useMemo(() => {
        return routes.find((value: RouteModel) => (value.pathMatcher(pathname)))
    }, [pathname])

    if (currentRoute) return currentRoute.uiLayoutConfig

    return {
        hasHeader: false,
        hasFooter: false,
    }
}

export default useSynchronizerRouteLayout