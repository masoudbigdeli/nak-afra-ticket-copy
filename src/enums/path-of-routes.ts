enum PATH_OF_ROUTES {
    LOGIN = '/login',
    PROFILE = '/profile',
    PERSONAL_PROFILE = '/personal-profile',
    LEGAL_PROFILE = '/legal-profile',
    SUPPORT = '/support',
    CONTRACTS = '/contracts',
    CONTRACT_DETAIL = '/contracts/:id',
    ACCESSES = '/accesses',
    TICKETS = '/tickets',
    CREATE_TICKET = '/tickets/create',
    TICKET_DETAIL = '/tickets/detail/:id',
    UPDATE_TICKET = '/tickets/update/:id',
    FOLLOWING_UP_TICKET = '/tickets/following-up/:id',
    NOTIFICATIONS = '/notifications',
    HOME = '/',
    NOT_FOUND = '*',
}

export default PATH_OF_ROUTES

export const pathGenerator: Partial<Record<keyof typeof PATH_OF_ROUTES, (...args: Array<string>) => string>> = {
    CONTRACT_DETAIL: (id: string) => {
        const path = PATH_OF_ROUTES.CONTRACT_DETAIL.replace(':id', id)
        return path
    },
    TICKET_DETAIL: (id: string) => {
        const path = PATH_OF_ROUTES.TICKET_DETAIL.replace(':id', id)
        return path
    },
    UPDATE_TICKET: (id: string) => {
        const path = PATH_OF_ROUTES.UPDATE_TICKET.replace(':id', id)
        return path
    },
    FOLLOWING_UP_TICKET: (id: string) => {
        const path = PATH_OF_ROUTES.FOLLOWING_UP_TICKET.replace(':id', id)
        return path
    },
}