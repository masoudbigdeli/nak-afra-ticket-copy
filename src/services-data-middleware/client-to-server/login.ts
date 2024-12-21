import { LoginOtpForm, LoginPhoneForm } from '../../models/pages/login'

export const loginPhoneFormC2SMiddleware = (form: LoginPhoneForm) => {
    return {
        mobile: form.mobile
    }
}

export const loginOtpFormC2SMiddleware = (form: LoginOtpForm) => {
    return {
        mobile: form.mobile,
        token: form.code
    }
}        