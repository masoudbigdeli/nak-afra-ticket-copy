import { FC } from 'react'
import { IconProps } from '../icon'

const Persons: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M4.33293 14H4.02718C3.04951 14 2.21513 14.7068 2.0544 15.6712L1.72106 17.6712C1.51789 18.8903 2.45797 20 3.69385 20H7.33293" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.333 14H20.6387C21.6164 14 22.4508 14.7068 22.6115 15.6712L22.9449 17.6712C23.148 18.8903 22.2081 20 20.9722 20C19.8105 20 18.4282 20 17.333 20" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.0524 19.7519L16.4119 14.6279C16.2242 13.1266 14.948 12 13.4351 12H12.3334H11.2317C9.71874 12 8.44253 13.1266 8.25487 14.6279L7.61437 19.7519C7.46516 20.9456 8.39593 22 9.59892 22H12.3334H15.0678C16.2708 22 17.2016 20.9456 17.0524 19.7519Z" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.333 8C13.9899 8 15.333 6.65685 15.333 5C15.333 3.34315 13.9899 2 12.333 2C10.6762 2 9.33301 3.34315 9.33301 5C9.33301 6.65685 10.6762 8 12.333 8Z" stroke="#ABABAB" strokeWidth="1.3" />
                <path d="M4.33301 11C5.43758 11 6.33301 10.1046 6.33301 9C6.33301 7.89543 5.43758 7 4.33301 7C3.22844 7 2.33301 7.89543 2.33301 9C2.33301 10.1046 3.22844 11 4.33301 11Z" stroke="#ABABAB" strokeWidth="1.3" />
                <path d="M20.333 11C21.4376 11 22.333 10.1046 22.333 9C22.333 7.89543 21.4376 7 20.333 7C19.2284 7 18.333 7.89543 18.333 9C18.333 10.1046 19.2284 11 20.333 11Z" stroke="#ABABAB" strokeWidth="1.3" />
            </g>
        </svg>
    )
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M4.33293 14H4.02718C3.04951 14 2.21513 14.7068 2.0544 15.6712L1.72106 17.6712C1.51789 18.8903 2.45797 20 3.69385 20H7.33293" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.333 14H20.6387C21.6164 14 22.4508 14.7068 22.6115 15.6712L22.9449 17.6712C23.148 18.8903 22.2081 20 20.9722 20C19.8105 20 18.4282 20 17.333 20" stroke="#ABABAB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.0524 19.7519L16.4119 14.6279C16.2242 13.1266 14.948 12 13.4351 12H12.3334H11.2317C9.71874 12 8.44253 13.1266 8.25487 14.6279L7.61437 19.7519C7.46516 20.9456 8.39593 22 9.59892 22H12.3334H15.0678C16.2708 22 17.2016 20.9456 17.0524 19.7519Z" stroke="#ABABAB" stroke-width="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.333 8C13.9899 8 15.333 6.65685 15.333 5C15.333 3.34315 13.9899 2 12.333 2C10.6762 2 9.33301 3.34315 9.33301 5C9.33301 6.65685 10.6762 8 12.333 8Z" stroke="#ABABAB" stroke-width="1.3" />
                <path d="M4.33301 11C5.43758 11 6.33301 10.1046 6.33301 9C6.33301 7.89543 5.43758 7 4.33301 7C3.22844 7 2.33301 7.89543 2.33301 9C2.33301 10.1046 3.22844 11 4.33301 11Z" stroke="#ABABAB" stroke-width="1.3" />
                <path d="M20.333 11C21.4376 11 22.333 10.1046 22.333 9C22.333 7.89543 21.4376 7 20.333 7C19.2284 7 18.333 7.89543 18.333 9C18.333 10.1046 19.2284 11 20.333 11Z" stroke="#ABABAB" stroke-width="1.3" />
            </g>
        </svg>
    )
}

export default Persons