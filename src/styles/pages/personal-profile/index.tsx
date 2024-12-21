import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'

const PersonalProfilePageWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        width: '100%', 
        minWidth: '100%',
        maxWidth: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        boxSizing: 'border-box',
        height: 'max-content',       
        paddingBlock: theme.spacing.spacingL,
        gap: theme.spacing.spacingL,
    }
})

export default PersonalProfilePageWrapper