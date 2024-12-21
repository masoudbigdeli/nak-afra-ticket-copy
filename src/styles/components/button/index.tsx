import { CSSProperties } from 'react'
import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'
import buttonSizeConfig, {
  ButtonType,
  getButtonStyleByType,
  getPaddingByIconAndType,
} from './button-config'
import StoreModel from '../../../models/store-model'
import useStore from '../../../state-management/store'

export interface ButtonWrapperProps {
  size: keyof typeof buttonSizeConfig
  type: ButtonType
  disabled: boolean
  width?: CSSProperties['width']
  hasIcon: boolean
  style?: CSSProperties
}

const ButtonWrapper = styled.div<
  ButtonWrapperProps & { theme?: AppThemeModel }
>(({ theme, width, size, type, hasIcon, disabled, style }) => {
  const direction: StoreModel['language']['dir'] = useStore<
    StoreModel['language']['dir']
  >((store: StoreModel) => store?.language?.dir)

  return {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.spacingXs,
    borderWidth: '0.0625rem',
    borderStyle: 'solid',
    borderRadius: theme.spacing.spacingXs,
    direction,
    fontFamily: 'app-font',
    minWidth: 'max-content',
    ...buttonSizeConfig[size],
    ...getPaddingByIconAndType(hasIcon, size, direction),
    ...getButtonStyleByType(type, false, disabled, theme),
    ...style,
    width,
    ':hover': {
      ...getButtonStyleByType(type, true, disabled, theme),
    },
  }
})

export default ButtonWrapper

export const ButtonTitle = styled.span<Pick<ButtonWrapperProps, 'size'>>(
  ({ size }) => {
    return {
      boxSizing: 'border-box',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'max-content',
      height: 'max-content',
      textTransform: 'capitalize',
      fontSize: buttonSizeConfig[size].fontSize,
      fontWeight: buttonSizeConfig[size].fontWeight,
      lineHeight: buttonSizeConfig[size].lineHeight,
    }
  }
)
