import { FC } from 'react'
import NotFoundImage from './not-found-image'
import NotFoundWrapper, { NotFoundText } from '../../styles/pages/not-found'

const NotFound: FC = () => {
    return (
        <NotFoundWrapper>
            <NotFoundImage />
            <NotFoundText>صفحه ای یافت نشد!</NotFoundText>
        </NotFoundWrapper>

    )
}

export default NotFound