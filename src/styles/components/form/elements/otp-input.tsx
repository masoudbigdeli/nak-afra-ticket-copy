import styled from '@emotion/styled'
import AppThemeModel from '../../../../models/theme-model'

const OtpInputWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: `calc(${theme.spacing.spacingXs} / 10)`,
        direction: 'rtl',
    }
})

export default OtpInputWrapper

interface OtpInputElementsWrapperProps {
    hasError: boolean
}

export const OtpInputElementsWrapper = styled.div<OtpInputElementsWrapperProps & { theme?: AppThemeModel }>(({ theme, hasError }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing.spacingXs,
        '> input': {
            boxSizing: 'border-box',
            width: '2.875rem',
            height: '2.875rem',
            padding: '0.6875rem',
            border: `0.0625rem solid ${hasError ? theme.color.ordinalColors.redError[500] : theme.color.ordinalColors.neural[400]}`,
            borderRadius: theme.radious.radiousXxs,
            outline: 'none',
            textAlign: 'center',
            fontSize: '1.25rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900],
            '&.error': {
                border: `0.0625rem solid ${theme.color.ordinalColors.redError[500]}`,
            },
            ':focus': {
                outline: 'none',
                border: `0.0625rem solid ${theme.color.ordinalColors.neural[800]}`,
                '&.error': {
                    border: `0.0625rem solid ${theme.color.ordinalColors.redError[500]}`,
                },
            },
            ':not(:placeholder-shown)': {
                border: `0.0625rem solid ${theme.color.ordinalColors.neural[800]}`,
                '&.error': {
                    border: `0.0625rem solid ${theme.color.ordinalColors.redError[500]}`,
                },
            },
        }
    }
})