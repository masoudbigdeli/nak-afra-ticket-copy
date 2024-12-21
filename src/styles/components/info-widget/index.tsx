import styled from "@emotion/styled"
import AppThemeModel from "../../../models/theme-model"
import { CSSProperties } from "react"


const GeneralItemWidgetWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.spacingXs,
    }
})

export default GeneralItemWidgetWrapper

interface TopOutTitleProps {
    topOutTitleStyle?: CSSProperties
}

export const TopOutTitle = styled.div<TopOutTitleProps & { theme?: AppThemeModel }>(({ theme, topOutTitleStyle }) => {
    return {
        display: 'flex',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: theme.color.ordinalColors.neural[500],
        lineHeight: '1rem',
        ...topOutTitleStyle
    }
})

interface GeneralItemWidgetContentWrapperProps {
    GeneralItemWidgetContentWrapperStyle?: CSSProperties
}

export const GeneralItemWidgetContentWrapper = styled.div<GeneralItemWidgetContentWrapperProps & { theme?: AppThemeModel }>(({ theme, GeneralItemWidgetContentWrapperStyle }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        padding: theme.spacing.spacingM,
        border: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
        borderRadius: theme.radious.radiousXs,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...GeneralItemWidgetContentWrapperStyle
    }
})

interface GeneralItemWidgetRightContentWrapperStyle {
    WrapperStyle?: CSSProperties
    TextStyle?: CSSProperties
}

export const GeneralItemWidgetRightContentWrapper = styled.div<GeneralItemWidgetRightContentWrapperStyle & { theme?: AppThemeModel }>(({ theme, WrapperStyle, TextStyle }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        minWidth: 'max-content',
        maxWidth: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'right',
        ':not(:only-child)': {
            gap: theme.spacing.spacingXs,
        },
        ...WrapperStyle,
        '> .bottom-text': {
            display: 'flex',
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.color.ordinalColors.neural[500],
            lineHeight: '1rem',
            ...TextStyle
        }
    }
})

interface RightContentTopWrapperStyle {
    WrapperStyle?: CSSProperties
    textColor?: 'red' | 'black'
}

export const RightContentTopWrapper = styled.div<RightContentTopWrapperStyle & { theme?: AppThemeModel }>(({ theme, WrapperStyle, textColor }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        minWidth: 'max-content',
        maxWidth: 'max-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing.spacingXs,
        ...WrapperStyle,
        '> .main-text': {
            display: 'flex',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: textColor === 'red' ? theme.color.ordinalColors.redError[500] :theme.color.ordinalColors.neural[700],
            lineHeight: '1.5rem',

        },
    }
})


export const GeneralItemWidgetLeftContentWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        minWidth: 'max-content',
        maxWidth: 'max-content',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: theme.spacing.spacingXs,
    }
})