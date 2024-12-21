import styled from '@emotion/styled'
import AppThemeModel from '../../../../models/theme-model'

interface TicketHomeWidgetWrapperProps {
    loadingOrError?: boolean
    dataLength?: number
}

const TicketHomeWidgetWrapper = styled.div<TicketHomeWidgetWrapperProps & { theme?: AppThemeModel }>(({ theme, loadingOrError, dataLength }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        height: 'max-content',
        paddingTop: theme.spacing.spacingL,
        marginBottom: theme.spacing.spacingL,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: theme.spacing.spacingXs,
        paddingLeft: loadingOrError ? theme.spacing.spacingL : '0rem',
        '> .header': {
            boxSizing: 'border-box',
            width: '100%',
            minWidth: '100',
            height: 'max-content',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: !loadingOrError ? theme.spacing.spacingL : '0rem',
            '> span': {
                boxSizing: 'border-box',
                width: 'max-content',
                height: 'max-content',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: theme.color.ordinalColors.neural[900],
                textAlign: 'right',
                textTransform: 'capitalize',
            }
        },
        '> svg': {
            width: '5rem',
            height: '5rem',
        },
        '> .list': {
            boxSizing: 'border-box',
            width: '100%',
            maxWidth: '100%',
            height: 'max-content',
            overflowX: 'auto',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'nowrap',
            gap: theme.spacing.spacingXs,
            '&::-webkit-scrollbar': {
                height: '0.2rem',
                backgroundColor: 'transparent',
                width: '95%',
                borderRadius: '0.5rem',
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
                width: '95%',
                borderRadius: '0.5rem',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'grey',
                borderRadius: '0.5rem',
            },
            '> .item-wrapper': {
                boxSizing: 'border-box',
                width: (dataLength && dataLength === 1) ? `calc(100% - ${theme.spacing.spacingL})` : '70%',
                minWidth: (dataLength && dataLength === 1) ? `calc(100% - ${theme.spacing.spacingL})` : '70%',
                maxWidth: (dataLength && dataLength === 1) ? `calc(100% - ${theme.spacing.spacingL})` : '70%',
                height: 'max-content',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ':last-of-type': {
                    marginLeft: (dataLength && dataLength === 1) ? '0rem' : theme.spacing.spacingXl,
                }
            }
        }
    }
})

export default TicketHomeWidgetWrapper