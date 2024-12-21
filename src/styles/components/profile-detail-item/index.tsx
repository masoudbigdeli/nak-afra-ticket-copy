import AppThemeModel from '../../../models/theme-model'
import styled from '@emotion/styled'

const ProfileDetailItemWrapper = styled.div<{ theme?: AppThemeModel }>(({ theme }) => {
  return {
    boxSizing: 'border-box',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.spacingXxs,
    paddingInline: theme.spacing.spacingM,
    paddingBlock: theme.spacing.spacingXs,
    borderRadius: theme.radious.radiousXs,
    border: `solid 0.0625rem ${theme.color.ordinalColors.neural[200]}`,
    backgroundColor: theme.color.ordinalColors.neural[50],
    '> .title-text': {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: theme.color.ordinalColors.neural[500],
      lineHeight: theme.spacing.spacingL,
      textAlign: 'right'
    },
    '> .content-text': {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: theme.color.ordinalColors.neural[700],
      lineHeight: theme.spacing.spacingL,
      textAlign: 'right'
    }
  }
})

export default ProfileDetailItemWrapper

