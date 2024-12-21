import ACCESS_STATUS_TYPE from "../../enums/access-status-type"
import { ServerAccessModel } from "../../models/api-reponse/access"
import { AccessEntityModel } from "../../models/pages/accesses"

export const accessListDataS2CMiddleware = (accesses: Array<ServerAccessModel>): Array<AccessEntityModel> => {
    if (!accesses) return []
    return accesses.map((access) => ({
        id: access.id || NaN,
        status: access?.status === '0' ? ACCESS_STATUS_TYPE.EXPIRED : ACCESS_STATUS_TYPE.ACTIVE,
        personName: access?.name || '',
        startDate: new Date(access?.taradod_from_utc).toLocaleDateString('fa-IR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        startTime: new Date(access?.taradod_from_utc).toLocaleTimeString('fa-IR', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        }),
        endDate: new Date(access?.taradod_to_utc).toLocaleDateString('fa-IR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        endTime: new Date(access?.taradod_to_utc).toLocaleTimeString('fa-IR', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        }),
        personDescription: access?.position_name || '',
        description: access?.ticket_description || ''
    }))
}
