import styled from '@emotion/styled'
import { CSSProperties } from 'react'
import AppThemeModel from '../../../models/theme-model'


interface LabelWrapperProps {
    style: CSSProperties | undefined
}
const LabelWrapper = styled.div<LabelWrapperProps & { theme?: AppThemeModel }>(({ theme, style }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        height: 'max-content',
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '0.25rem',
        padding: '0rem',
        margin: '0rem',
        color: theme.color.ordinalColors.neural[500],
        ...style
    }
})



export default LabelWrapper