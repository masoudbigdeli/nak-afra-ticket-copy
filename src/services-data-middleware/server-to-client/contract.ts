import CONTRACT_PAYMENT_HISTORY_TYPE from '../../enums/contract-payment-history-type'
import CONTRACT_STATUS_TYPE from '../../enums/contract-status-type'
import { ServerContractDetailModel, ServerContractModel } from '../../models/api-reponse/contract'
import { ContractEntityDetailModel, ContractEntityModel } from '../../models/pages/contract'
import calculateTimeDifference from '../../utils/calculate-time-difference'

export const contractListDataS2CMiddleware = (contracts?: Array<ServerContractModel>): Array<ContractEntityModel> => {
    if (!contracts) return []
    return contracts.map((contract: ServerContractModel) => {
        const contractRemaining: number = calculateTimeDifference(contract?.end_utc || '', new Date().toUTCString(), 86400000)
        const contractDuration: number = calculateTimeDifference(contract?.end_utc || '', contract?.start_utc || '', 86400000)
        return {
            id: contract?.id || null,
            contractNumber: contract?.contract_number || '',
            siteCode: contract?.code || '',
            status: contract?.status === '0' ? CONTRACT_STATUS_TYPE.EXPIRED : CONTRACT_STATUS_TYPE.ACTIVE,
            contractDuration: isNaN(contractDuration) ? NaN : contractDuration > 0 ? contractDuration : 0,
            contractRemaining: isNaN(contractRemaining) ? NaN : contractRemaining > 0 ? contractRemaining : 0,
        }
    })
}

export const contractDetailDataS2CMiddleware = (contract?: ServerContractDetailModel): ContractEntityDetailModel => {
    const contractRemaining: number = calculateTimeDifference(contract?.end_utc || '', new Date().toUTCString(), 86400000)
    const contractDuration: number = calculateTimeDifference(contract?.end_utc || '', contract?.start_utc || '', 86400000)
    return {
        id: contract?.id || null,
        contractNumber: contract?.contract_number || '',
        siteCode: contract?.code || '',
        status: contract?.status === '0' ? CONTRACT_STATUS_TYPE.EXPIRED : CONTRACT_STATUS_TYPE.ACTIVE,
        contractDuration: isNaN(contractDuration) ? NaN : contractDuration > 0 ? contractDuration : 0,
        contractRemaining: isNaN(contractRemaining) ? NaN : contractRemaining > 0 ? contractRemaining : 0,
        address: contract?.address || '',
        startDate: contract?.start || '',
        endDate: contract?.end || '',
        contractAmount: `${contract?.contract_price.toLocaleString()} تومان` || '',
        paymentType: contract?.type_payment_contract || '',
        paymentHistory: contract?.payments?.map((payment) => {
            return {
                id: crypto.randomUUID(),
                paymentAmount: `${Number(payment?.price).toLocaleString()} تومان` || '',
                type: obtainContractPaymentHistoryStatus(payment?.status || ''),
                startDate: payment?.validate_from || '',
                endDate: payment?.validate_to,
            };
        }) || [],
    }
}

const obtainContractPaymentHistoryStatus = (paymentStatus: string): CONTRACT_PAYMENT_HISTORY_TYPE => {
    if (paymentStatus === '25') return CONTRACT_PAYMENT_HISTORY_TYPE.SUCCESS
    const pendingValues = ['2', '3', '7', '10', '21', '22', '23', '24']
    if (pendingValues.includes(paymentStatus)) return CONTRACT_PAYMENT_HISTORY_TYPE.PENDING
    return CONTRACT_PAYMENT_HISTORY_TYPE.ERROR
}
