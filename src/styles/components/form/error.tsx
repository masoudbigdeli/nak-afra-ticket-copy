import { CSSProperties } from 'react'
import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'

export interface ErrorWrapperProps {
    fontSize: CSSProperties['fontSize']
    fontWeight: CSSProperties['fontWeight']
    lineHeight?: CSSProperties['lineHeight']
}

const ErrorWrapper = styled.div<{ theme?: AppThemeModel } & ErrorWrapperProps>(({ theme, fontSize, fontWeight }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minHeight: theme.spacing.spacingXl,
        height: 'max-content',
        fontSize,
        fontWeight,
        color: theme.color.ordinalColors.redError[500],
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: theme.spacing.spacingXxs,
    }
})

export default ErrorWrapper