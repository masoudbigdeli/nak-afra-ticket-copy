import { TicketHeaderWrapper } from "../../../styles/pages/tickets/ticket-detail"

interface TicketDetailHeaderProps {
    title: string
    id: number
}

const TicketDetailHeader = ({title, id}: TicketDetailHeaderProps) => {
    return (
        <TicketHeaderWrapper>
            <div className='title'>{title}</div>
            <div className='id' >#{id}</div>
        </TicketHeaderWrapper>
    )
}

export default TicketDetailHeader