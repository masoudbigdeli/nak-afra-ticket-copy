import { FC, useCallback, useLayoutEffect, useState } from 'react'
import PagesContainer from '../../styles/general/pages-container'
import ProfilePageWrapper from '../../styles/pages/profile'
import GeneralItemWidget from '../profile/profile-widget'
import { useTranslation } from 'react-i18next'
import ServerSupportData from '../../models/api-reponse/support'
import useCrudService from '../../services/crud-service'
import apiUri from '../../configs/api-uri'
import { SupportEntityDetailModel } from '../../models/pages/support'
import { supportDataS2CMiddleware } from '../../services-data-middleware/server-to-client/support'
import toaster from '../../components/toaster'
import PageError from '../../components/page-error'
import LoadingFullPage from '../../components/loading'
import PATH_OF_ROUTES from '../../enums/path-of-routes'
import { useNavigate } from 'react-router-dom'
interface SupportResponse {
    data: {
        data: Array<ServerSupportData>;
    };
}
const Support: FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { getEntity } = useCrudService()
    const [supportFrontEndData, setSupportFrontEndData] = useState<SupportEntityDetailModel | undefined>()
    const [loading, setLoading] = useState<boolean>(false)
    const [tryFetchAgain, setTryFetchAgain] = useState<boolean>(false)

    const getData = useCallback(async () => {
        try {
            setTryFetchAgain(false)
            setLoading(true)
            const response = await getEntity<SupportResponse>(
                apiUri.supports.uri(),
                apiUri.supports.permissions,
            )
            const supportDataFromMiddleware = supportDataS2CMiddleware((response as any)?.data)
            setSupportFrontEndData(supportDataFromMiddleware)
            setLoading(false)
        } catch (error) {
            toaster.ERROR(t('supportPage.supportPageDataFetchError'))
            setLoading(false)
            setTryFetchAgain(true)
        } finally {
            setLoading(false)
        }
    }, [])

    useLayoutEffect(() => {
        getData()
    }, [])

    return (
        <PagesContainer>
            <ProfilePageWrapper>
                {
                    loading
                        ? <LoadingFullPage />
                        : tryFetchAgain
                            ? <PageError
                                btnText='تلاش دوباره'
                                message={t('form.error.dataFetchingError')}
                                onTryAgainBtnClick={getData}
                                onBackBtnClick={() => navigate(PATH_OF_ROUTES.PROFILE)}
                            />
                            : <>
                                <GeneralItemWidget
                                    widgetInfo={{ outerTitle: `${t('supportPage.address')}`, rightText: supportFrontEndData?.address }}
                                >
                                    <GeneralItemWidget.TopOutTitle />
                                    <GeneralItemWidget.ContentContainer>
                                        <GeneralItemWidget.RightContentMainText />
                                        <GeneralItemWidget.RightContentBottomText />
                                    </GeneralItemWidget.ContentContainer>
                                </GeneralItemWidget>
                                <GeneralItemWidget widgetInfo={{ outerTitle: `${t('supportPage.supportPhoneNumber')}`, rightText: supportFrontEndData?.phoneNumber.slice(0, 3) + '-' + supportFrontEndData?.phoneNumber.slice(3) }}>
                                    <GeneralItemWidget.TopOutTitle />
                                    <GeneralItemWidget.ContentContainer>
                                        <GeneralItemWidget.RightContentMainText />
                                        <GeneralItemWidget.RightContentBottomText />
                                    </GeneralItemWidget.ContentContainer>
                                </GeneralItemWidget>
                                <GeneralItemWidget
                                    widgetInfo={{ outerTitle: `${t('supportPage.email')}`, rightText: supportFrontEndData?.email }}
                                >
                                    <GeneralItemWidget.TopOutTitle />
                                    <GeneralItemWidget.ContentContainer>
                                        <GeneralItemWidget.RightContentMainText />
                                        <GeneralItemWidget.RightContentBottomText />
                                    </GeneralItemWidget.ContentContainer>
                                </GeneralItemWidget>
                            </>
                }
            </ProfilePageWrapper>
        </PagesContainer>
    )
}

export default Support