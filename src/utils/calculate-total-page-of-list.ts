const calculateTotalPageOfList = (total: number, perPage: number): number => {
    const fullPagesCount: number = Math.floor(total / perPage)
    if (!!(total % perPage)) {
        return fullPagesCount + 1
    }
    return fullPagesCount
} 

export default calculateTotalPageOfList