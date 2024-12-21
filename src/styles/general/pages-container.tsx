import { CSSProperties } from 'react'
import styled from '@emotion/styled'
import AppThemeModel from '../../models/theme-model'

interface PagesContainerProps {
    style?: CSSProperties & Record<string, any>
}

const PagesContainer = styled.div<PagesContainerProps & { theme?: AppThemeModel }>(({ theme, style }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingInline: theme.spacing.spacingL,
        position: 'relative',
        ...style,
        '&::-webkit-scrollbar': {
            width: '0.2rem',
            backgroundColor: 'transparent',
            borderRadius: '0.5rem',
            paddingRight: '10rem'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
            borderRadius: '0.5rem',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'transparent',
            borderRadius: '0.5rem',
        },
        ':hover': {
            '&::-webkit-scrollbar': {
                width: '0.2rem',
                backgroundColor: 'transparent',
                height: '95%',
                borderRadius: '0.5rem',
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
                height: '95%',
                borderRadius: '0.5rem',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'grey',
                borderRadius: '0.5rem',
            },
        }
    }
})

export default PagesContainer
