export interface ServerContractModel {
  id: number
  status: '0' | '1' 
  code: string
  start: string
  start_utc: string
  end_utc: string
  end: string
  contract_number: string
}

export interface ServerContractDetailPaymentModel {
  price: string
  validate_from: string
  validate_to: string
  validate_from_utc: string
  validate_to_utc: string
  status: string
}

export interface ServerContractDetailModel {
  id: number
  status: '0' | '1'
  code: string
  start: string
  end: string
  start_utc: string
  end_utc: string
  contract_number: string
  address: string
  contract_price: number
  type_payment_contract: string
  payments: Array<ServerContractDetailPaymentModel>
}