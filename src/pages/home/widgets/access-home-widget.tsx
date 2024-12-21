import { FC, Fragment, useCallback, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useCrudService from '../../../services/crud-service'
import apiUri from '../../../configs/api-uri'
import { queryParamsGenerator } from '../../contracts/helper'
import { ListLoadingWrapper } from '../../../styles/components/loading'
import { LoaderBars } from '../../../components/loading'
import { PageErrorText } from '../../../styles/components/page-error'
import Button from '../../../components/button'
import NoItem from '../../../components/no-item'
import Icon from '../../../components/icons/icon'
import PATH_OF_ROUTES from '../../../enums/path-of-routes'
import TriangleError from '../../../components/icons/icons-components/triangle-error'
import AccessHomeWidgetWrapper from '../../../styles/pages/home/widgets/access-home-widget'
import Access from '../../accesses/access'
import { accessListDataS2CMiddleware } from '../../../services-data-middleware/server-to-client/access'

const AccessHomeWidget: FC = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { getEntity } = useCrudService()
    const [loading, setLoading] = useState<boolean>(false)
    const [fetchError, setFetchError] = useState<boolean>(true)
    const [data, setData] = useState<Array<any>>([])

    const doFetch = useCallback(async () => {
        if (loading) return
        setLoading(true)
        setFetchError(false)
        try {
            const response = await getEntity(
                apiUri.accessList.uri(queryParamsGenerator(1, 2, undefined, undefined)),
                apiUri.accessList.permissions,
            )
            setData(() => accessListDataS2CMiddleware([...(response.data as any).data]))
        } catch (err) {
            setFetchError(true)
        } finally {
            setLoading(false)
        }
    }, [loading, setData])

    const goToMainList = useCallback(() => navigate(PATH_OF_ROUTES.ACCESSES), [navigate])

    useLayoutEffect(() => {
        doFetch()
    }, [])

    if (loading) {
        return (
            <AccessHomeWidgetWrapper style={{ gap: '1rem' }}>
                <div className='header'>
                    <span>{t('homePage.accesses')}</span>
                    <span></span>
                </div>
                <ListLoadingWrapper >
                    <LoaderBars size={1.5} />
                </ListLoadingWrapper>
            </AccessHomeWidgetWrapper>
        )
    }

    if (fetchError) {
        return (
            <AccessHomeWidgetWrapper style={{ gap: '1rem' }}>
                <div className='header'>
                    <span>{t('homePage.accesses')}</span>
                    <span></span>
                </div>
                <TriangleError />
                <PageErrorText style={{ fontSize: '0.75rem' }}>
                    {t('homePage.accessesFetchError')}
                </PageErrorText>
                <Button
                    width='50%'
                    size='M'
                    type='ERROR'
                    title={t('homePage.tryAgainBtn')}
                    disabled={false}
                    hasIcon={false}
                    onClick={doFetch}
                    loading={false}
                />
            </AccessHomeWidgetWrapper>
        )
    }

    return (
        <AccessHomeWidgetWrapper>
            <div className='header'>
                <span>{t('homePage.accesses')}</span>
                <span></span>
            </div>
            <div className="list">
                {
                    data && data.length
                        ? <>
                            {
                                data.map((access) => (
                                    <Fragment key={access.id}>
                                        <Access
                                            id={access.id}
                                            startDate={access.startDate}
                                            endDate={access.endDate}
                                            status={access.status}
                                            personName={access.personName}
                                            startTime={access.startTime}
                                            endTime={access.endTime}
                                            personDescription={access.personDescription}
                                            description={access.description}
                                        />
                                    </Fragment>
                                ))
                            }
                            <Button
                                size='S'
                                width='100%'
                                type='SUCCESS_TEXT'
                                title={t('homePage.showAllAccesses')}
                                disabled={!data.length}
                                hasIcon={true}
                                icon={Icon}
                                iconName={data && data.length ? 'arrowDownGreen' : 'arrowLeftGery'}
                                onClick={goToMainList}
                                loading={false}
                                style={{ paddingInline: '0rem' }}
                            />
                        </>
                        : <NoItem loading={loading} text={t('accessesPage.noAccssesFound')} />
                }
            </div>
        </AccessHomeWidgetWrapper>
    )
}

export default AccessHomeWidget