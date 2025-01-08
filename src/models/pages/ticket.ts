import TICKET_MESSAGE_CREATOR_TYPE from '../../enums/ticket-message-creator-type'
import TICKET_STATUS_TYPE from '../../enums/ticket-status-type'

export interface TicketEntityModel {
    id: number
    status: TICKET_STATUS_TYPE
    title: string
    date: string
    time: string
}

export interface TicketEntityDetailModel {
    id: number
    subject: string
    text: string
    images: Array<{ id: number, url: string }>
    status: TICKET_STATUS_TYPE
    date: string
    time: string
    messages?: Array<TicketMessageModel>
}

export interface TicketMessageModel {
    id: number
    type: TICKET_MESSAGE_CREATOR_TYPE
    date: string
    time: string
    text: string
}
