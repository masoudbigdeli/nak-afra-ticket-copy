import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'

const CharacterCounterWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        height: 'maxd-content',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.785rem',
        fontWeight: 400,
        direction: 'ltr',
        color: theme.color.ordinalColors.neural[500],
        '&.length-error': {
            color: theme.color.ordinalColors.redError[500],
        }
    }
})

export default CharacterCounterWrapper