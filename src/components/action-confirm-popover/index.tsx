import { FC } from 'react'
import Button from '../button'
import { ActionConfirmPopoverModalBtnWrapper, ActionConfirmPopoverModalHeaderContainer, ActionConfirmPopoverModalText, ActionConfirmPopoverModalWrapper } from '../../styles/components/action-confirm-popover'

interface ActionConfirmPopoverProps {
    loading: boolean
    message: string
    cancelBtnTitle: string
    actionBtnTitle: string
    onCancel: () => void
    onAction: () => void
}
const ActionConfirmPopover: FC<ActionConfirmPopoverProps> = ({ loading, message, cancelBtnTitle, actionBtnTitle, onCancel, onAction }) => {
    return (
        <ActionConfirmPopoverModalWrapper>
            <ActionConfirmPopoverModalHeaderContainer>
                <div></div>
            </ActionConfirmPopoverModalHeaderContainer>
            <ActionConfirmPopoverModalText>
                {message}
            </ActionConfirmPopoverModalText>
            <ActionConfirmPopoverModalBtnWrapper>
                <Button
                    type='OUTLINE'
                    hasIcon={false}
                    size='M'
                    disabled={loading}
                    loading={false}
                    title={cancelBtnTitle}
                    onClick={onCancel}
                    width='100%'
                />
                <Button
                    type='FILLED'
                    hasIcon={false}
                    size='M'
                    disabled={false}
                    loading={loading}
                    title={actionBtnTitle}
                    onClick={onAction}
                    width='100%'
                />
            </ActionConfirmPopoverModalBtnWrapper>
        </ActionConfirmPopoverModalWrapper>
    )
}

export default ActionConfirmPopover