import { FC } from 'react'
import { IconProps } from '../icon'

const BottomNavigationHomeIcon: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3581 6.67501L11.8998 2.30834C10.8331 1.45834 9.16647 1.45001 8.10814 2.30001L2.64981 6.67501C1.86647 7.30001 1.39147 8.55 1.55814 9.53334L2.60814 15.8167C2.84981 17.225 4.15814 18.3333 5.58314 18.3333H14.4165C15.8248 18.3333 17.1581 17.2 17.3998 15.8083L18.4498 9.52501C18.5998 8.55001 18.1248 7.30001 17.3581 6.67501ZM10.6248 15C10.6248 15.3417 10.3415 15.625 9.99981 15.625C9.65814 15.625 9.37481 15.3417 9.37481 15V12.5C9.37481 12.1583 9.65814 11.875 9.99981 11.875C10.3415 11.875 10.6248 12.1583 10.6248 12.5V15Z" fill="#1AB394" />
        </svg>
    )
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 15V12.5" stroke="#3B3B3B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.39172 2.35001L2.61672 6.97501C1.96672 7.49167 1.55006 8.58334 1.69172 9.40001L2.80006 16.0333C3.00006 17.2167 4.13339 18.175 5.33339 18.175H14.6667C15.8584 18.175 17.0001 17.2083 17.2001 16.0333L18.3084 9.40001C18.4417 8.58334 18.0251 7.49167 17.3834 6.97501L11.6084 2.35834C10.7167 1.64167 9.27506 1.64167 8.39172 2.35001Z" stroke="#3B3B3B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default BottomNavigationHomeIcon