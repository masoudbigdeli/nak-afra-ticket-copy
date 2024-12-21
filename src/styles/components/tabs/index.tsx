import styled from "@emotion/styled"
import AppThemeModel from "../../../models/theme-model"
import { CSSProperties } from "react"

interface TabWrapperProps {
    style?: CSSProperties
}

const TabsWrapper = styled.div<TabWrapperProps & { theme?: AppThemeModel }>(({ theme, style }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        maxWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.color.ordinalColors.neural[100],
        borderRadius: theme.radious.radiousXs,
        padding: theme.spacing.spacingXxs,
        ...style
    }
})

export default TabsWrapper

interface TabItemProps {
    isCurrent?: boolean
    style?: CSSProperties
}

export const TabItem = styled.div<TabItemProps & { theme?: AppThemeModel }>(({ theme, isCurrent, style }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        maxWidth: 'max-content',
        minWidth: 'max-content',
        paddingInline: '1rem',
        paddingBlock: '0.375rem',
        fontSize: '0.875rem',
        fontWeight: isCurrent ? 600 : 400,
        color: theme.color.ordinalColors.neural[isCurrent ? 700 : 500],
        cursor: isCurrent ? 'not-allowed' : 'pointer',
        backgroundColor: isCurrent ? theme.color.solid.white : 'transparent',
        borderRadius: isCurrent ? theme.radious.radiousXxs : 0,
        border: 'none',
        ...style
    }
})