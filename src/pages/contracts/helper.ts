import { Tab } from '../../components/tabs'

export const queryParamsGenerator = (
    page: number,
    perPage: number,
    filter?: Tab<string>,
    sort?: any,
): string => {
    let queryParams: string = `?page=${page}&per_page=${perPage}`
    if (filter) {
        queryParams = queryParams + `&${filter.value}`
    }
    if (sort) {
        queryParams = queryParams + `&sort=${sort}`
    }
    return queryParams
}