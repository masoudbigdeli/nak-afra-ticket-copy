import { FC } from 'react'
import { IconProps } from '../icon'

const Plus: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10H15" stroke="#3B3B3B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 15V5" stroke="#3B3B3B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10H15" stroke="#3B3B3B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 15V5" stroke="#3B3B3B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Plus