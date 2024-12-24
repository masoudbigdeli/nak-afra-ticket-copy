import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import AppThemeModel from '../../../models/theme-model'
import { appMaxWidth, appMinWidth } from '../../general/style-general-constants'


const LoadingWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: `min(100%, ${appMinWidth})`,
        width: `min(100%, ${appMaxWidth})`,
        maxWidth: '36rem',
        minHeight: '100vh',
        maxHeight: '100vh',
        height: '100vh',
        backgroundColor: `${theme.color.solid.black}40`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing.spacingM,
        zIndex: 1000,
        overflow: 'hidden'
    }
})

export default LoadingWrapper

const wave = keyframes`
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(2);
  }
  100% {
    transform: scaleY(1);
  }
`
interface LoaderProps {
    size: number
}

export const Loader = styled.div<LoaderProps & { theme?: AppThemeModel }>(({ theme, size }) => {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: `${size / 4}rem`,
        '> div': {
            width: `${size / 4}rem`,
            height: `${size}rem`,
            background: theme.color.ordinalColors.afra[800],
            transformOrigin: 'center center',
            animation: `${wave} 1s infinite ease-in-out`,
            borderRadius: `${size / 8}rem`,
        },
        '> div:nth-of-type(1)': {
            animationDelay: '0s'
        },
        '> div:nth-of-type(2)': {
            animationDelay: '0.2s'
        },
        '> div:nth-of-type(3)': {
            animationDelay: '0.4s'
        },
        '> div:nth-of-type(4)': {
            animationDelay: '0.6s'
        },

    }
})

interface LoaderTextProps {
    size: number
}

export const LoaderText = styled.div<LoaderTextProps & { theme?: AppThemeModel }>(({ theme, size }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        fontSize: `${size}rem`,
        fontWeight: 600,
        color: theme.color.ordinalColors.afra[800]
    }
})

export const ListLoadingWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: theme.spacing.spacingM,
        alignItems: 'center',
        paddingBlock: theme.spacing.spacingXxxl
    }
})

export const FallbackLoadingWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: `min(100%, ${appMinWidth})`,
        width: `min(100%, ${appMaxWidth})`,
        maxWidth: '36rem',
        minHeight: '100vh',
        maxHeight: '100vh',
        height: '100vh',
        backgroundColor: '#E1F6F2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // gap: theme.spacing.spacingM,
        zIndex: 1000,
        overflow: 'hidden'
    }
})
