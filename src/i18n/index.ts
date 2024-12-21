import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationsEN from './en/en.json'
import translationsFA from './fa/fa.json'
import { persistedStoreName } from "../state-management/store"
import getDefaultLanguage from "../utils/get-default-language"

const resources = {
    en: {
        translation: translationsEN
    },
    fa: {
        translation: translationsFA
    }
}

export const defaultNS = 'translation'

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: getDefaultLanguage(persistedStoreName),
        // keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        defaultNS,
    });

export default i18n