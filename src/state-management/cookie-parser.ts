import { StoreDataModel } from '../models/store-model'
import APPLICATION_VIEW from '../enums/application-view-enum'

const defaultStorage: StoreDataModel = {
    token: null,
    refreshToken: null,
    user: null,
    language: { label: 'persian', value: 'fa', dir: 'rtl' },
    darkMode: false,
    permissions: [],
    activePopoverName: null,
    notifications: [],
    applicationRunTimeData: {
        viewMode: APPLICATION_VIEW.BROWSER_MODE,
        numberOfInstallSuggestion: 0,
        latestTimeOfInstallSuggestion: 0,
    },
    entitiesListFetchLatestConfig: {
        'ticket': { 'filter': null },
        'access': { 'filter': null },
        'contract': { 'filter': null },
        'notification': { 'filter': null },
    }
}

const cookieToStore = (persistedStoreName: string, cacheActive: boolean): StoreDataModel => {
    if (!cacheActive) return defaultStorage
    const cookie = document.cookie
    if (typeof cookie !== 'string') return defaultStorage
    const splitedCookie: Array<string> = cookie.split('; ')
    const cookieByField: Record<string, string> = {}
    for (let i = 0; i < splitedCookie.length; i++) {
        const key: string = splitedCookie[i].split('=')[0]
        const value: string = splitedCookie[i].split('=')[1]
        cookieByField[key] = value
    }
    if (!Object.keys(cookieByField).includes(persistedStoreName)) return defaultStorage
    try {
        return JSON.parse(cookieByField[persistedStoreName])
    } catch {
        return defaultStorage
    }
}

export default cookieToStore