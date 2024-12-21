export interface LoginPhoneForm {
    mobile: string
}

export interface LoginOtpForm extends LoginPhoneForm { 
    code: string
}