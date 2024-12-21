import { CSSProperties } from 'react'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'
import MODAL_TYPE from '../../../enums/modal-type'
import { appMaxWidth, appMinWidth } from '../../general/style-general-constants'

interface ModalWrapperProps {
  type: MODAL_TYPE
  style?: CSSProperties
}

const ModalWrapper = styled.div<ModalWrapperProps & { theme?: AppThemeModel }>(({ theme, type, style }) => {
  return {
    boxSizing: 'border-box',
    minWidth: `min(100%, ${appMinWidth})`,
    width: `min(100%, ${appMaxWidth})`,
    maxWidth: '36rem',
    minHeight: '100vh',
    maxHeight: '100vh',
    height: '100vh',
    marginInline: 'auto',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    paddingBlock: type === MODAL_TYPE.CENTER ? '5.125rem' : 0,
    paddingInline: type === MODAL_TYPE.CENTER ? '5.125rem' : 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${theme.color.ordinalColors.neural[800]}7F`,
    ...style
  }
})

export default ModalWrapper

interface ModalDialogElementWrapperProps {
  type: MODAL_TYPE
}

export const ModalDialogElementWrapper = styled.div<ModalDialogElementWrapperProps>(({ type }) => {
  return {
    boxSizing: 'border-box',
    minWidth: `min(100%, ${appMinWidth})`,
    width: `min(100%, ${appMaxWidth})`,
    maxWidth: '36rem',
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    display: 'flex',
    justifyContent: (type === MODAL_TYPE.CENTER || type === MODAL_TYPE.BOTTOM) ? 'center' : type === MODAL_TYPE.LEFT ? 'flex-end' : 'flex-start',
    alignItems: type === MODAL_TYPE.BOTTOM ? 'flex-end' : 'center',
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
    animation: `${getFade(type)} 1s forwards, ${appear} 0.8s forwards`,
    position: 'absolute',
    top: '0rem',
    bottom: '0rem',
    left: '0rem',
    right: '0rem',
  }
})

const CENTER = keyframes`
  from {
    padding-bottom: 100%
  }
  to {
    padding-bottom: 0%
  }
`

const LEFT = keyframes`
  from {
    left: -100%
  }
  to {
    left: 0%
  }
`

const RIGHT = keyframes`
  from {
    right: - 100%
  }
  to {
    right: 0%
  }
`

const BOTTOM = keyframes`
  from {
    margin-top: 100%
  }
  to {
    margin-top: 0%
  }
`

const getFade = (type: MODAL_TYPE) => {
  if (type === MODAL_TYPE.BOTTOM) return BOTTOM
  if (type === MODAL_TYPE.CENTER) return CENTER
  if (type === MODAL_TYPE.LEFT) return LEFT
  return RIGHT
}

const appear = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`