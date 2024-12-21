import styled from '@emotion/styled'
import AppThemeModel from '../../../../models/theme-model'
import { CSSProperties } from 'react'

interface AccessHomeWidgetWrapper {
    style?: CSSProperties
}

const AccessHomeWidgetWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme, style }) => {
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
        paddingLeft: theme.spacing.spacingL,
        ...style,
        '> .header': {
            boxSizing: 'border-box',
            width: '100%',
            minWidth: '100',
            height: 'max-content',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '0rem',
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
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'nowrap',
            gap: theme.spacing.spacingS,
        }
    }
})

export default AccessHomeWidgetWrapper