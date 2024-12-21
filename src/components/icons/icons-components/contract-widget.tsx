import { FC } from 'react'
import { IconProps } from '../icon'

const ContractWidget: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.49023 16.52L9.34023 14.67" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.7502 9.12L14.9002 7.27C14.2002 6.57 13.2402 6.61 12.7702 7.35L11.7402 8.98L15.0302 12.27L16.6602 11.24C17.3702 10.8 17.4102 9.77 16.7502 9.12Z" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.7405 8.98L9.35045 8.84C8.01045 8.76 7.55045 9.17 7.40045 10.44L6.80045 15.51C6.67045 16.58 7.44045 17.34 8.51045 17.22L13.5805 16.62C14.8505 16.47 15.3105 16.01 15.1805 14.67L15.0405 12.28" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.49023 16.52L9.34023 14.67" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.7502 9.12L14.9002 7.27C14.2002 6.57 13.2402 6.61 12.7702 7.35L11.7402 8.98L15.0302 12.27L16.6602 11.24C17.3702 10.8 17.4102 9.77 16.7502 9.12Z" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.7405 8.98L9.35045 8.84C8.01045 8.76 7.55045 9.17 7.40045 10.44L6.80045 15.51C6.67045 16.58 7.44045 17.34 8.51045 17.22L13.5805 16.62C14.8505 16.47 15.3105 16.01 15.1805 14.67L15.0405 12.28" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ContractWidget