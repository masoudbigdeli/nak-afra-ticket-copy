import { FC } from 'react'
import { IconProps } from '../icon'

const CircleInfo: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99992 14.6667C11.6666 14.6667 14.6666 11.6667 14.6666 8.00004C14.6666 4.33337 11.6666 1.33337 7.99992 1.33337C4.33325 1.33337 1.33325 4.33337 1.33325 8.00004C1.33325 11.6667 4.33325 14.6667 7.99992 14.6667Z" stroke="#F8A41B" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 5.33337V8.66671" stroke="#F8A41B" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.99634 10.6666H8.00233" stroke="#F8A41B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99992 14.6667C11.6666 14.6667 14.6666 11.6667 14.6666 8.00004C14.6666 4.33337 11.6666 1.33337 7.99992 1.33337C4.33325 1.33337 1.33325 4.33337 1.33325 8.00004C1.33325 11.6667 4.33325 14.6667 7.99992 14.6667Z" stroke="#F8A41B" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 5.33337V8.66671" stroke="#F8A41B" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.99634 10.6666H8.00233" stroke="#F8A41B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default CircleInfo