import { FC, useCallback, useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useCrudService from '../../../services/crud-service'
import apiUri from '../../../configs/api-uri'
import { queryParamsGenerator } from '../../contracts/helper'
import { contractListDataS2CMiddleware } from '../../../services-data-middleware/server-to-client/contract'
import ContractHomeWidgetWrapper from '../../../styles/pages/home/widgets/contract-home-widget'
import { ListLoadingWrapper } from '../../../styles/components/loading'
import { LoaderBars } from '../../../components/loading'
import { PageErrorText } from '../../../styles/components/page-error'
import Button from '../../../components/button'
import NoItem from '../../../components/no-item'
import ContractWidget from '../../../components/contract-widget'
import TriangleError from '../../../components/icons/icons-components/triangle-error'

const ContractHomeWidget: FC = () => {
    const { t } = useTranslation()
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
                apiUri.contractList.uri(queryParamsGenerator(1, 2, undefined, undefined)),
                apiUri.contractList.permissions,
            )
            setData(() => contractListDataS2CMiddleware([...(response.data as any).data]))
        } catch (err) {
            setFetchError(true)
        } finally {
            setLoading(false)
        }
    }, [loading, setData])

    useLayoutEffect(() => {
        doFetch()
    }, [])

    if (loading) {
        return (
            <ContractHomeWidgetWrapper loadingOrError={true} style={{ gap: '1rem' }}>
                <div className='header'>
                    <span>{t('homePage.contracts')}</span>
                    <span></span>
                </div>
                <ListLoadingWrapper >
                    <LoaderBars size={1.5} />
                </ListLoadingWrapper>
            </ContractHomeWidgetWrapper>
        )
    }

    if (fetchError) {
        return (
            <ContractHomeWidgetWrapper loadingOrError={true} style={{ gap: '1rem' }}>
                <div className='header'>
                    <span>{t('homePage.contracts')}</span>
                    <span></span>
                </div>
                <TriangleError />
                <PageErrorText style={{ fontSize: '0.75rem' }}>
                    {t('homePage.contractFetchError')}
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
            </ContractHomeWidgetWrapper>
        )
    }

    return (
        <ContractHomeWidgetWrapper dataLength={data?.length}>
            <div className='header'>
                <span>{t('homePage.contracts')}</span>
                <span></span>
            </div>
            <div className="list">
                {
                    data && data.length
                        ? data.map((contract) => (
                            <div className='item-wrapper' key={contract.id}>
                                <ContractWidget
                                    id={contract.id}
                                    contractNumber={`${t('contractPage.contractNumberText')} ${contract.contractNumber} `}
                                    siteCode={contract.siteCode}
                                    status={contract.status}
                                    contractDuration={contract.contractDuration}
                                    contractRemaining={contract.contractRemaining}
                                />
                            </div>
                        ))
                        : <NoItem loading={loading} text={t('contractPage.noContractFound')} />
                }
            </div>
        </ContractHomeWidgetWrapper>
    )
}

export default ContractHomeWidget