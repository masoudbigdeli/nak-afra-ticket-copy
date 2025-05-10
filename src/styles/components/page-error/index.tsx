import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'
import { appMaxWidth, appMinWidth } from '../../general/style-general-constants'
import { CSSProperties } from 'react'


const PageErrorWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    const screenHeight: number = window.visualViewport?.height || 0

    return {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: `min(100%, ${appMinWidth})`,
        width: `min(100%, ${appMaxWidth})`,
        maxWidth: '36rem',
        minHeight: screenHeight ? `min(100vh, ${screenHeight}px)` : '100vh',
        maxHeight: screenHeight ? `min(100vh, ${screenHeight}px)` : '100vh',
        height: screenHeight ? `min(100vh, ${screenHeight}px)` : '100vh',
        backgroundColor: `${theme.color.solid.white}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing.spacingXxxl,
        zIndex: 1000,
        overflow: 'hidden',
        '> svg': {
            width: '12.5rem',
            height: '12.5rem',
        }
    }
})

export default PageErrorWrapper

export const PageErrorBackBtnWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        padding: theme.spacing.spacingM,
        borderBottom: `solid 1px ${theme.color.ordinalColors.neural[300]}`,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1002,
    }
})

interface PageErrorTextProps {
    style?: CSSProperties
}

export const PageErrorText = styled.div<PageErrorTextProps & { theme?: AppThemeModel }>(({ theme, style }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        maxWidth: '100%',
        wordBreak: 'break-word',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 800,
        color: theme.color.solid.black,
        ...style,
    }
})