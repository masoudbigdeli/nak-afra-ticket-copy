import { FC } from 'react'
import { IconProps } from '../icon'

const Calendar: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V11H3V10Z" stroke="#ABABAB" strokeWidth="1.2" />
                <path d="M19 6H5C3.89543 6 3 6.89543 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 6.89543 20.1046 6 19 6Z" stroke="#ABABAB" strokeWidth="1.2" />
                <path d="M7 3V8" stroke="#ABABAB" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M17 3V8" stroke="#ABABAB" strokeWidth="1.2" strokeLinecap="round" />
            </g>
        </svg>
    )
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V11H3V10Z" stroke="#ABABAB" strokeWidth="1.2" />
                <path d="M19 6H5C3.89543 6 3 6.89543 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 6.89543 20.1046 6 19 6Z" stroke="#ABABAB" strokeWidth="1.2" />
                <path d="M7 3V8" stroke="#ABABAB" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M17 3V8" stroke="#ABABAB" strokeWidth="1.2" strokeLinecap="round" />
            </g>
        </svg>
    )
}

export default Calendar