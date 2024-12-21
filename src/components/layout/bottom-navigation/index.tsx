import { FC, useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"
import useStore from "../../../state-management/store"
import StoreModel from "../../../models/store-model"
import RouteModel from "../../../models/route-model"
import routes from "../../../configs/routes"
import BottomNavigationWrapper, { BottomNavigationItem } from "../../../styles/components/layout/bottom-navigation"
import PATH_OF_ROUTES from "../../../enums/path-of-routes"
import Icon from "../../icons/icon"

const BottomNavigation: FC = () => {
    const { t } = useTranslation()

    const { pathname } = useLocation()
    const navigate = useNavigate()

    const user = useStore((store: StoreModel) => store.user)

    const currentRoute: RouteModel | undefined = useMemo(() => {
        return routes.find((route: RouteModel) => (route.pathMatcher(pathname)))
    }, [pathname])

    const list: Array<RouteModel> = useMemo(() => {
        return routes.filter((route: RouteModel) => (route.showInBottomNavigation))
    }, [pathname, user])

    const isFillHandler = useCallback((route: RouteModel) => {
        if (route.path === PATH_OF_ROUTES.PROFILE) {
            return ([
                PATH_OF_ROUTES.PERSONAL_PROFILE,
                PATH_OF_ROUTES.LEGAL_PROFILE,
                PATH_OF_ROUTES.PROFILE
            ] as Array<string>).includes(pathname)
        }
        return route.pathMatcher(pathname)
    }, [pathname])

    const navigateHandler = useCallback((route: RouteModel) => navigate(route.path), [navigate])

    if (!currentRoute || !currentRoute.uiLayoutConfig.hasFooter || !list.length) return null

    return (
        <BottomNavigationWrapper>
            {
                list.map((route: RouteModel) => (
                    <BottomNavigationItem
                        key={route.path}
                        isCurrent={route.pathMatcher(pathname)}
                        countOfChild={list.length}
                        onClick={() => navigateHandler(route)}
                    >
                        {
                            route.bottomNavigationIconName
                                ? <Icon iconName={route.bottomNavigationIconName} size='1.25' isFill={isFillHandler(route)} />
                                : null
                        }
                        <div className="title">{t(`bottomNavigation.${route.title}`)}</div>
                    </BottomNavigationItem>
                ))
            }
        </BottomNavigationWrapper>
    )
}

export default BottomNavigation
