export const doesMainArrayIncludeAllElementsOfConditionalArray = (
    mainArray: Array<string | number>,
    conditionalArray: Array<string | number>
): boolean => {
    const conditionsOfElements: Array<boolean> = conditionalArray.map((item: string | number) => mainArray.includes(item))
    return !conditionsOfElements.includes(false)
}

export const doesMainArrayIncludeOneElementOfConditionalArray = (
    mainArray: Array<string | number>,
    conditionalArray: Array<string | number>
): boolean => {
    const conditionsOfElements: Array<boolean> = conditionalArray.map((item: string | number) => mainArray.includes(item))
    return conditionsOfElements.includes(true)
}