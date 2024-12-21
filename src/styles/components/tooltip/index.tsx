import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'

const TooltipWrapper = styled.div({
    boxSizing: 'border-box',
    width: 'max-content',
    height: 'max-content',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 'none',
    margin: 'none',
    cursor: 'pointer',
    position: 'relative',
})

export default TooltipWrapper

export const TooltipHintWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
    return {
        boxSizing: 'border-box',
        width: 'max-content',
        height: 'max-content',
        borderRadius: theme.radious.radiousXs,
        backgroundColor: theme.color.ordinalColors.neural[800],
        paddingInline: theme.spacing.spacingXxxl,
        paddingBlock: theme.spacing.spacingM,
        color: theme.color.solid.white,
        fontSize: '0.75rem',
        fontWeight: 400,
        position: 'absolute',
        top: '-50%',
        left: '50%',
        transform: 'translate(-50%, -115%)',
        visibility: 'hidden',
        boxShadow: 'none',
        '&.show': {
            visibility: 'visible',
            boxShadow: '0px 4px 22px 0px rgba(0, 0, 0, 0.04)',
        },
        ':before': {
            content: '""',
            position: 'absolute',
            left: '50%',
            top: '95%',
            transform: 'translate(-58%)',
            marginInline: 'auto',
            width: 0,
            height: 0,
            borderLeft: '0.5rem solid transparent',
            borderRight: '0.5rem solid transparent',
            borderTop: `1rem solid ${theme.color.ordinalColors.neural[800]}`,
        }
    }
})