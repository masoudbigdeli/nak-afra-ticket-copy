import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'

const NotificationsPageWrapper = styled.div(
    {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
    })

export default NotificationsPageWrapper

export const NotificationItemWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        paddingBlock: theme.spacing.spacingL,
        borderBottom: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`
    }
})

export const NotificationItemTitle = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: theme.color.ordinalColors.neural[900],
        paddingBottom: theme.spacing.spacingXxs,
    }
})

export const NotificationItemDateAndTime = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        justifyContent: 'flex-start',
        gap: theme.spacing.spacingXs,
        fontSize: '0.625rem',
        fontWeight: 400,
        color: theme.color.ordinalColors.neural[500],
        paddingBottom: theme.spacing.spacingXs,
    }
})

export const NotificationItemInfo = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: '0.75rem',
        fontWeight: 400,
        color: theme.color.ordinalColors.neural[500]
    }
})