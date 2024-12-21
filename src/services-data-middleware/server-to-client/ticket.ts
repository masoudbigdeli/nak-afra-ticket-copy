import TICKET_MESSAGE_CREATOR_TYPE from "../../enums/ticket-message-creator-type"
import TICKET_STATUS_TYPE from "../../enums/ticket-status-type"
import { ServerTicketDetailModel, ServerTicketListModel, ServerTicketRepliesModel } from "../../models/api-reponse/ticket"
import { TicketEntityDetailModel, TicketEntityModel, TicketMessageModel } from "../../models/pages/ticket"


export const ticketListDataS2CMiddleware = (tickets?: Array<ServerTicketListModel>): Array<TicketEntityModel> => {
    if (!tickets) return []
    return tickets.map((ticket) => ({
        id: ticket.id,
        status: convertServerTicketStatusToClient(ticket),
        title: ticket.subject,
        date: new Date(ticket.created_at).toLocaleDateString('fa-IR'),
        time: new Date(ticket.created_at).toLocaleTimeString('fa-IR', {
            hour: '2-digit',
            minute: '2-digit',
        })
    }))
}

export const ticketDetailDataS2CMiddleware = (ticket?: ServerTicketDetailModel): TicketEntityDetailModel => {
    return {
        id: ticket?.id || NaN,
        subject: ticket?.subject || '',
        text: ticket?.description || '',
        images: convertServerTicketImagesToClient(ticket),
        date: new Date(ticket?.created_at ? ticket?.created_at : '').toLocaleDateString('fa-IR'),
        time: new Date(ticket?.created_at ? ticket?.created_at : '').toLocaleTimeString('fa-IR').substring(0, 5),
        status: convertServerTicketStatusToClient(ticket),
        messages: converServerTicketRepliesToClient(ticket)
    }
}

const convertServerTicketImagesToClient = (ticket?: ServerTicketDetailModel): Array<{ id: number, url: string }> => {
    if (!ticket || !ticket.picture_ids || !ticket.picture_ids.length || ticket.picture_ids.length !== ticket.pictures?.length) return []
    return ticket.picture_ids.map((pictureId: string, i: number) => ({
        id: isNaN(Number(pictureId)) ? -1 : Number(pictureId),
        url: ticket.pictures ? ticket.pictures[i] : ''
    })).filter((item: { id: number, url: string }) => (item.id >= 0 && item.url !== ''))
}

const convertServerTicketStatusToClient = (ticket?: ServerTicketDetailModel | ServerTicketListModel): TICKET_STATUS_TYPE => {
    if (!ticket) return TICKET_STATUS_TYPE.CLOSED
    switch (ticket.status) {
        case '0':
            return TICKET_STATUS_TYPE.OPEN
        case '1':
            return TICKET_STATUS_TYPE.READ
        case '2':
            return TICKET_STATUS_TYPE.FOLLOWINGUP
        default:
            return TICKET_STATUS_TYPE.CLOSED
    }
}

const converServerTicketRepliesToClient = (ticket?: ServerTicketDetailModel): Array<TicketMessageModel> => {
    if (!ticket || !ticket.replies || !ticket.replies.length) return []
    return ticket.replies.map((item: ServerTicketRepliesModel) => ({
        id: item.id,
        date: new Date(item.created_at ? item.created_at : '').toLocaleDateString('fa-IR'),
        time: new Date(item.created_at ? item.created_at : '').toLocaleTimeString('fa-IR').substring(0, 5),
        text: item.description,
        type: item.type === '0' ? TICKET_MESSAGE_CREATOR_TYPE.USER : TICKET_MESSAGE_CREATOR_TYPE.NAK_STAFF
    }))
}