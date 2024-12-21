import PageErrorWrapper, { PageErrorBackBtnWrapper, PageErrorText } from '../../styles/components/page-error'
import Button from '../button'
import Icon from '../icons/icon'
import TriangleError from '../icons/icons-components/triangle-error'

interface PageErrorProps {
    btnText: string
    message: string
    onTryAgainBtnClick: () => void
    onBackBtnClick: () => void
}

const PageError = ({ btnText, message, onTryAgainBtnClick, onBackBtnClick }: PageErrorProps) => {
    return (
        <PageErrorWrapper>
            <PageErrorBackBtnWrapper>
                <Icon iconName='backArrow' size='1.5' onClick={onBackBtnClick} />
            </PageErrorBackBtnWrapper>
            <TriangleError />
            <PageErrorText >
                {message}
            </PageErrorText>
            <Button
                width='60%'
                size='L'
                type='ERROR'
                title={btnText}
                disabled={false}
                hasIcon={false}
                onClick={onTryAgainBtnClick}
                loading={false}
            />
        </PageErrorWrapper>
    )
}

export default PageError