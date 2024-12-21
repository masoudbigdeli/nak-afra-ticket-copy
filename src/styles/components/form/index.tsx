import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'

type ElementSize = 'l' | 'm'

export const formElementSize: Record<ElementSize, string> = {
    l: '3.125',
    m: '2.375',
}

export type FormElementSize = keyof typeof formElementSize

const FormElementWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: `calc(${theme.spacing.spacingXs} / 10)`,
        backgroundColor: 'transparent',
    }
})

export default FormElementWrapper