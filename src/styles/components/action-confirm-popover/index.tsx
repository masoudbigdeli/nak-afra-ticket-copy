import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'




export const ActionConfirmPopoverModalWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: 'max-content',
        minHeight: '20%',
        maxHeight: 'max-content',
        borderRadius: `${theme.radious.radiousXs} ${theme.radious.radiousXs} 0 0`,
        paddingBlock: '1rem 1.25rem',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 2000,
        backgroundColor: theme.color.solid.white
    }
})




export const ActionConfirmPopoverModalHeaderContainer = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // zIndex: 2001,
        '> div': {
            boxSizing: 'border-box',
            height: '0.375rem',
            minHeight: '0.375rem',
            maxHeight: '0.375rem',
            width: '27%',
            minWidthidth: '27%',
            maxWidth: '27%',
            backgroundColor: theme.color.ordinalColors.neural[200],
            borderRadius: theme.radious.radiousS
        }
    }
})

export const ActionConfirmPopoverModalText = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: '100%',
        minHeight: '100%',
        maxHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.875rem',
        fontWeight: 600,
        color: theme.color.ordinalColors.neural[900],
        paddingTop: '1.5rem',
        lineHeight: '1.5rem'
    }
})

export const ActionConfirmPopoverModalBtnWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing.spacingXs,
        paddingInline: theme.spacing.spacingL,
        paddingTop: '2rem'
    }
})



