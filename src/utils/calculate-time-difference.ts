const calculateTimeDifference = (endDate: string, startDate: string, timeUnitInMilliseconds: number): number => {
    try {
        const start = new Date(startDate)
        const startHasError = start.setHours(0, 0, 0, 0)
        const end = new Date(endDate)
        const endHasError = end.setHours(23, 59, 59, 999)
        if (isNaN(startHasError) || isNaN(endHasError)) throw Error()
        let startTimeStamp: number = start.getTime()
        let endTimeStamp: number = end.getTime() + 1

        return ((endTimeStamp - startTimeStamp) / timeUnitInMilliseconds)
    } catch (error) {
        return NaN
    }
}

export default calculateTimeDifference