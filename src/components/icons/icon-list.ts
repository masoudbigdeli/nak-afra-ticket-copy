import BackArrow from './icons-components/back-arrow'
import CircleInfo from './icons-components/circle-info'
import CircleSuccess from './icons-components/circle-success'
import FormFieldResetter from './icons-components/form-field-resetter'
import Plus from './icons-components/plus'
import TriangleError from './icons-components/triangle-error'
import BottomNavigationHomeIcon from './icons-components/bottom-navigation-home-icon'
import BottomNavigationAccessesIcon from './icons-components/bottom-navigation-accesses-icon'
import BottomNavigationTicketsIcon from './icons-components/bottom-navigation-tickets-icon'
import BottomNavigationProfileIcon from './icons-components/bottom-navigation-profile-icon'
import NotificationIcon from './icons-components/notification-icon'
import BackArrowHeadRed from './icons-components/back-arrow-head-red'
import BackArrowHeadGreen from './icons-components/back-arrow-head-green'
import ShowDetail from './icons-components/show-detail'
import SupportPerson from './icons-components/support-person'
import LogoutRed from './icons-components/logout-red'
import ContractWidget from './icons-components/contract-widget'
import BetweenDatesArrowLeft from './icons-components/between-dates-arrow-left'
import ArrowDown from './icons-components/arrow-down'
import ArrowUp from './icons-components/arrow-up'
import Calendar from './icons-components/calendar'
import Enter from './icons-components/enter'
import Exit from './icons-components/exit'
import Persons from './icons-components/persons'
import Explanation from './icons-components/explanation'
import TicketId from './icons-components/ticket-id'
import NewTicket from './icons-components/new-ticket'
import Attachment from './icons-components/attachment'
import Message from './icons-components/message'
import ArrowLeftGreen from './icons-components/arrow-left-green'
import ArrowLeftGery from './icons-components/arrow-left-grey'
import ArrowDownGreen from './icons-components/arrow-down-green'
import Refresh from './icons-components/refresh'

const iconList = {
    triangleError: TriangleError,
    circleInfo: CircleInfo,
    circleSuccess: CircleSuccess,
    formFieldResetter: FormFieldResetter,
    plus: Plus,
    backArrow: BackArrow,
    bottomNavigationhomeIcon: BottomNavigationHomeIcon,
    bottomNavigationaccessesIcon: BottomNavigationAccessesIcon,
    bottomNavigationticketsIcon: BottomNavigationTicketsIcon,
    bottomNavigationprofileIcon: BottomNavigationProfileIcon,
    notificationIcon: NotificationIcon,
    backArrowHeadGreen: BackArrowHeadGreen,
    backArrowHeadRed: BackArrowHeadRed,
    showDetail: ShowDetail,
    supportPerson: SupportPerson,
    logoutRed: LogoutRed,
    contractWidget: ContractWidget,
    betweenDatesArrowLeft: BetweenDatesArrowLeft,
    arrowDown: ArrowDown,
    arrowUp: ArrowUp,
    calendar: Calendar,
    enter: Enter,
    exit: Exit,
    persons: Persons,
    explanation: Explanation,
    ticketId: TicketId,
    newTicket: NewTicket,
    attachment: Attachment,
    message: Message,
    arrowLeftGreen: ArrowLeftGreen,
    arrowLeftGery: ArrowLeftGery,
    arrowDownGreen: ArrowDownGreen,
    refresh: Refresh
}

export default iconList

export type IconName = keyof typeof iconList