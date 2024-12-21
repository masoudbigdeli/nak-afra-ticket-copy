import PROFILE_TYPE from '../../enums/profile-type'

interface Profile {
    id: number
    type: PROFILE_TYPE
    first_name: string
    last_name: string | null
    mobile: string
    national_code: string
    birthday: string
    bank_account: string
    sheba_number: string
    bank_name: string
    economic_code: string | null
}

export default Profile