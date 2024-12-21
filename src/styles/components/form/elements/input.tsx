import { CSSProperties } from 'react'
import styled from '@emotion/styled'
import AppThemeModel from '../../../../models/theme-model'
import { FormElementSize, formElementSize } from '../index'

export const InputWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    height: 'max-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '> input[type=number]': {
        'MozAppearance': 'textfield',
        '::-webkit-inner-spin-button': {
            'WebkitAppearance': 'none',
            margin: 0,
        },
        '::-webkit-outer-spin-button': {
            'WebkitAppearance': 'none',
            margin: 0,
        },
    }
})

export interface InputUiProps {
    size: FormElementSize
    error: boolean
    disabled?: boolean
    borderHide?: boolean
    hasIcon?: boolean
    hasResetter: boolean
    dir?: CSSProperties['direction']
}

export const InputUi = styled.input<any>(({
    theme,
    size,
    error,
    disabled,
    borderHide,
    hasIcon,
    hasResetter,
    dir,
}) => {
    return {
        boxSizing: 'border-box',
        fontFamily: 'app-font',
        width: '100%',
        outline: 'none',
        direction: dir ? dir : undefined,
        height: `${(formElementSize as any)[size]}rem`,
        fontSize: size === 'l' ? '0.875rem' : '0.75rem',
        fontWeight: 600,
        backgroundColor: 'transparent',
        borderWidth: '0.0625rem',
        borderStyle: 'solid',
        borderColor: getInputUiBorderColor((theme as AppThemeModel), (error ? true : false), (disabled ? true : false), (borderHide ? true : false)),
        borderRadius: (theme as AppThemeModel).radious.radiousXxs,
        color: disabled
            ? (theme as AppThemeModel).color.ordinalColors.neural[500]
            : (theme as AppThemeModel).color.ordinalColors.neural[900],
        paddingBlock: size === 'l' ? (theme as AppThemeModel).spacing.spacingS : (theme as AppThemeModel).spacing.spacingXs,
        paddingInline: (theme as AppThemeModel).spacing.spacingS,
        paddingRight: getInputUiPaddingRight((theme as AppThemeModel), (dir ? dir : 'rtl'), (hasIcon ? true : false), (hasResetter ? true : false)),
        paddingLeft: getInputUiPaddingLeft((theme as AppThemeModel), (dir ? dir : 'rtl'), (hasIcon ? true : false), (hasResetter ? true : false)),
        ':focus': {
            borderColor: getInputUiBorderColor((theme as AppThemeModel), (error ? true : false), (disabled ? true : false), (borderHide ? true : false)),
            '& + .label-wrapper': {
                top: size === 'l' ? '-0.625rem' : '-0.5rem',
                right: '0.75rem',
                transform: 'none',
                backgroundColor: (theme as AppThemeModel).color.solid.white
            }
        },
        ':focus-within': {
            borderColor: getInputUiBorderColor((theme as AppThemeModel), (error ? true : false), (disabled ? true : false), (borderHide ? true : false)),
        },
        ':focus-visible': {
            borderColor: getInputUiBorderColor((theme as AppThemeModel), (error ? true : false), (disabled ? true : false), (borderHide ? true : false)),
        },
        ':not(:placeholder-shown)': {
            '& + .label-wrapper': {
                top: size === 'l' ? '-0.625rem' : '-0.5rem',
                right: '0.75rem',
                transform: 'none',
                backgroundColor: (theme as AppThemeModel).color.solid.white
            },
        },
        ':disabled': {
            backgroundColor: 'transparent',
            color: (theme as AppThemeModel).color.ordinalColors.neural[500]
        },
    }
})

export const LabelWrapper = styled.div({
    boxSizing: 'border-box',
    width: 'max-content',
    height: 'max-content',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingInline: '0.25rem',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '50%',
    right: '0.75rem',
    transform: 'translateY(-50%)',
    transition: 'all 0.3s ease-out',
})

interface InsideIconsWrapperProps {
    dir: CSSProperties['direction']
}

export const InsideIconsWrapper = styled.div<InsideIconsWrapperProps>(({ dir }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        height: 'max-content',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        paddingRight: dir === 'rtl' ? '0.5rem' : undefined,
        paddingLeft: dir === 'ltr' ? '0.5rem' : undefined,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: dir === 'rtl' ? '0.75rem' : undefined,
        right: dir === 'ltr' ? '0.75rem' : undefined
    }
})

export const CharacterCounterCmpWrapper = styled.div({
    boxSizing: 'border-box',
    width: 'max-content',
    height: 'max-content',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '0rem',
    top: 'calc(100% + 0.125rem)',
})

const getInputUiBorderColor = (
    theme: AppThemeModel,
    error: boolean,
    disabled: boolean,
    borderHide: boolean,
): string => {
    if (disabled) return theme.color.ordinalColors.neural[400]
    if (error) return theme.color.ordinalColors.redError[500]
    if (borderHide) return 'transparent'
    return theme.color.ordinalColors.neural[400]
}

const getInputUiPaddingRight = (
    theme: AppThemeModel,
    dir: CSSProperties['direction'],
    hasIcon: boolean,
    hasResetter: boolean
): string => {
    if (dir === 'rtl') return theme.spacing.spacingS
    if (hasIcon && hasResetter) return '3.75rem'
    if (hasIcon || hasResetter) return '2.25rem'
    return theme.spacing.spacingS
}

const getInputUiPaddingLeft = (
    theme: AppThemeModel,
    dir: CSSProperties['direction'],
    hasIcon: boolean,
    hasResetter: boolean
): string => {
    if (dir === 'ltr') return theme.spacing.spacingS
    if (hasIcon && hasResetter) return '3.75rem'
    if (hasIcon || hasResetter) return '2.25rem'
    return theme.spacing.spacingS
}