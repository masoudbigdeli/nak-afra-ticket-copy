const convertArrayToObjectBySpecificKey = <T>(data: Array<T>, key: string, hasSuffix: boolean): Record<string, T> => {
    if (!data.length) return {}
    if (data.length === 1) return { [key]: data[0] }
    const result: Record<string, T> = {}
    data.forEach((value: T, index: number) => {
        result[`${key}${hasSuffix ? index + 1 : ''}`] = value
    })
    return result
}

export default convertArrayToObjectBySpecificKey