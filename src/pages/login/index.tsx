import { FC, useCallback, useRef, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import Input from '../../components/form/elements/input'
import Form from '../../components/form'
import Label from '../../components/form/label'
import Error from '../../components/form/error'
import Resetter from '../../components/form/resetter'
import Button from '../../components/button'
import LOGIN_PAGE_VIEW_STATUS from '../../enums/login-page-view-status'
import Icon from '../../components/icons/icon'
import { LoginOtpForm, LoginPhoneForm } from '../../models/pages/login'
import OtpInput from '../../components/form/elements/otp-input'
import useCrudService from '../../services/crud-service'
import apiUri from '../../configs/api-uri'
import toaster from '../../components/toaster'
import useStore from '../../state-management/store'
import StoreModel from '../../models/store-model'
import digitClock from '../../utils/digit-clock'
import { loginOtpFormC2SMiddleware, loginPhoneFormC2SMiddleware } from '../../services-data-middleware/client-to-server/login'
import LoginWrapper, {
    AbsoluteHeaderBackButton,
    EditPhoneNumberWrapper,
    FormSectionInputWrapper,
    FormSectionWrapper,
    HintText,
    LoginLogo,
    LoginTitle,
    OtpCodeResendWrapper
} from '../../styles/pages/login'
import Profile from '../../models/api-reponse/profile'
import { logintDataS2CMiddleware } from '../../services-data-middleware/server-to-client/login'

const formDefaultValue: LoginOtpForm = { mobile: '', code: '' }

const Login: FC = () => {
    const { t } = useTranslation()
    const { createEntity, getEntity } = useCrudService()

    const setToken = useStore((store: StoreModel) => store.setToken)
    const setUser = useStore((store: StoreModel) => store.setUser)

    const [viewStatus, setViewStatus] = useState<LOGIN_PAGE_VIEW_STATUS>(LOGIN_PAGE_VIEW_STATUS.CELL_PHONE)
    const [remainingTime, setRemainingTime] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)

    const backToCellPhoneViewState = useCallback((reactHookFormObject: UseFormReturn<LoginOtpForm>) => {
        setViewStatus(LOGIN_PAGE_VIEW_STATUS.CELL_PHONE)
        reactHookFormObject.setValue('mobile', '')
    }, [setViewStatus])

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const counter = useCallback((ttl: number) => {
        if (!ttl) {
            setRemainingTime(0)
            return
        }
        setRemainingTime(ttl)
        timeoutRef.current = setTimeout(() => {
            counter(ttl - 1)
        }, 1000)
    }, [remainingTime, setRemainingTime, timeoutRef])

    const getOtp = useCallback(async (form: LoginPhoneForm) => {
        setLoading(true)
        try {
            const res = await createEntity(
                apiUri.loginOtp.uri(),
                apiUri.loginOtp.permissions,
                loginPhoneFormC2SMiddleware(form)
            )
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            const ttl: number = Math.floor(logintDataS2CMiddleware(res.data as any).ttl)
            counter(ttl > 0 ? ttl : 60)
            setViewStatus(LOGIN_PAGE_VIEW_STATUS.OTP)
        } catch (error) {
            toaster.ERROR(t('loginPage.loginFailed'))
        } finally {
            setLoading(false)
        }
    }, [t, createEntity, counter, setLoading, setViewStatus])

    const resendOtp = useCallback(async (reactHookFormObject: UseFormReturn<LoginOtpForm>) => {
        if (remainingTime) return
        setLoading(true)
        try {
            const res = await createEntity(
                apiUri.loginOtp.uri(),
                apiUri.loginOtp.permissions,
                loginPhoneFormC2SMiddleware(reactHookFormObject.getValues())
            )
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            const ttl: number = Math.floor(logintDataS2CMiddleware(res.data as any).ttl)
            counter(ttl > 0 ? ttl : 60)
            toaster.INFO(t('loginPage.otpSendAgainMsg'))
        } catch (error) {
            toaster.ERROR(t('loginPage.loginFailed'))
        } finally {
            setLoading(false)
        }
    }, [t, remainingTime, createEntity, counter, setLoading])

    const checkOtp = useCallback(async (form: LoginOtpForm) => {
        setLoading(true)
        try {
            const tokenRes = await createEntity(
                apiUri.loginOtpCheck.uri(),
                apiUri.loginOtpCheck.permissions,
                loginOtpFormC2SMiddleware(form)
            )
            const profileRes = await getEntity(
                apiUri.getProfile.uri(),
                apiUri.getProfile.permissions,
                { headers: { 'authorization': `Bearer ${(tokenRes.data as any).data.jwt}` } }
            )
            setToken((tokenRes.data as any).data.jwt)
            setUser(profileRes.data as Profile)
        } catch (error) {
            toaster.ERROR(t('loginPage.loginFailed'))
        } finally {
            setLoading(false)
        }
    }, [t, createEntity, setLoading, getEntity, setToken, setUser])

    const requestSwitcher = useCallback((form: LoginOtpForm) => {
        if (viewStatus === LOGIN_PAGE_VIEW_STATUS.CELL_PHONE) {
            getOtp(form)
            return
        }
        if (viewStatus === LOGIN_PAGE_VIEW_STATUS.OTP) {
            checkOtp(form)
            return
        }
    }, [viewStatus, getOtp, checkOtp])

    const formCellphoneStateValidation = yup.object({
        mobile: yup
            .string()
            .required(t('loginPage.enterMobile'))
            .test('', t('loginPage.cellphoneNumberFormatIsNotValid'), (value: any) => {
                const regex = new RegExp('^09\\d{9}$')
                return regex.test(value)
            }),
    }).required()

    const formOtpStateValidation = yup.object({
        mobile: yup
            .string()
            .required(t('loginPage.enterMobile'))
            .test('mobileTest', t('loginPage.cellphoneNumberFormatIsNotValid'), (value: any) => {
                const regex = new RegExp('^09\\d{9}$')
                return regex.test(value)
            }),
        code: yup
            .string()
            .required(t('loginPage.enterOtpCpde')),
    }).required()

    return (
        <Form<LoginOtpForm>
            formType='CREATE'
            defaultValue={formDefaultValue}
            validation={viewStatus === LOGIN_PAGE_VIEW_STATUS.CELL_PHONE ? formCellphoneStateValidation : formOtpStateValidation}
            fieldsRenderer={(data: { reactHookFormObject: UseFormReturn<LoginOtpForm>, defaultValue: LoginOtpForm }) => {
                return (
                    <LoginWrapper>
                        {
                            viewStatus === LOGIN_PAGE_VIEW_STATUS.OTP
                                ? <AbsoluteHeaderBackButton>
                                    <Icon
                                        iconName='backArrow'
                                        size='1.5'
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => backToCellPhoneViewState(data.reactHookFormObject)}
                                    />
                                </AbsoluteHeaderBackButton>
                                : null
                        }
                        <LoginLogo src='/img/logo.png' alt='logo' />
                        <LoginTitle viewStatus={viewStatus}>
                            {t(`loginPage.${viewStatus === LOGIN_PAGE_VIEW_STATUS.CELL_PHONE ? 'logInToAfraSystem' : 'enterCodeWhichWasSent'}`)}
                        </LoginTitle>
                        {
                            viewStatus === LOGIN_PAGE_VIEW_STATUS.OTP
                                ? <EditPhoneNumberWrapper>
                                    <span className='cellphone-number'>
                                        {data.reactHookFormObject.watch('mobile')}
                                    </span>
                                    <span
                                        className='edit-number'
                                        onClick={() => backToCellPhoneViewState(data.reactHookFormObject)}
                                    >
                                        {t('loginPage.editPhoneNumber')}
                                    </span>
                                </EditPhoneNumberWrapper>
                                : <HintText>{t('loginPage.enterPhoneNumberToLogin')}</HintText>
                        }
                        <FormSectionWrapper>
                            {
                                viewStatus === LOGIN_PAGE_VIEW_STATUS.CELL_PHONE
                                    ? <Input<LoginOtpForm>
                                        name='mobile'
                                        data={data}
                                        dir='ltr'
                                        size='l'
                                        label={Label}
                                        labelText={t('loginPage.mobileNumber')}
                                        error={Error}
                                        resetter={Resetter}
                                        type='number'
                                    />
                                    : <FormSectionInputWrapper >
                                        <OtpInput<LoginOtpForm>
                                            name='code'
                                            data={data}
                                            countOfDigit={6}
                                            error={Error}
                                            onComplete={() => {
                                                data.reactHookFormObject.handleSubmit(
                                                    (formData: LoginOtpForm) => requestSwitcher(formData)
                                                )()
                                            }}
                                        />
                                        <OtpCodeResendWrapper>
                                            <span className='title'>{t('loginPage.didNotGetOtpCode')}</span>
                                            <span
                                                className={`counter-and-text ${remainingTime ? 'not-allowed' : ''}`}
                                                onClick={() => resendOtp(data.reactHookFormObject)}
                                            >
                                                {remainingTime ? digitClock(remainingTime) + ' ' : ''}
                                                <span>
                                                    {t(`loginPage.${remainingTime ? 'tillSendingOtpAgain' : 'sendingOtpAgain'}`)}
                                                </span>
                                            </span>
                                        </OtpCodeResendWrapper>
                                    </FormSectionInputWrapper>
                            }
                            <Button
                                width='100%'
                                type='FILLED'
                                size='L'
                                disabled={!data.reactHookFormObject.formState.isValid}
                                loading={loading}
                                hasIcon={false}
                                title={t(`loginPage.${viewStatus === LOGIN_PAGE_VIEW_STATUS.CELL_PHONE ? 'getOtpCode' : 'confirm'}`)}
                                onClick={() => {
                                    data.reactHookFormObject.handleSubmit(
                                        (formData: LoginOtpForm) => requestSwitcher(formData)
                                    )()
                                }}
                            />
                        </FormSectionWrapper>
                    </LoginWrapper>
                )
            }}
        />
    )
}

export default Login