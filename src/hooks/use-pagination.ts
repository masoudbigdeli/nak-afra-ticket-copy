import { Dispatch, useReducer } from 'react'
import USE_PAGINATION_ACTION_TYPE from '../enums/use-pagination-action-type'

interface UsePagination<FilterType, SortType> {
    lowestPage: number
    highestPage: number
    page: number
    perPage: number
    totalPage: number
    filter: FilterType
    sort: SortType
}

interface PageStateReducerAction {
    type: USE_PAGINATION_ACTION_TYPE.PAGE | USE_PAGINATION_ACTION_TYPE.PER_PAGE | USE_PAGINATION_ACTION_TYPE.LOWEST_PAGE | USE_PAGINATION_ACTION_TYPE.HIGHEST_PAGE | USE_PAGINATION_ACTION_TYPE.TOTAL_PAGE
    payload: number
}

interface FilterStateReducerAction<FilterType> {
    type: USE_PAGINATION_ACTION_TYPE.FILTER
    payload: FilterType
}

interface SortStateReducerAction<SortType> {
    type: USE_PAGINATION_ACTION_TYPE.SORT
    payload: SortType
}

interface ResetStateReducerAction<FilterType, SortType> {
    type: USE_PAGINATION_ACTION_TYPE.RESET
    payload: UsePagination<FilterType, SortType>
}

type StateReducerAction<FilterType, SortType> = PageStateReducerAction | FilterStateReducerAction<FilterType> | SortStateReducerAction<SortType> | ResetStateReducerAction<FilterType, SortType>

const usePagination = <FilterType, SortType>(
    latestConfig: { page: number, perPage: number, filter: FilterType, sort: SortType }
): UsePagination<FilterType, SortType> & { dispatch: Dispatch<StateReducerAction<FilterType, SortType>> } => {
    const [state, dispatch] = useReducer<
        (preState: UsePagination<FilterType, SortType>, action: StateReducerAction<FilterType, SortType>) => UsePagination<FilterType, SortType>,
        { page: number, perPage: number, filter: FilterType, sort: SortType }
    >(stateReducer, latestConfig, stateInitializer)
    return {
        ...state,
        dispatch
    }
}

export default usePagination

const stateReducer = <FilterType, SortType>(
    preState: UsePagination<FilterType, SortType>,
    action: StateReducerAction<FilterType, SortType>
): UsePagination<FilterType, SortType> => {
    switch (action.type) {
        case USE_PAGINATION_ACTION_TYPE.LOWEST_PAGE:
            return { ...preState, lowestPage: action.payload, page: action.payload }
        case USE_PAGINATION_ACTION_TYPE.HIGHEST_PAGE:
            return { ...preState, highestPage: action.payload, page: action.payload }
        case USE_PAGINATION_ACTION_TYPE.PAGE:
            return { ...preState, page: action.payload }
        case USE_PAGINATION_ACTION_TYPE.PER_PAGE:
            return { ...preState, perPage: action.payload }
        case USE_PAGINATION_ACTION_TYPE.FILTER:
            return { ...preState, filter: action.payload, lowestPage: 1, highestPage: 1, page:1  }
        case USE_PAGINATION_ACTION_TYPE.SORT:
            return { ...preState, sort: action.payload }
        case USE_PAGINATION_ACTION_TYPE.TOTAL_PAGE:
            return { ...preState, totalPage: action.payload }
        default:
            return { ...action.payload as UsePagination<FilterType, SortType> }
    }
}

const stateInitializer = <FilterType, SortType>(
    latestConfig: { page: number, perPage: number, filter: FilterType, sort: SortType }
): UsePagination<FilterType, SortType> => {
    return {
        lowestPage: latestConfig.page,
        highestPage: latestConfig.page,
        page: latestConfig.page,
        perPage: latestConfig.perPage,
        totalPage: 0,
        filter: latestConfig.filter,
        sort: latestConfig.sort,
    }
}