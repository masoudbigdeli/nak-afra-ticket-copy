import { FC } from 'react'
import { FallbackLoadingWrapper } from '../../styles/components/loading'
import AfraLogo from '/afra.svg'
import { Global } from '@emotion/react'

const FallbackLoading: FC = () => {
    return (
        <>
            <Global
                styles={{
                    body: {
                        margin: 0,
                        padding: 0,
                        border: 'none',
                        width: '100vw',
                        minWidth: '100vw',
                        maxWidth: '100vw',
                        height: '100vh',
                        minHeight: '100vh',
                        maxHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        WebkitTapHighlightColor: 'transparent',
                        backgroundColor: 'lightgray',
                        '> #root': {
                            margin: 0,
                            padding: 0,
                            border: 'none',
                            width: '100vw',
                            minWidth: '100vw',
                            maxWidth: '100vw',
                            height: '100vh',
                            minHeight: '100vh',
                            maxHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            WebkitTapHighlightColor: 'transparent',
                        }
                    }
                }}
            />
            <FallbackLoadingWrapper>
                <img src={AfraLogo} width='250px' alt='afra-logo' />
            </FallbackLoadingWrapper>
        </>

    )
}

export default FallbackLoading
