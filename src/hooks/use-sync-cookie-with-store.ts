import { useCallback, useLayoutEffect, useMemo } from 'react'
import StoreModel from '../models/store-model'
import useStore, { persistedStoreName } from '../state-management/store'
import APPLICATION_VIEW from '../enums/application-view-enum'

const useSyncCookieWithStore = () => {
    const store: StoreModel = useStore<StoreModel>((store: StoreModel) => store)
    const applicationRunTimeData: StoreModel['applicationRunTimeData'] = useStore<StoreModel['applicationRunTimeData']>((store: StoreModel) => store.applicationRunTimeData)

    const stringedStore: string = useMemo(() => (JSON.stringify(store)), [store])

    const persisStoreInCookie = useCallback((stringedStore: string) => {
        if (applicationRunTimeData.viewMode === APPLICATION_VIEW.NATIVE_MODE) {
            document.cookie = `${persistedStoreName}=${stringedStore}; path=/; max-age=31536000; SameSite=Strict; secure`
        } else {
            document.cookie = `${persistedStoreName}=; path=/; max-age=31536000; SameSite=Strict; secure`
        }
    }, [applicationRunTimeData])

    useLayoutEffect(() => {
        persisStoreInCookie(stringedStore)
    }, [stringedStore, persisStoreInCookie])
}

export default useSyncCookieWithStore