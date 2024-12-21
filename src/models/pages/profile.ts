import PROFILE_TYPE from "../../enums/profile-type"

export interface BaseProfileModel {
    name: string
    phoneNumber: string
    type: PROFILE_TYPE
    bankAccountNumber: string
    shabaCode: string
    bankName: string
    BirthDate: string
    NationalCode: string
}

export interface LegalProfileModel extends BaseProfileModel {
    EconomicCode: string
}