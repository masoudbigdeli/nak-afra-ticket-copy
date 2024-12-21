import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import StoreModel from '../models/store-model'
import useStore from '../state-management/store'
import RouteModel from '../models/route-model'
import routes from '../configs/routes'
import { doesMainArrayIncludeAllElementsOfConditionalArray } from '../utils/array-custom-methods'

const useHasAccessPermissions = (): boolean => {
    const { pathname } = useLocation()

    const permissions: StoreModel['permissions'] = useStore<StoreModel['permissions']>((store: StoreModel) => store.permissions)

    const route: RouteModel | undefined = useMemo(() => {
        return routes.find((route: RouteModel) => route.path === pathname)
    }, [pathname])

    const status: boolean = useMemo(() => {
        if (!route || !route.permissions || !route.permissions.length) return true
        if (!permissions.length) return false
        return doesMainArrayIncludeAllElementsOfConditionalArray(permissions, route.permissions)
    }, [route, permissions])

    return status
}

export default useHasAccessPermissions