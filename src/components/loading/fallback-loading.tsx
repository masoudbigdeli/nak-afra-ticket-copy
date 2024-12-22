import { FC } from 'react'
import LayoutWrapper from '../../styles/components/layout'
import LoadingFullPage from '.'

const FallbackLoading: FC = () => {
    return (
        <LayoutWrapper
            uiLayoutConfig={{ hasFooter: false, hasHeader: false }}
        >
            
        </LayoutWrapper>
    )
}

export default FallbackLoading