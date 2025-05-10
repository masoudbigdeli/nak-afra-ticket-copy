import styled from "@emotion/styled"
import AppThemeModel from "../../../../models/theme-model"

const TicketDetailPageWrapper = styled.div({
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: '100%',
        maxHeight: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
})

export default TicketDetailPageWrapper

export const TicketDetailWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
    gap: theme.spacing.spacingM,
    padding: theme.spacing.spacingL,
    paddingBottom: '6.25rem',
    position: 'relative',
}));




export const TicketsBottomBtnsWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: '5.25rem',
        minHeight: '5.25rem',
        maxHeight: '5.25rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing.spacingS,
        padding: theme.spacing.spacingL,
        marginTop: 'auto',
        position: 'absolute',
        bottom: 0,
        backgroundColor: theme.color.solid.white
    }
})

export const TicketHeaderWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        maxHeight: 'max-content',
        minHeight: 'max-content',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing.spacingM,
        borderRadius: theme.radious.radiousXs,
        border: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
        backgroundColor: theme.color.ordinalColors.neural[50],
        '> .title': {
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900],
            lineHeight: theme.spacing.spacingXl
        },
        '> .id': {
            fontSize: '0.75rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.blue[600],
            lineHeight: theme.spacing.spacingL
        }

    }
})

export const TicketDetailInfoWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        maxHeight: 'max-content',
        minHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: theme.spacing.spacingM,
        padding: theme.spacing.spacingM,
        borderRadius: theme.radious.radiousXs,
        border: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
    }
})
