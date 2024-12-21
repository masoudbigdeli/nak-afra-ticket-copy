import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import AppThemeModel from '../../../models/theme-model'
import { ButtonProps } from '../../../components/button'

interface ButtonLoadingWrapperProps {
  type: ButtonProps['type']
}

const ButtonLoadingWrapper = styled.div<ButtonLoadingWrapperProps & { theme?: AppThemeModel }>(({ theme, type }) => {
  return {
    boxSizing: 'border-box',
    width: 'max-content',
    height: 'max-content',
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0.1875rem',
    backgroundColor: 'transparent',
    position: 'relative',
    '> span.static': {
      boxSizing: 'border-box',
      width: '0.3125rem',
      height: '0.3125rem',
      backgroundColor: `${getButtonLoadingCirclesBackgroundColor(type, theme)}99`,
      borderRadius: '50%',
    },
    '> span.dynamic': {
      boxSizing: 'border-box',
      width: '0.3125rem',
      height: '0.3125rem',
      backgroundColor: getButtonLoadingCirclesBackgroundColor(type, theme),
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '0%',
      transform: 'translateY(-50%)',
      animation: `${mymove} 0.8s infinite`,
      opacity: 0
    }
  }
})

export default ButtonLoadingWrapper

const mymove = keyframes`
  0% {
    left: 0%;
    opacity: 0;
  }
  33% {
    left: 0%;
    opacity: 1;
  }
  34% {
    left: calc(50% - (0.3125rem / 2));
    opacity: 0;
  }
  66% {
    left: calc(50% - (0.3125rem / 2));
    opacity: 1;
  }
  67% {
    left: calc(100% - 0.3125rem);
    opacity: 0;
  }
  100% {
    left: calc(100% - 0.3125rem);
    opacity: 1;
  }
`

const getButtonLoadingCirclesBackgroundColor = (type: ButtonProps['type'], theme: AppThemeModel): string => {

  if (type === 'FILLED') return theme.color.solid.white
  if (type === 'ERROR') return theme.color.solid.white
  if (type === 'TEXT') return theme.color.solid.white
  if (type === 'ERROR_TEXT') return theme.color.solid.white
  if (type === 'FILLED_SECONDARY') return theme.color.solid.white
  if (type === 'GREY_OUTLINE') return theme.color.solid.white
  if (type === 'OUTLINE') return theme.color.solid.white
  if (type === 'OUTLINE_SECONDARY') return theme.color.solid.white
  if (type === 'SUCCESS') return theme.color.solid.white
  if (type === 'SUCCESS_TEXT') return theme.color.solid.white

  return ''
}