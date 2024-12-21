import { FC, Fragment, useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PagesContainer from '../../../styles/general/pages-container'
import ContractDetailPageWrapper, { ContractPaymentHistoryWrapper, ContractTitleAndStatusWrapper } from '../../../styles/pages/contracts'
import { contractDetailDataS2CMiddleware } from '../../../services-data-middleware/server-to-client/contract'
import CONTRACT_STATUS_TYPE from '../../../enums/contract-status-type'
import ContractDetailWidget from './contract-detail-widget-with-title'
import DetailSubItem from './detail-sub-item'
import ProgressBar from '../../../components/progress-bar'
import { RemainingTimeInfoTextWrapper, RemainingTimeInfoWrapper } from '../../../styles/components/contract-widget'
import Badge from '../../../components/badge'
import BADGE_TYPE from '../../../enums/badge-type'
import ContractPaymentHistoryWidget from './payment-history-item/contract-payment-history-widget'
import useCrudService from '../../../services/crud-service'
import apiUri from '../../../configs/api-uri'
import toaster from '../../../components/toaster'
import { useNavigate, useParams } from 'react-router-dom'
import { ContractEntityDetailModel } from '../../../models/pages/contract'
import PageError from '../../../components/page-error'
import PATH_OF_ROUTES from '../../../enums/path-of-routes'
import Loading from '../../../components/loading'

const ContractDetail: FC = () => {
    const { id } = useParams()
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { getEntity } = useCrudService()

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [contractData, setContractData] = useState<ContractEntityDetailModel>()

    const progressBarHasError = useMemo(() => (!contractData || isNaN(contractData.contractRemaining) || isNaN(contractData.contractDuration)), [contractData])
    const badgeType = useMemo(() => contractData && contractData.status === CONTRACT_STATUS_TYPE.ACTIVE ? BADGE_TYPE.GREEN : BADGE_TYPE.ORANGE, [contractData])
    const badgeText = useMemo(() => contractData?.status === CONTRACT_STATUS_TYPE.EXPIRED ? t('contractPage.expiredContract') : t('contractPage.activeContract'), [contractData])

    const getContract = useCallback(async () => {
        setError(false)
        if (!loading) {
            setLoading(true)
        }
        try {
            const contractsFromServer: any = await getEntity(
                apiUri.contractDetail.uri(id || ''),
                apiUri.contractDetail.permissions,
            )
            setContractData(contractDetailDataS2CMiddleware(contractsFromServer?.data))
        } catch (error) {
            toaster.ERROR(t('contractPage.contractDetailFetchFailed'))
            setError(true)
        } finally {
            setLoading(false)
        }
    }, [loading, setLoading, setError, setContractData, getEntity])

    useLayoutEffect(() => {
        getContract()
    }, [])

    if (error) {
        return (
            <PageError
                btnText={t('form.error.tryAgainBtn')}
                message={t('form.error.dataFetchingError')}
                onTryAgainBtnClick={getContract}
                onBackBtnClick={() => navigate(PATH_OF_ROUTES.CONTRACTS)}
            />
        )
    }

    return (
        <PagesContainer style={{ maxHeight: '100%', overflowY: 'auto' }}>
            {
                loading
                    ? <Loading />
                    : <ContractDetailPageWrapper>
                        <ContractTitleAndStatusWrapper>
                            <div className='text'>{t('contractPage.contractNumberText')} {contractData?.contractNumber}</div>
                            <Badge badgeType={badgeType}>
                                {badgeText}
                            </Badge>
                        </ContractTitleAndStatusWrapper>
                        <ContractDetailWidget title={t('contractPage.contractDetail.contractLocationInfo')}>
                            <DetailSubItem subTitle={t('contractPage.contractDetail.site')} infoText={contractData?.siteCode || ''} />
                            <DetailSubItem subTitle={t('contractPage.contractDetail.address')} infoText={contractData?.address || ''} />
                        </ContractDetailWidget>
                        <ContractDetailWidget title={t('contractPage.contractDetail.contractInfo')}>
                            <DetailSubItem subTitle={t('contractPage.contractDetail.contractNumber')} infoText={contractData?.contractNumber || ''} />
                            <DetailSubItem subTitle={t('contractPage.contractDetail.contractStartDate')} infoText={contractData?.startDate || ''} />
                            <DetailSubItem subTitle={t('contractPage.contractDetail.contractExpiratioDate')} infoText={contractData?.endDate || ''} />
                            <RemainingTimeInfoWrapper style={{ paddingTop: '0.5rem' }}>
                                <ProgressBar
                                    scopeMaximumValue={progressBarHasError ? 100 : contractData?.contractDuration || 0}
                                    currentValue={progressBarHasError ? 100 : ((contractData?.contractDuration || 0) - (contractData?.contractRemaining || 0)) || 0}
                                    hasError={progressBarHasError}
                                />
                                <RemainingTimeInfoTextWrapper>
                                    {
                                        progressBarHasError
                                            ? t('contractPage.invalidContractInfo')
                                            : <>
                                                <div className='black-text'>
                                                    {contractData?.contractRemaining || 0} {t('contractPage.days')}
                                                </div>
                                                &nbsp;
                                                <div className='gray-text'>
                                                    {t('contractPage.remainsFromContracrDays')}
                                                </div>
                                            </>
                                    }
                                </RemainingTimeInfoTextWrapper>
                            </RemainingTimeInfoWrapper>
                        </ContractDetailWidget>
                        <ContractDetailWidget title={t('contractPage.contractDetail.paymentInfo')}>
                            <DetailSubItem subTitle={t('contractPage.contractDetail.contractAmount')} infoText={contractData?.contractAmount || ''} />
                            <DetailSubItem subTitle={t('contractPage.contractDetail.typeOfPayment')} infoText={contractData?.paymentType || ''} />
                        </ContractDetailWidget>
                        {
                            contractData?.paymentHistory.length
                                ? <ContractPaymentHistoryWrapper>
                                    <div className='title'>
                                        {t('contractPage.contractDetail.paymentHistoryList')}
                                    </div>
                                    {
                                        contractData?.paymentHistory.map((payment) => (
                                            <Fragment key={payment.id}>
                                                <ContractPaymentHistoryWidget
                                                    paymentAmount={payment.paymentAmount}
                                                    startDate={payment.startDate}
                                                    endDate={payment.endDate}
                                                    type={payment.type}
                                                />
                                            </Fragment>
                                        ))
                                    }
                                </ContractPaymentHistoryWrapper>
                                : null
                        }
                    </ContractDetailPageWrapper>
            }
        </PagesContainer>
    )
}

export default ContractDetail