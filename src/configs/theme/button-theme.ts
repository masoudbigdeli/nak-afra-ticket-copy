import AppThemeModel from '../../models/theme-model'

const buttonTheme: AppThemeModel['button'] = {
    general: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '0.5rem',
    },
    xSmall: {
        paddingBlock: '0.4375rem',
        paddingInline: '0.75rem',
        fontSize: '0.75rem',
        fontWeight: 600,
        minWidth: '6.125rem',
        height: '1.75rem',
        gap: '0.5rem',
    },
    xSmallWithIcon: {
        minWidth: '7.25rem',
    },
    small: {
        paddingBlock: '0.625rem',
        paddingInline: '1rem',
        fontSize: '0.875rem',
        fontWeight: 600,
        minWidth: '7.375rem',
        height: '2.25rem',
        gap: '0.5rem',
    },
    smallWithIcon: {
        minWidth: '8.625rem',
    },
    medium: {
        paddingBlock: '0.625rem',
        paddingInline: '1.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        minWidth: '9.125rem',
        height: '2.5rem',
        gap: '0.5rem',
    },
    mediumWithIcon: {
        minWidth: '10.625rem',
    },
    large: {
        paddingBlock: '0.75rem',
        paddingInline: '1.5rem',
        fontSize: '1rem',
        fontWeight: 700,
        minWidth: '9.1875rem',
        height: '2.75rem',
        gap: '0.5rem',
    },
    largeWithIcon: {
        minWidth: '10.6875rem',
    },
    xLarge: {
        paddingBlock: '0.8125rem',
        paddingInline: '1.5rem',
        fontSize: '1.125rem',
        fontWeight: 600,
        minWidth: '9.875rem',
        height: '3rem',
        gap: '0.5rem',
    },
    xLargeWithIcon: {
        minWidth: '11.5rem',
    },
}

export default buttonTheme