import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'
import LOGIN_PAGE_VIEW_STATUS from '../../../enums/login-page-view-status'

const LoginWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        minWidth: '100%',
        minHeight: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: theme.spacing.spacingL,
        paddingTop: '6rem',
        overflowY: 'auto',
        position: 'relative'
    }
})

export default LoginWrapper

export const AbsoluteHeaderBackButton = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        paddingInline: theme.spacing.spacingL,
        paddingBlock: theme.spacing.spacingM,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottom: `0.0625rem solid ${theme.color.ordinalColors.neural[200]}`
    }
})

export const LoginLogo = styled.img({
    boxSizing: 'border-box',
    width: '5.125rem',
    maxWidth: '5.125rem',
    height: '5.5625rem',
    maxHeight: '5.5625rem',
    objectFit: 'contain',
    border: 'none',
    margin: 0,
    padding: 0,
    marginBottom: '2.5rem'
})

interface LoginTitleProps {
    viewStatus: LOGIN_PAGE_VIEW_STATUS
}

export const LoginTitle = styled.div<LoginTitleProps & { theme?: AppThemeModel }>(({ theme, viewStatus }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: 700,
        color: theme.color.ordinalColors.neural[900],
        marginBottom: viewStatus === LOGIN_PAGE_VIEW_STATUS.CELL_PHONE ? '2.5rem' : '0.75rem'
    }
})

export const HintText = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'right',
        marginBottom: '1rem',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: theme.color.ordinalColors.neural[700]
    }
})

export const EditPhoneNumberWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '2.25rem',
        '> .cellphone-number': {
            boxSizing: 'border-box',
            width: 'max-content',
            height: 'max-content',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900]
        },
        '> .edit-number': {
            boxSizing: 'border-box',
            width: 'max-content',
            height: 'max-content',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.afra[500],
            cursor: 'pointer'
        }
    }
})


export const FormSectionWrapper = styled.div( {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: 'calc(100% - 14.0625rem)',
        minHeight: 'calc(100% - 14.0625rem)',
        maxHeight: 'calc(100% - 14.0625rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&.focus': {
            justifyContent: 'flex-start'
        }
})

export const FormSectionInputWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    height: 'max-content',
    minHeight: 'max-content',
    maxHeight: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '3rem'
})

export const OtpCodeResendWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.75rem',
        '> .title': {
            boxSizing: 'border-box',
            width: 'max-content',
            height: 'max-content',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[500],
        },
        '> .counter-and-text': {
            boxSizing: 'border-box',
            width: 'max-content',
            height: 'max-content',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.afra[500],
            cursor: 'pointer',
            '&.not-allowed': {
                cursor: 'not-allowed',
            }
        }
    }
})