import LanguageModel from './language-model'
import NotificationModel from './notification-model'
import APPLICATION_VIEW from '../enums/application-view-enum'
import Profile from './api-reponse/profile'

export type ApplicationEntities = 'ticket' | 'access' | 'contract' | 'notification'

export interface StoreDataModel {
    token: string | null
    refreshToken: string | null
    user: Profile | null
    language: LanguageModel
    darkMode: boolean
    permissions: Array<string>
    activePopoverName: string | null
    notifications: Array<NotificationModel>
    applicationRunTimeData: {
        viewMode: APPLICATION_VIEW
        numberOfInstallSuggestion: number
        latestTimeOfInstallSuggestion: number
    }
    entitiesListFetchLatestConfig: Record<ApplicationEntities, { filter: any }>
}

export interface StoreActionModel {
    setToken: (token: StoreDataModel['token']) => void
    setRefreshToken: (refreshToken: StoreDataModel['refreshToken']) => void
    setUser: (user: StoreDataModel['user']) => void
    setLanguage: (language: StoreDataModel['language']) => void
    setDarkMode: (darkMode: StoreDataModel['darkMode']) => void
    setPermissions: (permissions: StoreDataModel['permissions']) => void
    setActivePopoverName: (activePopoverName: StoreDataModel['activePopoverName']) => void
    setNotifications: (notifications: StoreDataModel['notifications']) => void
    setApplicationRunTimeData: (applicationRunTimeData: StoreDataModel['applicationRunTimeData']) => void
    setEntitiesListFetchLatestConfig: (entitiesListFetchLatestConfig: StoreDataModel['entitiesListFetchLatestConfig']) => void
}

type StoreModel = StoreDataModel & StoreActionModel

export default StoreModel