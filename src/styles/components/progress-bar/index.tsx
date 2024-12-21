import styled from "@emotion/styled";
import AppThemeModel from "../../../models/theme-model";

interface ProgressBarWrapperProps {
    hasError?: boolean
}

const ProgressBarWrapper = styled.div<ProgressBarWrapperProps & { theme?: AppThemeModel }>(({ theme, hasError }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        height: '0.5rem',
        backgroundColor: hasError ? theme.color.ordinalColors.redError[500] : theme.color.ordinalColors.neural[100],
        border: 'none',
        margin: 0,
        padding: 0,
        borderRadius: theme.spacing.spacingS,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

export default ProgressBarWrapper

interface ProgressBarFillProps {
    hasError?: boolean
}

export const ProgressBarFill = styled.div<ProgressBarFillProps & { theme?: AppThemeModel }>(({ theme, hasError }) => {
    return {
        boxSizing: 'border-box',
        height: '0.5rem',
        backgroundColor: hasError ? theme.color.ordinalColors.redError[500] : theme.color.ordinalColors.neural[700],
        border: 'none',
        margin: 0,
        padding: 0,
        borderRadius: theme.spacing.spacingS,
    }
})