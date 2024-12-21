import styled from '@emotion/styled'
import AppThemeModel from '../../../../models/theme-model'

const ImagePickerWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    height: 'max-content',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
})

export default ImagePickerWrapper

export const ImagePickerLabelWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: theme.spacing.spacingXs,
        textAlign: 'right',
        fontSize: '0.75rem',
        fontWeight: 400,
        color: theme.color.ordinalColors.neural[700],
        lineHeight: theme.spacing.spacingM
    }
})

export const HideInput = styled.input({
    boxSizing: 'border-box',
    width: '0rem',
    height: '0rem',
    visibility: 'hidden',
    border: 'none',
    outline: 'none',
    position: 'absolute',
    top: '0rem',
    left: '0rem',
    ':focus': {
        border: 'none',
        outline: 'none',
    },
    ':focus-visible': {
        border: 'none',
        outline: 'none',
    },
    ':focus-within': {
        border: 'none',
        outline: 'none',
    }
})

export const ImagesWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: theme.spacing.spacingXs,
        flexWrap: 'wrap',
    }
})

interface ImageItemWrapperProps {
    parentWidth: number
    countOfColumns: number
    multiple: boolean
    isEmpty?: boolean
}

export const ImageItemWrapper = styled.div<ImageItemWrapperProps & { theme?: AppThemeModel }>(({ theme, multiple, parentWidth, countOfColumns, isEmpty }) => {
    return {
        boxSizing: 'border-box',
        width: `calc((${parentWidth}px - ((${countOfColumns} - 1) * ${theme.spacing.spacingXs}))/${countOfColumns})`,
        height: `calc((${parentWidth}px - ((${countOfColumns} - 1) * ${theme.spacing.spacingXs}))/${countOfColumns})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.spacing.spacingXxs,
        border: `0.0625rem ${isEmpty ? 'dashed' : 'solid'} ${theme.color.ordinalColors.neural[400]}`,
        position: 'relative',
        cursor: !multiple ? 'pointer' : 'default',
        '> img': {
            boxSizing: 'border-box',
            width: '100%',
            minWidth: '100%',
            maxWidth: '100%',
            height: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            borderRadius: theme.spacing.spacingXxs,
        },
        '> .remover-wrapper': {
            boxSizing: 'border-box',
            width: 'max-content',
            height: 'max-content',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '0.375rem',
            right: '0.375rem',
            cursor: 'pointer',
        }
    }
})