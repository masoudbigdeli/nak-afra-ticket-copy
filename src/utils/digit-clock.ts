const digitClock = (seconds: number): string => {
    if (!seconds) return '00:00'
    const min: number = Math.floor(seconds / 60)
    const sec: number = seconds - (min * 60)
    const minInString: string = min < 10 ? `0${min}` : `${min}`
    const secInString: string = sec < 10 ? `0${sec}` : `${sec}`
    return `${minInString}:${secInString}`
}

export default digitClock