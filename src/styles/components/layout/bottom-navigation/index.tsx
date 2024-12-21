import styled from '@emotion/styled'
import AppThemeModel from '../../../../models/theme-model'
import { footerHeight } from '../../../general/style-general-constants'

const BottomNavigationWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        height: footerHeight,
        minHeight: footerHeight,
        maxHeight: footerHeight,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBlock: '0.625rem',
        borderTop: `0.0625rem solid ${theme.color.ordinalColors.neural[100]}`,
        backgroundColor:theme.color.solid.white
    }
})

export default BottomNavigationWrapper

interface BottomNavigationItemProps {
    countOfChild: number
    isCurrent?: boolean
}

export const BottomNavigationItem = styled.div<BottomNavigationItemProps & { theme?: AppThemeModel }>(({ theme, isCurrent, countOfChild }) => {
    return {
        boxSizing: 'border-box',
        width: `calc(100% / ${countOfChild})`,
        maxWidth: `calc(100% / ${countOfChild})`,
        minWidth: `calc(100% / ${countOfChild})`,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: theme.spacing.spacingXxs,
        cursor: isCurrent ? 'not-allowed' : 'pointer',
        '> .title': {
            boxSizing: 'border-box',
            width: '100%',
            height: 'max-content',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '0.75rem',
            fontWeight: isCurrent ? 600 : 400,
            color: theme.color.ordinalColors.neural[isCurrent ? 900 : 700],
        }
    }
})