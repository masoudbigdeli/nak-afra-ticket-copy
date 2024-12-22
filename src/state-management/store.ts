import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import StoreModel, { StoreDataModel } from '../models/store-model'
import cookieToStore from './cookie-parser'

export const persistedStoreName: string = 'nak-afra-crm-system'

const persistedDataInCookie: StoreDataModel = cookieToStore(persistedStoreName, false)

const useStore = create<StoreModel, any>(
    persist((set, _) => ({
        token: persistedDataInCookie.token,
        setToken: (token: StoreModel['token']) => {
            set({ token })
        },
        refreshToken: persistedDataInCookie.refreshToken,
        setRefreshToken: (refreshToken: StoreModel['refreshToken']) => {
            set({ refreshToken })
        },
        user: persistedDataInCookie.user,
        setUser: (user: StoreModel['user']) => {
            set({ user })
        },
        language: persistedDataInCookie.language,
        setLanguage: (language: StoreModel['language']) => {
            set({ language })
        },
        darkMode: persistedDataInCookie.darkMode,
        setDarkMode: (darkMode: StoreModel['darkMode']) => {
            set({ darkMode })
        },
        permissions: [],
        setPermissions: (permissions: StoreModel['permissions']) => {
            set({ permissions })
        },
        activePopoverName: null,
        setActivePopoverName(activePopoverName: StoreModel['activePopoverName']) {
            set({ activePopoverName })
        },
        notifications: persistedDataInCookie.notifications,
        setNotifications: (notifications: StoreModel['notifications']) => {
            set({ notifications })
        },
        applicationRunTimeData: persistedDataInCookie.applicationRunTimeData,
        setApplicationRunTimeData: (applicationRunTimeData: StoreModel['applicationRunTimeData']) => {
            set({ applicationRunTimeData })
        },
        entitiesListFetchLatestConfig: persistedDataInCookie.entitiesListFetchLatestConfig,
        setEntitiesListFetchLatestConfig: (entitiesListFetchLatestConfig: StoreModel['entitiesListFetchLatestConfig']) => {
            set({ entitiesListFetchLatestConfig })
        },
    }),
        {
            name: persistedStoreName,
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)

export default useStore