import StoreModel from '../models/store-model'
import useStore from '../state-management/store'
import { doesMainArrayIncludeAllElementsOfConditionalArray } from '../utils/array-custom-methods'

const useServiceAuthorization = () => {
    const permissions: Array<string> = useStore<StoreModel['permissions']>((store: StoreModel) => store.permissions)

    const isServiceAuthorized = (servicePermissions?: Array<string>): boolean => {
        if (typeof servicePermissions === 'undefined' || !servicePermissions.length) return true
        if (!permissions.length) return false
        return doesMainArrayIncludeAllElementsOfConditionalArray(permissions, servicePermissions)
    }

    return isServiceAuthorized
}

export default useServiceAuthorization