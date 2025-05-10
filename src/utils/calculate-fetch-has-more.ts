export const calculateFetchHasMore = (
    total: number,
    perPage: number,
    currentPage: number
): boolean => {
    console.log('+++++++++++++++++++++++>>>', total, perPage, currentPage)
    let countOfPages: number = Math.floor(total / perPage)
    let remaning: number = total - (countOfPages * perPage)
    if (remaning) {
        countOfPages = countOfPages + 1
    }
    return currentPage >= countOfPages ? false : true
};