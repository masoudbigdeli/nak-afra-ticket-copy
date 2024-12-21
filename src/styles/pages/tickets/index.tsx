import styled from "@emotion/styled";
import AppThemeModel from "../../../models/theme-model";

const TicketsPageWrapper = styled.div({
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
    alignItems: 'center',
    position: 'relative',
    paddingBottom: '4rem',
})

export default TicketsPageWrapper

export const TicketsPageTabsWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
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

interface TicketsGroupWrapperProps {
    siblingContainerHeight: number | undefined
}

export const TicketsGroupWrapper = styled.div<TicketsGroupWrapperProps>(({ siblingContainerHeight }) => {
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
        '&::-webkit-scrollbar': {
            width: '0.2rem',
            backgroundColor: 'transparent',
            height: '95%',
            borderRadius: '0.5rem',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
            height: '95%',
            borderRadius: '0.5rem',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'grey',
            borderRadius: '0.5rem',
        },
    }
})

export const TicketWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
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
        padding: theme.spacing.spacingM,
        border: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
        borderRadius: theme.spacing.spacingXs,
        gap: theme.spacing.spacingXs
    }
})

export const TicketIdAndBadgeWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    minWidth: '100%',
    height: 'max-content',
    maxHeight: 'max-content',
    minHeight: 'max-content',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const TicketInfoTextsWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
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
        gap: theme.spacing.spacingXxs,
        '> .title-text': {
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900],
            lineHeight: theme.spacing.spacingXl,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
    }
})

export const TicketInfoTextsDateAndTimeWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        gap: theme.spacing.spacingXxs,
        fontSize: '0.625rem',
        fontWeight: 400,
        color: theme.color.ordinalColors.neural[500]
    }
})

export const TicketIconAndIdWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        maxWidth: 'max-content',
        minWidth: 'max-content',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        gap: theme.spacing.spacingXxs,
        '> .ticket-id': {
            fontSize: '0.875rem',
            fontWeight: 400,
            color: theme.color.ordinalColors.neural[400],
            lineHeight: theme.spacing.spacingXl,
        }
    }
})

export const TicketsButtonContainer = styled.div({

    boxSizing: 'border-box',
    width: 'max-content',
    minWidth: 'max-content',
    maxWidth: 'max-content',
    height: 'max-content',
    minHeight: 'max-content',
    maxHeight: 'max-content',
    position: 'absolute',
    right: 20,
    bottom: '5.25rem'
})

export const TicketDetailDateAndTimeWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        maxWidth: 'max-content',
        minWidth: 'max-content',
        height: '100%',
        minHeight: '100%',
        maxHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBlock: 'auto',
        gap: theme.spacing.spacingXs,
        fontSize: '0.75rem',
        fontWeight: 600,
        color: theme.color.ordinalColors.neural[500],
    }
})


export const TicketDateTimeAndBadgeWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
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
        alignItems: 'center',
        paddingBottom: theme.spacing.spacingM,
        borderBottom: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`
    }
})

export const TicketPhotosWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: theme.spacing.spacingXs,
        paddingBottom: theme.spacing.spacingM,
        borderBottom: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
        '> .text': {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: theme.spacing.spacingM,
            color: theme.color.ordinalColors.neural[500]
        }
    }
})

export const TicketImagesWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        justifyContent: 'flex-start',
        gap: theme.spacing.spacingXxs
    }
})

interface ImageItemWrapperProps {
    parentWidth: number
    countOfColumns: number
}

export const TicketImageItemWrapper = styled.div<ImageItemWrapperProps & { theme?: AppThemeModel }>(({ theme, parentWidth, countOfColumns }) => {
    return {
        boxSizing: 'border-box',
        width: `calc((${parentWidth}px - ((${countOfColumns} - 1) * ${theme.spacing.spacingXs}))/${countOfColumns})`,
        height: `calc((${parentWidth}px - ((${countOfColumns} - 1) * ${theme.spacing.spacingXs}))/${countOfColumns})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.spacing.spacingXs,
        border: `0.0625rem solid ${theme.color.ordinalColors.neural[400]}`,
        position: 'relative',
        '> img': {
            boxSizing: 'border-box',
            width: '100%',
            minWidth: '100%',
            maxWidth: '100%',
            height: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            borderRadius: '0.4375rem',
        }
    }
})

export const TicketExplanationWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
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

export const TicketSupportResponseWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
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
        padding: theme.spacing.spacingM,
        borderRadius: theme.radious.radiousXs,
        border: `solid 0.0625rem ${theme.color.ordinalColors.afra[500]}`,
        backgroundColor: theme.color.ordinalColors.afra[50]
    }
})

export const TicketSupportResponseHeaderWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
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
        gap: theme.spacing.spacingXs,
        paddingBottom: theme.spacing.spacingM,
        borderBottom: `solid 0.0625rem ${theme.color.ordinalColors.afra[100]}`,


    }
})

export const TicketSupportResponseHeaderTexts = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
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
            fontSize: '0.875rem',
            fontWeight: 600,
            color: theme.color.ordinalColors.neural[900],
            lineHeight: theme.spacing.spacingXl
        },
        '> .bottom-text': {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.color.ordinalColors.neural[700],
            lineHeight: theme.spacing.spacingL
        }
    }
})


export const TicketSupportResponseTextWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        textAlign: 'right',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: theme.color.ordinalColors.neural[900],
        lineHeight: theme.spacing.spacingL

    }
})


export const TicketUserMessageWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
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
        padding: theme.spacing.spacingM,
        borderRadius: theme.radious.radiousXs,
        border: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
    }
})

export const TicketUserMessageDateAndTimeWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        height: 'max-content',
        minHeight: 'max-content',
        maxHeight: 'max-content',
        display: 'flex',
        gap: theme.spacing.spacingXs,
        fontSize: '0.75rem',
        fontWeight: 600,
        color: theme.color.ordinalColors.neural[500],
        lineHeight: theme.spacing.spacingL,
        paddingBottom: theme.spacing.spacingM,
        borderBottom: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,

    }
})
