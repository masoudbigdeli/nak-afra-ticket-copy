import { FC } from 'react'
import { IconProps } from '../icon'

const FormFieldResetter: FC<Pick<IconProps, 'isFill'>> = ({ isFill }) => {
    if (isFill) return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0001 18.3333C14.5834 18.3333 18.3334 14.5833 18.3334 9.99996C18.3334 5.41663 14.5834 1.66663 10.0001 1.66663C5.41675 1.66663 1.66675 5.41663 1.66675 9.99996C1.66675 14.5833 5.41675 18.3333 10.0001 18.3333Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.6416 12.3584L12.3583 7.64172" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.3583 12.3584L7.6416 7.64172" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0001 18.3333C14.5834 18.3333 18.3334 14.5833 18.3334 9.99996C18.3334 5.41663 14.5834 1.66663 10.0001 1.66663C5.41675 1.66663 1.66675 5.41663 1.66675 9.99996C1.66675 14.5833 5.41675 18.3333 10.0001 18.3333Z" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.6416 12.3584L12.3583 7.64172" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.3583 12.3584L7.6416 7.64172" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default FormFieldResetter