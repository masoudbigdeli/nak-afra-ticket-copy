import { FC } from 'react'
import { IconProps } from '../icon'

const LogoutRed: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5332 12.1833L16.6665 10.05L14.5332 7.91666" stroke="#DC362E" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.13281 10.05H16.6078" stroke="#DC362E" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.79948 16.6667C6.11615 16.6667 3.13281 14.1667 3.13281 10C3.13281 5.83334 6.11615 3.33334 9.79948 3.33334" stroke="#DC362E" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5332 12.1833L16.6665 10.05L14.5332 7.91666" stroke="#DC362E" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.13281 10.05H16.6078" stroke="#DC362E" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.79948 16.6667C6.11615 16.6667 3.13281 14.1667 3.13281 10C3.13281 5.83334 6.11615 3.33334 9.79948 3.33334" stroke="#DC362E" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default LogoutRed