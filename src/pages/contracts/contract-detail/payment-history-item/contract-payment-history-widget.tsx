import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ContractPaymentHistoryWidgetWrapper } from '../../../../styles/pages/contracts'
import DetailSubItem from '../detail-sub-item'
import Badge from '../../../../components/badge'
import CONTRACT_PAYMENT_HISTORY_TYPE from '../../../../enums/contract-payment-history-type'
import BADGE_TYPE from '../../../../enums/badge-type'
import DatePeriodWithArrow from './date-period-with-arrow'
import { ContractPaymentHistoryModel } from '../../../../models/pages/contract'


const ContractPaymentHistoryWidget: FC<Omit<ContractPaymentHistoryModel, 'id'>> = ({ paymentAmount, startDate, endDate, type }) => {
    const { t } = useTranslation()
    const badgeInfo: { badgeType: BADGE_TYPE, text: string } = useMemo(() => {
        if (type === CONTRACT_PAYMENT_HISTORY_TYPE.SUCCESS) return {
            badgeType: BADGE_TYPE.GREEN,
            text: t('contractPage.contractDetail.paymentsHistorySuccessBadge')
        }
        if (type === CONTRACT_PAYMENT_HISTORY_TYPE.PENDING) return {
            badgeType: BADGE_TYPE.ORANGE,
            text: t('contractPage.contractDetail.paymentsHistoryPendingBadge')
        }
        return {
            badgeType: BADGE_TYPE.RED,
            text: t('contractPage.contractDetail.paymentsHistoryErrorBadge')
        }
    }, [type, t])

    return (
        <ContractPaymentHistoryWidgetWrapper>
            <div className='infoBox'>
                <DetailSubItem subTitle={t('contractPage.contractDetail.PaymentAmount')} infoText={paymentAmount} />
                <DatePeriodWithArrow paymentPeriodStartDate={startDate} paymentPeriodEndDate={endDate} />
            </div>
            <div className='status'>
                <Badge badgeType={badgeInfo.badgeType}>
                    {badgeInfo.text}
                </Badge>
            </div>
        </ContractPaymentHistoryWidgetWrapper>
    )
}

export default ContractPaymentHistoryWidget