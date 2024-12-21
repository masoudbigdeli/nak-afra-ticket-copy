import { Dispatch, SetStateAction, useState } from 'react'

interface UsePageAndPerPageInitialProps {
    initialPage: number
    initialPerPage: number
}

interface UsePageAndPerPage {
    total: number
    page: number
    perPage: number
    setTotal: Dispatch<SetStateAction<number>>
    setPage: Dispatch<SetStateAction<number>>
    setPerPage: Dispatch<SetStateAction<number>>
}
const usePageAndPerPage = ({ initialPage, initialPerPage }: UsePageAndPerPageInitialProps): UsePageAndPerPage => {
    const [total, setTotal] = useState<number>(0)
    const [page, setPage] = useState<number>(initialPage)
    const [perPage, setPerPage] = useState<number>(initialPerPage)

    return {
        total,
        page,
        perPage,
        setTotal,
        setPage,
        setPerPage,
    }
}

export default usePageAndPerPage