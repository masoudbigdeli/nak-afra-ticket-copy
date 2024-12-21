import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'

const InfoWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        fontSize: '0.75rem',
        fontWeight: 400,
        color: theme.color.ordinalColors.neural[500],
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: theme.spacing.spacingXxs,
    }
})

export default InfoWrapper