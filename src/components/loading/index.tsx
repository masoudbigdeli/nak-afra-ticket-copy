import LoadingWrapper, { Loader, LoaderText } from '../../styles/components/loading'
import { useTranslation } from 'react-i18next'

interface LoaderBarsProps {
    size: number
}

export const LoaderBars = ({ size }: LoaderBarsProps) => {
    return (
        <Loader size={size}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Loader>
    )
}




const LoadingFullPage = () => {
    const { t } = useTranslation()
    return (
        <LoadingWrapper>
            <LoaderBars size={1} />
            <LoaderText size={0.75}>
                {t('loader.loaderText-1')}
            </LoaderText>
        </LoadingWrapper>
    )
}

export default LoadingFullPage
