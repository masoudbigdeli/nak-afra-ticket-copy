import { lazy } from 'react'
import RouteModel from '../../models/route-model'
import PATH_OF_ROUTES, { pathGenerator } from '../../enums/path-of-routes'

const Layout = lazy(() => import('../../components/layout'))
const Login = lazy(() => import('../../pages/login'))
const PersonalProfile = lazy(() => import('../../pages/personal-profile'))
const LegalProfile = lazy(() => import('../../pages/legal-profile'))
const Support = lazy(() => import('../../pages/support'))
const Contracts = lazy(() => import('../../pages/contracts'))
const ContractDetail = lazy(() => import('../../pages/contracts/contract-detail'))
const Accesses = lazy(() => import('../../pages/accesses'))
const Tickets = lazy(() => import('../../pages/tickets'))
const CreateTicket = lazy(() => import('../../pages/tickets/create-ticket'))
const TicketDetail = lazy(() => import('../../pages/tickets/ticket-detail'))
const UpdateTicket = lazy(() => import('../../pages/tickets/update-ticket'))
const FollowingUpTicket = lazy(() => import('../../pages/tickets/following-up-ticket'))
const Notifications = lazy(() => import('../../pages/notifications'))
const Home = lazy(() => import('../../pages/home'))
const NotFound = lazy(() => import('../../pages/not-found'))
const Profile = lazy(() => import('../../pages/profile'))

const routes: Array<RouteModel> = [
    {
        id: '1',
        path: PATH_OF_ROUTES.LOGIN,
        pathMatcher: (pathName?: string | undefined) => (!!(pathName && pathName === PATH_OF_ROUTES.LOGIN)),
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        title: 'login',
        cmp: Login,
        layout: Layout,
        isPublic: true,
        limitAfterLogin: true,
        isFullPage: true,
        uiLayoutConfig: {
            hasHeader: false,
            hasFooter: false,
        },
    },
    {
        id: '2',
        path: PATH_OF_ROUTES.PROFILE,
        pathMatcher: (pathName?: string | undefined) => (!!(pathName && pathName === PATH_OF_ROUTES.PROFILE)),
        showInBottomNavigation: true,
        bottomNavigationIconName: 'bottomNavigationprofileIcon',
        title: 'profile',
        cmp: Profile,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: false,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: true,
            forceHideBackBtn: true,
        },
    },
    {
        id: '3',
        path: PATH_OF_ROUTES.PERSONAL_PROFILE,
        pathMatcher: (pathName?: string | undefined) => (!!(pathName && pathName === PATH_OF_ROUTES.PERSONAL_PROFILE)),
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        title: 'personalProfile',
        cmp: PersonalProfile,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: false,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: false,
            forceHideBackBtn: false,
        },
    },
    {
        id: '4',
        path: PATH_OF_ROUTES.LEGAL_PROFILE,
        pathMatcher: (pathName?: string | undefined) => (!!(pathName && pathName === PATH_OF_ROUTES.LEGAL_PROFILE)),
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        title: 'legalProfile',
        cmp: LegalProfile,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: false,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: false,
        },
    },
    {
        id: '5',
        path: PATH_OF_ROUTES.SUPPORT,
        pathMatcher: (pathName?: string | undefined) => (!!(pathName && pathName === PATH_OF_ROUTES.SUPPORT)),
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        title: 'support',
        cmp: Support,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: false,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: true,
        },
    },
    {
        id: '6',
        path: PATH_OF_ROUTES.CONTRACTS,
        pathMatcher: (pathName?: string | undefined) => (!!(pathName && pathName === PATH_OF_ROUTES.CONTRACTS)),
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        title: 'contracts',
        cmp: Contracts,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: false,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: false,
        },
    },
    {
        id: '7',
        path: PATH_OF_ROUTES.CONTRACT_DETAIL,
        pathMatcher: (pathName?: string | undefined) => (!!(
            pathName &&
            pathName.startsWith(pathGenerator.CONTRACT_DETAIL!('')) &&
            (pathName.length > pathGenerator.CONTRACT_DETAIL!('').length))
        ),
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        title: 'contractDetail',
        cmp: ContractDetail,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: true,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: false,
        },
    },
    {
        id: '8',
        path: PATH_OF_ROUTES.ACCESSES,
        pathMatcher: (pathName?: string | undefined) => (!!(pathName && pathName === PATH_OF_ROUTES.ACCESSES)),
        showInBottomNavigation: true,
        bottomNavigationIconName: 'bottomNavigationaccessesIcon',
        title: 'accesses',
        cmp: Accesses,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: false,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: true,
            forceHideBackBtn: true,
        },
    },
    {
        id: '9',
        path: PATH_OF_ROUTES.TICKETS,
        pathMatcher: (pathName?: string | undefined) => (!!(pathName && pathName === PATH_OF_ROUTES.TICKETS)),
        showInBottomNavigation: true,
        bottomNavigationIconName: 'bottomNavigationticketsIcon',
        title: 'tickets',
        cmp: Tickets,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: false,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: true,
            forceHideBackBtn: true,
        },
    },
    {
        id: '10',
        path: PATH_OF_ROUTES.CREATE_TICKET,
        pathMatcher: (pathName?: string | undefined) => (!!(pathName && pathName === PATH_OF_ROUTES.CREATE_TICKET)),
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        title: 'createTicket',
        cmp: CreateTicket,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: true,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: false,
        },
    },
    {
        id: '11',
        path: PATH_OF_ROUTES.TICKET_DETAIL,
        pathMatcher: (pathName?: string | undefined) => (!!(
            pathName &&
            pathName.startsWith(pathGenerator.TICKET_DETAIL!('')) &&
            (pathName.length > pathGenerator.TICKET_DETAIL!('').length))
        ),
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        title: 'ticketDetail',
        cmp: TicketDetail,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: true,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: false,
        },
    },
    {
        id: '12',
        path: PATH_OF_ROUTES.UPDATE_TICKET,
        pathMatcher: (pathName?: string | undefined) => (!!(
            pathName &&
            pathName.startsWith(pathGenerator.UPDATE_TICKET!('')) &&
            (pathName.length > pathGenerator.UPDATE_TICKET!('').length))
        ),
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        title: 'updateTicket',
        cmp: UpdateTicket,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: true,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: false,
        },
    },
    {
        id: '13',
        path: PATH_OF_ROUTES.FOLLOWING_UP_TICKET,
        pathMatcher: (pathName?: string | undefined) => (!!(
            pathName &&
            pathName.startsWith(pathGenerator.FOLLOWING_UP_TICKET!('')) &&
            (pathName.length > pathGenerator.FOLLOWING_UP_TICKET!('').length))
        ),
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        title: 'followingUpTicket',
        cmp: FollowingUpTicket,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: true,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: false,
        },
    },
    {
        id: '14',
        path: PATH_OF_ROUTES.NOTIFICATIONS,
        pathMatcher: (pathName?: string | undefined) => (!!(pathName && pathName === PATH_OF_ROUTES.NOTIFICATIONS)),
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        title: 'notifications',
        cmp: Notifications,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: true,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: false,
        },
    },
    {
        id: '15',
        path: PATH_OF_ROUTES.HOME,
        pathMatcher: (pathName?: string | undefined) => (!!(pathName && pathName === PATH_OF_ROUTES.HOME)),
        showInBottomNavigation: true,
        bottomNavigationIconName: 'bottomNavigationhomeIcon',
        showNotificationsIcon: true,
        title: 'home',
        cmp: Home,
        layout: Layout,
        isPublic: false,
        limitAfterLogin: false,
        isFullPage: false,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: true,
            forceHideBackBtn: true,
        },
    },
    {
        id: '16',
        path: PATH_OF_ROUTES.NOT_FOUND,
        pathMatcher: (pathName?: string | undefined) => {
            const totalStatus: Array<boolean> = routes
                .filter((route: RouteModel) => (route.path !== PATH_OF_ROUTES.NOT_FOUND))
                .map((route: RouteModel) => route.pathMatcher(pathName))
            return !totalStatus.some((itemStatus: boolean) => (itemStatus === true))
        },
        showInBottomNavigation: false,
        bottomNavigationIconName: '',
        showNotificationsIcon: true,
        title: 'notFound',
        cmp: NotFound,
        layout: Layout,
        isPublic: true,
        limitAfterLogin: false,
        isFullPage: false,
        uiLayoutConfig: {
            hasHeader: true,
            hasFooter: true,
            forceHideBackBtn: true,
        },
    },
]

export default routes