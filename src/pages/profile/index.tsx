import { FC, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import PagesContainer from '../../styles/general/pages-container'
import GeneralItemWidget from './profile-widget'
import PATH_OF_ROUTES from '../../enums/path-of-routes'
import useStore from '../../state-management/store'
import StoreModel from '../../models/store-model'
import PROFILE_TYPE from '../../enums/profile-type'
import { legalProfileDataS2CMiddleware, personalProfileDataS2CMiddleware } from '../../services-data-middleware/server-to-client/profile'
import ProfilePageWrapper, { LogoutContainer } from '../../styles/pages/profile'
import Modal from '../../components/modal'
import MODAL_TYPE from '../../enums/modal-type'
import useCrudService from '../../services/crud-service'
import apiUri from '../../configs/api-uri'
import toaster from '../../components/toaster'
import { IconName } from '../../components/icons/icon-list'
import ActionConfirmPopover from '../../components/action-confirm-popover'

const logoutPopoverName = 'logoutPopoverName'

const Profile: FC = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { getEntity } = useCrudService()
    const user = useStore((store: StoreModel) => store.user)
    const activePopoverName = useStore((store: StoreModel) => store.activePopoverName)
    const setToken = useStore((store: StoreModel) => store.setToken)
    const setUser = useStore((store: StoreModel) => store.setUser)
    const setActivePopoverName = useStore((store: StoreModel) => store.setActivePopoverName)

    const [loading, setLoading] = useState<boolean>(false)

    const profileDetailPath: PATH_OF_ROUTES = useMemo(() => {
        if (!user || user.type === PROFILE_TYPE.PERSONAL) return PATH_OF_ROUTES.PERSONAL_PROFILE
        return PATH_OF_ROUTES.LEGAL_PROFILE
    }, [user])

    const profileData = useMemo(() => {
        if (user === null) return undefined
        return user.type === PROFILE_TYPE.PERSONAL ? personalProfileDataS2CMiddleware(user) : legalProfileDataS2CMiddleware(user)
    }, [user])

    const personalwidgetInfo = useMemo(() => ({
        phoneNumber: profileData?.phoneNumber,
        outerTitle: `${t('profilePage.information')} ${profileData?.type === PROFILE_TYPE.PERSONAL ? t('profilePage.personal') : t('profilePage.legal')}`,
        rightText: profileData?.name,
        leftButtonText: t('profilePage.details'),
    }), [profileData])

    const showLogoutModal: boolean = useMemo(() => (logoutPopoverName === activePopoverName), [activePopoverName])

    const supportWidgetInfo: { outerTitle: string, rightText: string, rightIcon: IconName } = useMemo(() => ({
        outerTitle: t('profilePage.support'),
        rightText: t('profilePage.callSupport'),
        rightIcon: 'supportPerson'
    }), [t])

    const logoutWidgetInfo: { rightText: string, rightIcon: IconName } = useMemo(() => ({
        rightText: t('profilePage.logOutOfAccount'),
        rightIcon: 'logoutRed'
    }), [t])

    const contractsWidgetInfo: { outerTitle: string, rightText: string, rightIcon: IconName } = useMemo(() => ({
        outerTitle: t('profilePage.contracts'),
        rightText: t('profilePage.showContracts'),
        rightIcon: 'showDetail'
    }), [t])

    const redirectTo = useCallback((path: PATH_OF_ROUTES) => navigate(path), [navigate])

    const toggleLogoutModalShow = useCallback(() => setActivePopoverName(showLogoutModal ? null : logoutPopoverName), [showLogoutModal, setActivePopoverName])

    const hanldeLogout = useCallback(async () => {
        setLoading(true)
        try {
            await getEntity(apiUri.logout.uri(), apiUri.logout.permissions)
            setToken(null)
            setUser(null)
            toaster.SUCCESS(t('profilePage.youLoggedOutSuccessfully'))
            toggleLogoutModalShow()
        } catch (error) {
            toaster.ERROR(t('profilePage.logoutWasUnsuccessful'))
        } finally {
            setLoading(false)
        }
    }, [getEntity, setToken, setUser, setLoading, toggleLogoutModalShow])

    return (
        <PagesContainer style={{ zIndex: 1000 }}>
            <ProfilePageWrapper>
                <GeneralItemWidget
                    widgetInfo={personalwidgetInfo}
                >
                    <GeneralItemWidget.TopOutTitle />
                    <GeneralItemWidget.ContentContainer onClick={() => redirectTo(profileDetailPath)}>
                        <GeneralItemWidget.RightContent>
                            <GeneralItemWidget.RightContentTop>
                                <GeneralItemWidget.RightContentMainText />
                            </GeneralItemWidget.RightContentTop>
                            <GeneralItemWidget.RightContentBottomText />
                        </GeneralItemWidget.RightContent>
                        <GeneralItemWidget.LeftContent>
                            <GeneralItemWidget.LeftContentButton iconName='backArrowHeadGreen' />
                        </GeneralItemWidget.LeftContent>
                    </GeneralItemWidget.ContentContainer>
                </GeneralItemWidget>
                <GeneralItemWidget
                    widgetInfo={contractsWidgetInfo}
                >
                    <GeneralItemWidget.TopOutTitle />
                    <GeneralItemWidget.ContentContainer onClick={() => redirectTo(PATH_OF_ROUTES.CONTRACTS)}>
                        <GeneralItemWidget.RightContent>
                            <GeneralItemWidget.RightContentTop>
                                <GeneralItemWidget.RightContentIcon />
                                <GeneralItemWidget.RightContentMainText />
                            </GeneralItemWidget.RightContentTop>
                            <GeneralItemWidget.RightContentBottomText />
                        </GeneralItemWidget.RightContent>
                        <GeneralItemWidget.LeftContent>
                            <GeneralItemWidget.LeftContentButton iconName='backArrowHeadGreen' />
                        </GeneralItemWidget.LeftContent>
                    </GeneralItemWidget.ContentContainer>
                </GeneralItemWidget>
                <GeneralItemWidget
                    widgetInfo={supportWidgetInfo}
                >
                    <GeneralItemWidget.TopOutTitle />
                    <GeneralItemWidget.ContentContainer onClick={() => redirectTo(PATH_OF_ROUTES.SUPPORT)}>
                        <GeneralItemWidget.RightContent>
                            <GeneralItemWidget.RightContentTop>
                                <GeneralItemWidget.RightContentIcon />
                                <GeneralItemWidget.RightContentMainText />
                            </GeneralItemWidget.RightContentTop>
                            <GeneralItemWidget.RightContentBottomText />
                        </GeneralItemWidget.RightContent>
                        <GeneralItemWidget.LeftContent>
                            <GeneralItemWidget.LeftContentButton iconName='backArrowHeadGreen' />
                        </GeneralItemWidget.LeftContent>
                    </GeneralItemWidget.ContentContainer>
                </GeneralItemWidget>
            </ProfilePageWrapper>
            <LogoutContainer>
                <Modal
                    type={MODAL_TYPE.BOTTOM}
                    show={showLogoutModal}
                    triggerElement={
                        <GeneralItemWidget
                            widgetInfo={logoutWidgetInfo}
                        >
                            <GeneralItemWidget.ContentContainer onClick={toggleLogoutModalShow}
                            >
                                <GeneralItemWidget.RightContent >
                                    <GeneralItemWidget.RightContentTop textColor='red'>
                                        <GeneralItemWidget.RightContentIcon />
                                        <GeneralItemWidget.RightContentMainText />
                                    </GeneralItemWidget.RightContentTop>
                                    <GeneralItemWidget.RightContentBottomText />
                                </GeneralItemWidget.RightContent>
                                <GeneralItemWidget.LeftContent>
                                    <GeneralItemWidget.LeftContentButton iconName='backArrowHeadRed' />
                                </GeneralItemWidget.LeftContent>
                            </GeneralItemWidget.ContentContainer>
                        </GeneralItemWidget>
                    }
                    dialogElement={
                        <ActionConfirmPopover
                            loading={loading}
                            message={t('profilePage.doYouWantToLogout')}
                            cancelBtnTitle={t('form.btns.cancel')}
                            actionBtnTitle={t('form.btns.exit')}
                            onCancel={toggleLogoutModalShow}
                            onAction={hanldeLogout}
                        />
                    }
                    onClose={toggleLogoutModalShow}
                />
            </LogoutContainer>
        </PagesContainer>
    )
}

export default Profile