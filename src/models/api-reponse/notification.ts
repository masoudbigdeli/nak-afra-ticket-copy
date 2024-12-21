export interface NotificationServerModel {
    id: number
    title: string
    message: string,
    parent_id: number,
    read: number,
    created_at: string,
    updated_at: string
}