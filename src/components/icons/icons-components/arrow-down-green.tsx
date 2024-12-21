import { FC } from 'react'
import { IconProps } from '../icon'

const ArrowDownGreen: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4707 10.74L12.0007 14.26L15.5307 10.74" stroke="#1AB394" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4707 10.74L12.0007 14.26L15.5307 10.74" stroke="#1AB394" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ArrowDownGreen