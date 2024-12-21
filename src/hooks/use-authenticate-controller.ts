import { useEffect, useLayoutEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import RouteModel from '../models/route-model'
import PATH_OF_ROUTES from '../enums/path-of-routes'
import useHasAccessPermissions from './use-has-access-permissions'
import useIsAuthenticated from './use-is-authenticated'
import routes from '../configs/routes'

const useAuthenticateController = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const isAuthenticated: boolean = useIsAuthenticated()
    const hasAccessPermissions: boolean = useHasAccessPermissions()
    const isCurrentPathPublic: boolean = useMemo(() => (!!(routes.find((route: RouteModel) => route.pathMatcher(pathname))?.isPublic)), [pathname])
    const limitAfterLogin: boolean = useMemo(() => (!!(routes.find((route: RouteModel) => route.pathMatcher(pathname))?.limitAfterLogin)), [pathname])

    useLayoutEffect(() => {
        if (!isAuthenticated && !isCurrentPathPublic) {
            navigate(PATH_OF_ROUTES.LOGIN)
        }
        if (isAuthenticated && (limitAfterLogin || !hasAccessPermissions)) {
            navigate(PATH_OF_ROUTES.HOME)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isCurrentPathPublic, hasAccessPermissions, limitAfterLogin])

    useEffect(() => {
        if (!isAuthenticated && !isCurrentPathPublic) {
            navigate(PATH_OF_ROUTES.LOGIN)
        }
        if (isAuthenticated && (limitAfterLogin || !hasAccessPermissions)) {
            navigate(PATH_OF_ROUTES.HOME)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, isCurrentPathPublic, hasAccessPermissions, limitAfterLogin])
}

export default useAuthenticateController