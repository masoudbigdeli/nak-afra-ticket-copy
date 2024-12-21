import { FC } from 'react'
import { IconProps } from '../icon'

const BetweenDatesArrowLeft: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.97533 4.94165L2.91699 9.99998L7.97533 15.0583" stroke="#ABABAB" strokeWidth="1.08333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.0836 10H3.05859" stroke="#ABABAB" strokeWidth="1.08333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.97533 4.94165L2.91699 9.99998L7.97533 15.0583" stroke="#ABABAB" strokeWidth="1.08333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.0836 10H3.05859" stroke="#ABABAB" strokeWidth="1.08333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default BetweenDatesArrowLeft