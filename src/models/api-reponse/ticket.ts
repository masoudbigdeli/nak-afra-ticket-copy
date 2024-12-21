

export interface ServerTicketListModel {
    id: number
    status: string
    subject: string
    parent_id: string
    created_at: string
}

export type ServerTicketReplyTypeField = '0' | '1'

export interface ServerTicketRepliesModel {
    id: number
    support_message_id: number
    description: string
    status: string
    type: ServerTicketReplyTypeField
    user_id: number
    created_at: string
    updated_at: string
}

export type ServerTicketDetailStatusField = '0' | '1' | '2' | '3'

export interface ServerTicketDetailModel {
    id: number
    subject: string
    description: string
    picture_ids?: Array<string>
    status: ServerTicketDetailStatusField
    created_at: string
    updated_at: string
    pictures?: Array<string>
    replies?: Array<ServerTicketRepliesModel>
}

