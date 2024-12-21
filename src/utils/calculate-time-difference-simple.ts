const calculateTimeDifferenceSimple = (endDate: string, startDate: string, timeUnitInMilliseconds: number): number => {
    try {
        const start = new Date(startDate)
        start.setMilliseconds(0)
        const end = new Date(endDate)
        end.setMilliseconds(0)
        let startTimeStamp: number = start.getTime()
        let endTimeStamp: number = end.getTime() + 1

        if (isNaN(startTimeStamp) || isNaN(endTimeStamp)) throw Error()

        return ((endTimeStamp - startTimeStamp) / timeUnitInMilliseconds)
    } catch (error) {
        return NaN
    }
}

export default calculateTimeDifferenceSimple