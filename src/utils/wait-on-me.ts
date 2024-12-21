const waitOnMe = async <T>(time: number, resolveValue: T) => new Promise<T>(res => setTimeout(() => res(resolveValue), time))

export default waitOnMe