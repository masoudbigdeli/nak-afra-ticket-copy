const replaceChar1WithChar2 = (phrase: string, char1: string, char2: string): string => {
    const res: string = phrase
        .split('')
        .map((c: string) => c === char1 ? char2 : c)
        .join('')
    return res
}

export default replaceChar1WithChar2