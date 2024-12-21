import AppThemeModel from '../../models/theme-model'

const inputTheme: AppThemeModel['input'] = {
    general: {
        borderRadius: '0.5rem',
        backgroundColor: 'transparent',
        border: '0.0625rem solid #ABABAB'
    },
    medium: {
        paddingInline: '0.5rem',
        paddingBlock: '0.75rem',
        fontSize: '0.75rem',
        fontWeight: 600,
    },
    large: {
        padding: '0.75rem',
        fontSize: '0.875rem',
        fontWeight: 400,
    },
}

export default inputTheme