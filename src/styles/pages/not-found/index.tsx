import styled from "@emotion/styled";
import AppThemeModel from "../../../models/theme-model";


const NotFoundWrapper = styled.div({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export default NotFoundWrapper

export const NotFoundText = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        fontSize: '0.875rem',
        fontWeight: 700,
        lineHeight: theme.spacing.spacingXl,
        textAlign: 'center',
    }
})