import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'
import RouteModel from '../../../models/route-model'
import { appMaxWidth, appMinWidth, footerHeight, headerHeight } from '../../general/style-general-constants'

export interface LayoutWrapperProps extends Pick<RouteModel, 'uiLayoutConfig'> { }

const LayoutWrapper = styled.div<LayoutWrapperProps & { theme?: AppThemeModel }>(({ uiLayoutConfig, theme }) => {

    return {
        boxSizing: 'border-box',
        backgroundColor: theme.color.solid.white,
        margin: '0rem',
        minWidth: `min(100%, ${appMinWidth})`,
        width: `min(100%, ${appMaxWidth})`,
        maxWidth: '36rem',
        minHeight: '100vh',
        maxHeight: '100vh',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        paddingTop: uiLayoutConfig.hasHeader ? headerHeight : '0rem',
        paddingBottom: uiLayoutConfig.hasFooter ? footerHeight : '0rem',
    }
})

export default LayoutWrapper