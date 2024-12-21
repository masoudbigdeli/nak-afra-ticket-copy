import styled from "@emotion/styled";
import AppThemeModel from "../../../models/theme-model";

const NoItemWrapper = styled.div({
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: '100%',
        minHeight: '100%',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
})

export default NoItemWrapper

export const NoItemTextWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        minWidth: 'max-content',
        maxWidth: 'max-content',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        fontSize: '0.875rem',
        fontWeight: 700,
        color: theme.color.solid.black,
        lineHeight: theme.spacing.spacingXl
    }
})

