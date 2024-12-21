import { FC } from 'react'
import { IconProps } from '../icon'

const ArrowDown: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0003 29.3333C23.3641 29.3333 29.3337 23.3638 29.3337 16C29.3337 8.63621 23.3641 2.66667 16.0003 2.66667C8.63653 2.66667 2.66699 8.63621 2.66699 16C2.66699 23.3638 8.63653 29.3333 16.0003 29.3333Z" fill="#F1F1F1" />
            <path d="M11.293 14.32L15.9996 19.0133L20.7063 14.32" stroke="#1AB394" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0003 29.3333C23.3641 29.3333 29.3337 23.3638 29.3337 16C29.3337 8.63621 23.3641 2.66667 16.0003 2.66667C8.63653 2.66667 2.66699 8.63621 2.66699 16C2.66699 23.3638 8.63653 29.3333 16.0003 29.3333Z" fill="#F1F1F1" />
            <path d="M11.293 14.32L15.9996 19.0133L20.7063 14.32" stroke="#1AB394" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ArrowDown