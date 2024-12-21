import { useMemo } from 'react'
import RouteModel from '../models/route-model'
import useIsAuthenticated from './use-is-authenticated'
import routes from '../configs/routes'
import StoreModel from '../models/store-model'
import useStore from '../state-management/store'
import { doesMainArrayIncludeAllElementsOfConditionalArray } from '../utils/array-custom-methods'

const useRoutes = (): Array<RouteModel> => {
    const isAuthenticated: boolean = useIsAuthenticated()
    const permissions: StoreModel['permissions'] = useStore<StoreModel['permissions']>((store: StoreModel) => store.permissions)

    const conditionalRoutes: Array<RouteModel> = useMemo(() => {
        if (isAuthenticated) {
            if (!permissions.length) {
                return routes
                    .filter((route: RouteModel) => (typeof route.permissions === 'undefined' || !route.permissions.length))
                    .filter((route: RouteModel) => (!route.limitAfterLogin))
            }
            return routes
                .filter((route: RouteModel) => doesMainArrayIncludeAllElementsOfConditionalArray(permissions, (route.permissions || [])))
                .filter((route: RouteModel) => (!route.limitAfterLogin))
        }
        return routes.filter((route: RouteModel) => route.isPublic)
    }, [isAuthenticated, permissions])

    return conditionalRoutes
}

export default useRoutes
