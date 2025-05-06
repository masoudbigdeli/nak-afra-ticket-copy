import { FC, lazy, useCallback, useMemo } from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import StoreModel from '../../models/store-model'
import LanguageModel from '../../models/language-model'
import AppThemeModel from '../../models/theme-model'
import useStore from '../../state-management/store'
import appTheme from '../../configs/theme'
import useHeaderConfig from '../../hooks/use-header-config'
import useSynchronizerRouteLayout from '../../hooks/use-synchronizer-route-layout'

const LayoutWrapper = lazy(() => import('../../styles/components/layout'))
const BottomNavigation = lazy(() => import('./bottom-navigation'))
const TopNavigation = lazy(() => import('./top-navigation'))

interface ProtectedLayoutProps {
    children: JSX.Element
}

const Layout: FC<ProtectedLayoutProps> = ({ children }) => {
    const uiLayoutConfig = useSynchronizerRouteLayout()
    const darkMode: boolean = useStore<boolean>((store: StoreModel) => store.darkMode)
    const direction: LanguageModel['dir'] = useStore<LanguageModel['dir']>((store: StoreModel) => store.language.dir)

    const { showHeader, forceHideBackBtn } = useHeaderConfig()

    const activePopoverName = useStore<StoreModel['activePopoverName']>((store: StoreModel) => store.activePopoverName)
    const setActivePopoverName = useStore<StoreModel['setActivePopoverName']>((store: StoreModel) => store.setActivePopoverName)

    const onClick = useCallback(() => {
        if (typeof activePopoverName === 'string') {
            if (activePopoverName.endsWith('SelfClose')) return
            setActivePopoverName(null)
        }
    }, [activePopoverName, setActivePopoverName])

    const theme: AppThemeModel = useMemo<AppThemeModel>(() => appTheme(darkMode), [darkMode])

    const appFont: string = useMemo(() => (
        direction === 'ltr'
            ? 'url(/fonts/en/Inter-Regular.ttf)'
            : 'url(/fonts/fa/IRANSansXFaNum-Regular.ttf)'
    ), [direction])

    return (
        <ThemeProvider theme={theme}>
            <Global
                styles={{

                    '@font-face': {
                        fontFamily: 'app-font',
                        src: appFont,
                    },
                    body: {
                        fontFamily: 'app-font',
                        margin: 0,
                        padding: 0,
                        border: 'none',
                        direction: direction,
                        width: '100vw',
                        minWidth: '100vw',
                        maxWidth: '100vw',
                        height: 'max-content',
                        minHeight: 'max-content',
                        maxHeight: 'max-content',
                        overflowY:'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        WebkitTapHighlightColor: 'transparent',
                        backgroundColor: theme.color.solid.white,
                        '@font-face': {
                            fontFamily: 'app-font-fa',
                            src: 'url(/fonts/fa/IRANSansXFaNum-Regular.ttf)',
                        },
                        '> #root': {
                            fontFamily: 'app-font',
                            margin: 0,
                            padding: 0,
                            border: 'none',
                            direction: direction,
                            width: '100vw',
                            minWidth: '100vw',
                            maxWidth: '100vw',
                            height: 'max-content',
                            minHeight: 'max-content',
                            maxHeight: 'max-content',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            WebkitTapHighlightColor: 'transparent',
                        }
                    }
                }}
            />
            <LayoutWrapper
                uiLayoutConfig={uiLayoutConfig}
                className='layout-wrapper'
                onClick={onClick}
            >
                {showHeader ? <TopNavigation forceHideBackBtn={forceHideBackBtn} /> : null}
                {children}
                <BottomNavigation />
            </LayoutWrapper>
        </ThemeProvider>
    )
}

export default Layout