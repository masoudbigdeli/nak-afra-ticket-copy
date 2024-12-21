import { FC } from 'react'
import { IconProps } from '../icon'

const CircleSuccess: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99935 18.3333C14.5827 18.3333 18.3327 14.5833 18.3327 9.99999C18.3327 5.41666 14.5827 1.66666 9.99935 1.66666C5.41602 1.66666 1.66602 5.41666 1.66602 9.99999C1.66602 14.5833 5.41602 18.3333 9.99935 18.3333Z" stroke="#0FBD66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.45898 10L8.81732 12.3583L13.5423 7.64166" stroke="#0FBD66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99935 18.3333C14.5827 18.3333 18.3327 14.5833 18.3327 9.99999C18.3327 5.41666 14.5827 1.66666 9.99935 1.66666C5.41602 1.66666 1.66602 5.41666 1.66602 9.99999C1.66602 14.5833 5.41602 18.3333 9.99935 18.3333Z" stroke="#0FBD66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.45898 10L8.81732 12.3583L13.5423 7.64166" stroke="#0FBD66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default CircleSuccess