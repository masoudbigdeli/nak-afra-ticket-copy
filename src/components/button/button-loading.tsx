import { FC } from 'react'
import ButtonLoadingWrapper from '../../styles/components/button/button-loading'
import { ButtonProps } from '.'

interface ButtonLoadingProps {
    type: ButtonProps['type']
}

const ButtonLoading : FC<ButtonLoadingProps> = ({type}) => {
    return(
        <ButtonLoadingWrapper type={type}>
            <span className='static'></span>
            <span className='static'></span>
            <span className='static'></span>
            <span className='dynamic'></span>
        </ButtonLoadingWrapper>  
    )
}

export default ButtonLoading