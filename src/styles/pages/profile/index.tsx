import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'

const ProfilePageWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingBlock: theme.spacing.spacingL,
        gap: theme.spacing.spacingL,
        overflowY: 'auto',
        paddingBottom: '6rem',
    }
})

export default ProfilePageWrapper


export const LogoutContainer = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: 'max-content',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: theme.spacing.spacingL,
        backgroundColor: theme.color.solid.white,
    }
})