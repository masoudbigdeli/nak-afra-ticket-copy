import { FC, Fragment, useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PagesContainer from '../../styles/general/pages-container'
import useCrudService from '../../services/crud-service'
import apiUri from '../../configs/api-uri'
import { ListLoadingWrapper } from '../../styles/components/loading'
import { LoaderBars } from '../../components/loading'
import TriangleError from '../../components/icons/icons-components/triangle-error'
import { PageErrorText } from '../../styles/components/page-error'
import Button from '../../components/button'
import ContractHomeWidget from './widgets/contract-home-widget'
import AccessHomeWidget from './widgets/access-home-widget'
import TicketHomeWidget from './widgets/ticket-home-widget'


type HomeWidgetsType = 'Contract' | 'Message' | 'License'

const Home: FC = () => {
    const { t } = useTranslation()
    const { getEntity } = useCrudService()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [orderList, setOrderList] = useState<Array<HomeWidgetsType>>([])

    useLayoutEffect(() => { fetchWidgetOrder() }, [])

    const fetchWidgetOrder = useCallback(async () => {
        setError(false)
        setLoading(true)
        try {
            const res = await getEntity(apiUri.getHomeWidgets.uri(), apiUri.getHomeWidgets.permissions)
            setOrderList(res.data as Array<HomeWidgetsType>)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }, [setLoading, setError, setOrderList])

    const widgets: Record<HomeWidgetsType, FC> = useMemo(() => ({
        'Contract': ContractHomeWidget,
        'License': AccessHomeWidget,
        'Message': TicketHomeWidget,
    }), [])

    if (loading) {
        return (
            <PagesContainer style={{ justifyContent: 'center' }}>
                <ListLoadingWrapper >
                    <LoaderBars size={2} />
                </ListLoadingWrapper>
            </PagesContainer>
        )
    }

    if (error) {
        return (
            <PagesContainer style={{ justifyContent: 'center', gap: '1.5rem', '> svg': { width: '12.5rem', height: '12.5rem', } }}>
                <TriangleError />
                <PageErrorText >
                    {t('homePage.widgetFetchingError')}
                </PageErrorText>
                <Button
                    width='70%'
                    size='L'
                    type='ERROR'
                    title={t('homePage.tryAgainBtn')}
                    disabled={false}
                    hasIcon={false}
                    onClick={fetchWidgetOrder}
                    loading={false}
                />
            </PagesContainer>
        )
    }

    return (
        <PagesContainer style={{ overflow: 'auto', paddingLeft: '0rem' }}>
            {
                orderList.map((widget: HomeWidgetsType) => {
                    const Cmp = widgets[widget]
                    return <Fragment key={widget}>
                        <Cmp />
                    </Fragment>
                })
            }
        </PagesContainer>
    )
}

export default Home
