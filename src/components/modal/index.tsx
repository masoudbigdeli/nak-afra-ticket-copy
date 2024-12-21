import { CSSProperties, FC, MouseEvent } from 'react'
import ModalWrapper, { ModalDialogElementWrapper } from '../../styles/components/modal'
import MODAL_TYPE from '../../enums/modal-type'

export interface ModalProps {
    type: MODAL_TYPE
    show: boolean
    triggerElement: React.ReactElement
    dialogElement: React.ReactElement
    style?: CSSProperties
    disableStopPropagation?: boolean
    onClose: () => void
}

const Modal: FC<ModalProps> = ({ disableStopPropagation, show, type, triggerElement, dialogElement, style, onClose }) => {
    return (
        <>
            {triggerElement}
            {
                show
                    ? <ModalWrapper
                        type={type}
                        style={style}
                        onClick={onClose}
                    >
                        <ModalDialogElementWrapper
                            type={type}
                            onClick={disableStopPropagation ? undefined : (event: MouseEvent<HTMLDivElement, unknown>) => event.stopPropagation()}
                        >
                            {dialogElement}
                        </ModalDialogElementWrapper>
                    </ModalWrapper>
                    : null
            }
        </>
    )
}

export default Modal