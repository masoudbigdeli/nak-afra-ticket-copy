import styled from "@emotion/styled"
import AppThemeModel from "../../../models/theme-model"

const ContractDetailPageWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBlock: theme.spacing.spacingL,
        gap: theme.spacing.spacingL
    }
})

export default ContractDetailPageWrapper

export const ContractTitleAndStatusWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing.spacingM,
        backgroundColor: theme.color.ordinalColors.neural[50],
        borderRadius: theme.radious.radiousXs,
        border: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
        '> .text': {
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900]
        }
    }
})

export const ContractWidgetsWithTitleWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: theme.spacing.spacingXs,
        '> .title': {
            fontSize: '0.75rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[500]
        },
    }
})

export const ContractDetailWidgetTitleWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        fontSize: '0.75rem',
        fontWeight: 600,
        color: theme.color.ordinalColors.neural[500]
    }
})

export const ContractDetailWidgetContentWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: theme.spacing.spacingM,
        paddingInline: theme.spacing.spacingM,
        paddingBlock: theme.spacing.spacingM,
        borderRadius: theme.radious.radiousXs,
        border: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
    }
})

export const ContractDetailSubContentWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        fontSize: '0.75rem',
        fontWeight: 600,
        lineHeight: theme.spacing.spacingL,
        display: 'flex',
        '> .sub-title': {
            color: theme.color.ordinalColors.neural[700]
        },
        '> .info-text': {
            color: theme.color.ordinalColors.neural[900]
        }
    }
})

export const ContractPaymentHistoryWidgetWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        justifyContent: 'space-between',
        paddingInline: theme.spacing.spacingM,
        paddingBlock: theme.spacing.spacingM,
        borderRadius: theme.radious.radiousXs,
        border: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
        '> .infoBox': {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: theme.spacing.spacingXs,
        },
        '> .status': {
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: theme.spacing.spacingS,
        }
    }
})

export const DatePeriodWithArrowWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        maxWidth: 'max-content',
        minWidth: 'max-content',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.75rem',
        fontWeight: 600,
        lineHeight: theme.spacing.spacingL,
        gap: theme.spacing.spacingXs,
        color: theme.color.ordinalColors.neural[900],
    }
})

export const ContractPaymentHistoryWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.spacingXs,
        '> .title': {
            fontSize: '0.75rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[500]
        }
    }
})
