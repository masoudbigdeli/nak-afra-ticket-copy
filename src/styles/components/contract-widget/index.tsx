import styled from "@emotion/styled"
import AppThemeModel from "../../../models/theme-model"

const ContractWidgetWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
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
        padding: theme.spacing.spacingM,
        gap: theme.spacing.spacingM,
        border: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
        borderRadius: theme.radious.radiousXs,
    }
})

export default ContractWidgetWrapper

export const ContractMainInfoWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
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
        paddingBottom: theme.spacing.spacingM,
        borderBottom: `solid 0.0875rem ${theme.color.ordinalColors.neural[200]}`
    }
})

export const ContractMainInfoIconWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    height: 'max-content',
    minHeight: 'max-content',
    maxHeight: 'max-content',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    opacity: '40%'
})

export const ContractNameAndStatusWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        marginBottom: theme.spacing.spacingXxs,
        '> .text': {
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900]
        }
    }
})

export const ContractCodeWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 0,
        fontSize: '0.75rem',
        fontWeight: 400,
        color: theme.color.ordinalColors.neural[500],
        lineHeight: theme.spacing.spacingL,
    }
})

interface RemainingTimeInfoWrapperProps {
    hasBorderBottom?: boolean
}

export const RemainingTimeInfoWrapper = styled.div<RemainingTimeInfoWrapperProps & { theme?: AppThemeModel }>(({ theme, hasBorderBottom }) => {
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
        alignItems: 'center',
        gap: theme.spacing.spacingS,
        padding: 0,
        fontSize: '0.75rem',
        fontWeight: 600,
        paddingBottom: hasBorderBottom ? theme.spacing.spacingM : '',
        borderBottom: hasBorderBottom ? `solid 0.0875rem ${theme.color.ordinalColors.neural[200]}` : ''

    }
})

export const RemainingTimeInfoTextWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 0,
        lineHeight: theme.spacing.spacingL,
        '> .black-text': {
            color: theme.color.ordinalColors.neural[900]
        },
        '> .gray-text': {
            color: theme.color.ordinalColors.neural[500]
        }
    }
})

export const ContractsPageWrapper = styled.div({
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

interface ContractsGroupWrapperProps {
    siblingContainerHeight: number | undefined
}

export const ContractsGroupWrapper = styled.div<ContractsGroupWrapperProps>(({ siblingContainerHeight }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: `calc(100% - ${siblingContainerHeight || 0})`,
        minHeight: `calc(100% - ${siblingContainerHeight || 0})`,
        maxHeight: `calc(100% - ${siblingContainerHeight || 0})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '1.25rem',
        padding: '1.25rem',
        paddingTop: '0rem',
        overflow: 'auto',
    }
})

export const ContractsPageTabsWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing.spacingL
    }
})