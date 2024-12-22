import { FC } from 'react'
import LayoutWrapper from '../../styles/components/layout'

const FallbackLoading: FC = () => {
    return (
        <LayoutWrapper
            uiLayoutConfig={{ hasFooter: false, hasHeader: false }}
        >
            <div></div>
        </LayoutWrapper>
    )
}

export default FallbackLoading