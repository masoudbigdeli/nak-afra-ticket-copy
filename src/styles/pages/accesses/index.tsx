import styled from "@emotion/styled";
import AppThemeModel from "../../../models/theme-model";
import ACCESS_DATE_TIME_TYPE from "../../../enums/access-data-time-type";

const AccessesPageWrapper = styled.div({

        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: '100%',
        maxHeight: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
})

export default AccessesPageWrapper

interface AccesesGroupWrapperProps {
    siblingContainerHeight: number | undefined
}

export const AccesesGroupWrapper = styled.div<AccesesGroupWrapperProps>(({siblingContainerHeight }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: `calc(100% - ${siblingContainerHeight || 0})`,
        minHeight: `calc(100% - ${siblingContainerHeight || 0})`,
        maxHeight: `calc(100% - ${siblingContainerHeight || 0})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '1.25rem',
        padding: '1.25rem',
        paddingTop: '0rem',
        overflow: 'auto',
    }
})

export const AccessesPageTabsWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing.spacingL
    }
})

export const AccessWidgetWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing.spacingM,
        borderRadius: theme.spacing.spacingXs,
        border: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`
    }
})

export const AccessWidgetTopWrapper = styled.div({
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
})
interface AccessWidgetTopContentWrapperProps {
    extended: boolean
}
export const AccessWidgetTopContentWrapper = styled.div<AccessWidgetTopContentWrapperProps & { theme?: AppThemeModel }>(({ theme, extended }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        maxWidth: 'max-content',
        minWidth: 'max-content',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: theme.spacing.spacingXs,
        opacity: extended ? 0 : 1,
        visibility: extended ? 'hidden' : 'visible',
        transition: extended
            ? 'opacity 0.15s ease, visibility 0.15s ease'
            : 'opacity 1s ease, visibility 1s ease',
        '> .name': {
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900]
        },
        '> .date-time': {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.color.ordinalColors.neural[500]
        }
    }
})
interface AccessWidgetClosedInfoWrapperProps {
    type: ACCESS_DATE_TIME_TYPE
}

export const AccessWidgetClosedInfoWrapper = styled.div<AccessWidgetClosedInfoWrapperProps & { theme?: AppThemeModel }>(({ theme, type }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        minWIdth: 'max-content',
        maxWidth: 'max-content',
        paddingInline: theme.spacing.spacingS,
        paddingBlock: '0.375rem',
        backgroundColor: type === ACCESS_DATE_TIME_TYPE.ENTER ? theme.color.ordinalColors.afra[50] : theme.color.ordinalColors.orange[0],
        color: type === ACCESS_DATE_TIME_TYPE.ENTER ? theme.color.ordinalColors.afra[500] : theme.color.ordinalColors.orange[600],
        fontSize: '0.75rem',
        fontWeight: 600,
        lineHeight: theme.spacing.spacingL,
        borderRadius: theme.radious.radiousXxs
    }
})

interface AccessWidgetTBottomWrapperProps {
    extended: boolean
}
export const AccessWidgetTBottomWrapper = styled.div<AccessWidgetTBottomWrapperProps>(({ extended }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        maxHeight: extended ? '500px' : '0',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        transition: 'max-height 0.4s ease',
    };
});


export const AccessWidgetTBottomHeaderWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: theme.spacing.spacingXxs,
        paddingBottom: theme.spacing.spacingXs,
        borderBottom: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
        '> .top-text': {
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900],
            lineHeight: theme.spacing.spacingXl
        },
        '> .bottom-text': {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.color.ordinalColors.neural[500],
            lineHeight: theme.spacing.spacingL

        }
    }
})

export const AccessWidgetTBottomCardsWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: theme.spacing.spacingM,
    }
})



export const AccessWidgetTBottomDateWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: theme.spacing.spacingS,
        paddingBlock: theme.spacing.spacingXs,
        borderBottom: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
    }
})

export const AccessWidgetTBottomDateTextsWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: theme.spacing.spacingXxs,
        '> .top-text': {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.color.ordinalColors.neural[700],
            lineHeight: theme.spacing.spacingL
        },
        '> .bottom-text': {
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900],
            lineHeight: theme.spacing.spacingXl
        }
    }
})

export const AccessWidgetTBottomTimesAndPersonsWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing.spacingM,
        gap: theme.spacing.spacingM,
        borderBottom: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
    }
})

interface TimesAndPersonsWrapperProp {
    hasLeftBorder: boolean
}

export const TimesAndPersonsWrapper = styled.div<TimesAndPersonsWrapperProp & { theme?: AppThemeModel }>(({ theme, hasLeftBorder }) => {
    return {
        boxSizing: 'border-box',
        width: `calc((100% - 3*${theme.spacing.spacingM})/3)`,
        maxWidth: `calc((100% - 3*${theme.spacing.spacingM})/3)`,
        minWidth: `calc((100% - 3*${theme.spacing.spacingM})/3)`,
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '0.75rem',
        borderLeft: hasLeftBorder ? `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}}` : 'none',
    }
})

export const TimesAndPersonsTextsWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        maxWidth: 'max-content',
        minWidth: 'max-content',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '.item-name': {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.color.ordinalColors.neural[700],
            lineHeight: theme.spacing.spacingL
        },
        '.item-value': {
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900],
            lineHeight: theme.spacing.spacingXl,
        }
    }
})

export const AccessWidgetTBottomExplanationWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: theme.spacing.spacingS,
    }
})

export const AccessWidgetTBottomExplanationTextsWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '> .top-text': {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.color.ordinalColors.neural[700],
            lineHeight: theme.spacing.spacingL
        },
        '> .bottom-text': {
            fontSize: '0.75rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900],
            lineHeight: theme.spacing.spacingXl
        }
    }
})

