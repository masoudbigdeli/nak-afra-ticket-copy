import { NotificationServerModel } from "../../models/api-reponse/notification"
import { NotificationEntityModel } from "../../models/pages/notification"

export const notificationListDataS2CMiddleware = (notifications?: Array<NotificationServerModel>): Array<NotificationEntityModel> => {
    
    if (!notifications) return []
    return notifications?.map((notification) => ({
        id: notification?.id || NaN,
        title: notification?.title || '',
        time: new Date(notification?.created_at).toLocaleTimeString('fa-IR', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        }),
        date: new Date(notification?.created_at).toLocaleDateString('fa-IR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        description: notification?.message,
    }))
}