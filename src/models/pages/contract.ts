import CONTRACT_PAYMENT_HISTORY_TYPE from '../../enums/contract-payment-history-type'
import CONTRACT_STATUS_TYPE from '../../enums/contract-status-type'

export interface ContractEntityModel {
    id: number | null
    contractNumber: string
    siteCode: string
    status: CONTRACT_STATUS_TYPE
    contractDuration: number
    contractRemaining: number
}

export interface ContractEntityDetailModel extends ContractEntityModel {
    address: string
    startDate: string
    endDate: string
    contractAmount: string
    paymentType: string
    paymentHistory: Array<ContractPaymentHistoryModel>
}

export interface ContractPaymentHistoryModel {
    id: string
    paymentAmount: string
    type: CONTRACT_PAYMENT_HISTORY_TYPE
    startDate: string
    endDate: string
}