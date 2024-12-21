import ApiModel from '../models/api-model'

const apiUri: Record<string, ApiModel> = {
    loginOtp: {
        permissions: [],
        uri: () => 'login'
    },
    loginOtpCheck: {
        permissions: [],
        uri: () => 'verify-token'
    },
    refreshToken: {
        permissions: [],
        uri: () => ''
    },
    logout: {
        permissions: [],
        uri: () => 'logout'
    },
    getProfile: {
        permissions: [],
        uri: () => 'user'
    },
    notifications: {
        permissions: [],
        uri: () => 'messages'
    },
    contractList: {
        permissions: [],
        uri: (queryParams?: string) => `contracts${queryParams}`
    },
    contractDetail: {
        permissions: [],
        uri: (id: string) => `contracts/${id}`
    },
    accessList: {
        permissions: [],
        uri: (queryParams?: string) => `license-tickets${queryParams}`
    },
    supports: {
        permissions: [],
        uri: () => 'settings'
    },
    uploadFiles: {
        permissions: [],
        uri: () => 'pictures/upload'
    },
    ticketList: {
        permissions: [],
        uri: (queryParams?: string) => `support-messages${queryParams}`
    },
    ticketCreate: {
        permissions: [],
        uri: () => 'support-messages'
    },
    getTicketById: {
        permissions: [],
        uri: (id: string) => `support-messages/${id}`
    },
    ticketUpdate: {
        permissions: [],
        uri: (id: string) => `support-messages/${id}`
    },
    ticketFollowingUp: {
        permissions: [],
        uri: (id: string) => `support-messages/${id}/reply`
    },
    deleteTicketById: {
        permissions: [],
        uri: (id: string) => `support-messages/${id}`
    },
    getHomeWidgets: {
        permissions: [],
        uri: () => 'settings/homewidget'
    }

}

export default apiUri