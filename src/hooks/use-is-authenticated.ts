import { useEffect, useLayoutEffect } from 'react'
import StoreModel from '../models/store-model'
import useStore from '../state-management/store'

const useIsAuthenticated = (): boolean => {
    const token: StoreModel['token'] = useStore<StoreModel['token']>((store: StoreModel) => store.token)
    const user: StoreModel['user'] = useStore<StoreModel['user']>((store: StoreModel) => store.user)
    const setUser: StoreModel['setUser'] = useStore<StoreModel['setUser']>((store: StoreModel) => store.setUser)
    const setPermissions: StoreModel['setPermissions'] = useStore<StoreModel['setPermissions']>((store: StoreModel) => store.setPermissions)

    useLayoutEffect(() => {
        if ((typeof token !== 'string' || token === '') && user !== null) {
            setUser(null)
            setPermissions([])
        }
    }, [token, user, setUser])

    useEffect(() => {
        if ((typeof token !== 'string' || token === '') && user !== null) {
            setUser(null)
            setPermissions([])
        }
    }, [token, user, setUser])

    return token !== null
    // return true
}

export default useIsAuthenticated