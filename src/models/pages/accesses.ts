import ACCESS_STATUS_TYPE from "../../enums/access-status-type"

export interface AccessEntityModel {
    id: number
    status: ACCESS_STATUS_TYPE
    personName: string
    startDate: string,
    startTime: string
    endDate: string,
    endTime: string
    personDescription: string
    description: string
}