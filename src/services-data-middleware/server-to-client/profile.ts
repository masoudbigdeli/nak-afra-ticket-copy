import PROFILE_TYPE from "../../enums/profile-type"
import Profile from "../../models/api-reponse/profile"
import { BaseProfileModel, LegalProfileModel } from "../../models/pages/profile"

export const personalProfileDataS2CMiddleware = (user?: Profile): BaseProfileModel => {
    return {
        name: (user?.first_name || '') + `${user?.last_name ? ` ${user.last_name}` : ''}`,
        phoneNumber: user?.mobile || '',
        type: PROFILE_TYPE.PERSONAL,
        bankAccountNumber: user?.bank_account || '',
        shabaCode: user?.sheba_number || '',
        bankName: user?.bank_name || '',
        NationalCode: user?.national_code || '',
        BirthDate: user?.birthday || '',
    }
}

export const legalProfileDataS2CMiddleware = (user?: Profile): LegalProfileModel => {
    return {
        name: (user?.first_name || '') + `${user?.last_name ? ` ${user.last_name}` : ''}`,
        phoneNumber: user?.mobile || '',
        type: PROFILE_TYPE.LEGAL,
        bankAccountNumber: user?.bank_account || '',
        shabaCode: user?.sheba_number || '',
        bankName: user?.bank_name || '',
        NationalCode: user?.national_code || '',
        BirthDate: user?.birthday || '',
        EconomicCode: user?.economic_code || ''
    }
}