const getDefaultLanguage = (persistedStoreName: string): string => {
    const storage: string | null = localStorage.getItem(persistedStoreName)
    if (storage === null) return 'fa'
    try {
        const storageObj = JSON.parse(storage)
        if (
            'state' in storageObj &&
            typeof storageObj === 'object' &&
            'language' in storageObj['state'] &&
            typeof storageObj['state']['language'] === 'object' &&
            'value' in storageObj['state']['language'] &&
            typeof storageObj['state']['language']['value'] === 'string' &&
            storageObj['state']['language']['value'] !== ''
        ) {
            return storageObj['state']['language']['value']
        }
        return 'fa'
    } catch (error) {
        return 'fa'
    }
}

export default getDefaultLanguage