import { FC } from 'react'
import { IconProps } from '../icon'

const BackArrowHeadRed: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5005 16.6L7.06719 11.1667C6.42552 10.525 6.42552 9.47503 7.06719 8.83336L12.5005 3.40002" stroke="#DC362E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5005 16.6L7.06719 11.1667C6.42552 10.525 6.42552 9.47503 7.06719 8.83336L12.5005 3.40002" stroke="#DC362E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default BackArrowHeadRed