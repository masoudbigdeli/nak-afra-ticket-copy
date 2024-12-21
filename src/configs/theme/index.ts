import darkTheme from './dark-theme'
import lightTheme from './light-theme'

const appTheme = (darkMode: boolean) => (darkMode ? darkTheme : lightTheme)

export default appTheme

export const appColors = {
    neural: 'neural',
    nakOrange: 'nakOrange',
    orange: 'orange',
    blue: 'blue',
    redError: 'redError',
    greenSuccess: 'greenSuccess',
    violetByzantium: 'violetByzantium',
    afra: 'afra',
}

export type AppColors = keyof typeof appColors

export const ordinal = {
    0: 0,
    50: 50,
    100: 100,
    200: 200,
    300: 300,
    400: 400,
    500: 500,
    600: 600,
    700: 700,
    800: 800,
    900: 900,
    1000: 1000,
}

export type OrdinalKeys = keyof typeof ordinal

export const appButtons = {
    general: 'general',
    xSmall: 'xSmall',
    xSmallWithIcon: 'xSmallWithIcon',
    small: 'small',
    smallWithIcon: 'smallWithIcon',
    medium: 'medium',
    mediumWithIcon: 'mediumWithIcon',
    large: 'large',
    largeWithIcon: 'largeWithIcon',
    xLarge: 'xLarge',
    xLargeWithIcon: 'xLargeWithIcon',
}

export type AppButtons = keyof typeof appButtons

export const appInputs = {
    general: 'general',
    medium: 'medium',
    large: 'large',
}

export type AppInputs = keyof typeof appInputs

export const appSpacing = {
    spacingNone: 'spacingNone',
    spacingXxs: 'spacingXxs',
    spacingXs: 'spacingXs',
    spacingS: 'spacingS',
    spacingM: 'spacingM',
    spacingL: 'spacingL',
    spacingXl: 'spacingXl',
    spacingXxl: 'spacingXxl',
    spacingXxxl: 'spacingXxxl',
}

export type AppSpacing = keyof typeof appSpacing

export const appRadious = {
    radiousNone: 'radiousNone',
    radiousXxs: 'radiousXxs',
    radiousXs: 'radiousXs',
    radiousS: 'radiousS',
    radiousM: 'radiousM',
    radiousL: 'radiousL',
    radiousXl: 'radiousXl',
}

export type AppRadious = keyof typeof appRadious