import styled from '@emotion/styled'
import AppThemeModel from '../../../../models/theme-model'
import { headerHeight } from '../../../general/style-general-constants'

const TopNavigationWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: headerHeight,
        minHeight: headerHeight,
        maxHeight: headerHeight,
        paddingBlock: theme.spacing.spacingM,
        paddingInline: theme.spacing.spacingL,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderBottom: `0.0625rem solid ${theme.color.ordinalColors.neural[200]}`,
        '> .item': {
            boxSizing: 'border-box',
            width: 'max-content',
            height: 'max-content',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&.title': {
                fontSize: '0.875rem',
                fontWeight: 600,
                color: theme.color.ordinalColors.neural[900],
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }
        }
    }
})

export default TopNavigationWrapper

