import { useTranslation } from "react-i18next"
import Badge from "../../components/badge"
import Icon from "../../components/icons/icon"
import BADGE_TYPE from "../../enums/badge-type"
import TICKET_STATUS_TYPE from "../../enums/ticket-status-type"
import { TicketIconAndIdWrapper, TicketIdAndBadgeWrapper, TicketInfoTextsDateAndTimeWrapper, TicketInfoTextsWrapper, TicketWrapper } from "../../styles/pages/tickets"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { pathGenerator } from "../../enums/path-of-routes"

interface TicketProps {
    id: number
    status: TICKET_STATUS_TYPE
    title: string
    date: string
    time: string
}

const Ticket = ({ id, status, title, date, time }: TicketProps) => {
    console.log('ticket id:', id)
    const { t } = useTranslation()
    const navigate = useNavigate()
    const redirectTo = useCallback((id: number) => navigate(pathGenerator.TICKET_DETAIL!(id.toString())), [pathGenerator])

    return (
        <TicketWrapper onClick={() => redirectTo(id)}>
            <TicketIdAndBadgeWrapper>
                <TicketIconAndIdWrapper>
                    <Icon iconName='ticketId' size='1.5' />
                    <div className='ticket-id'>#{id}</div>
                </TicketIconAndIdWrapper>
                <Badge badgeType={BADGE_TYPE.GREEN}>
                    {t('ticketsPage.ticket') + ' ' + t('ticketsPage.' + status + 'TicketTab')}
                </Badge>
            </TicketIdAndBadgeWrapper>
            <TicketInfoTextsWrapper>
                <div className='title-text'>{title}</div>
                <TicketInfoTextsDateAndTimeWrapper>
                    <div>{time}</div>
                    <div>{date}</div>
                </TicketInfoTextsDateAndTimeWrapper>
            </TicketInfoTextsWrapper>
        </TicketWrapper>
    )
}

export default Ticket