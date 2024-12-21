import { CSSProperties } from 'react'
import AppThemeModel from '../../../models/theme-model'
import StoreModel from '../../../models/store-model'

export type ButtonSize = 'XS' | 'S' | 'M' | 'L' | 'XL'
export type ButtonType =
  | 'FILLED'
  | 'OUTLINE'
  | 'TEXT'
  | 'FILLED_SECONDARY'
  | 'OUTLINE_SECONDARY'
  | 'GREY_OUTLINE'
  | 'SUCCESS'
  | 'ERROR'
  | 'SUCCESS_TEXT'
  | 'ERROR_TEXT'
export type ButtonDirection = 'rtl' | 'ltr'

const buttonSizeConfig: Record<ButtonSize, CSSProperties> = {
  XS: {
    height: '1.75rem',
    fontSize: '0.625rem',
    fontWeight: 600,
  },
  S: {
    height: '2.25rem',
    fontSize: '0.75rem',
    fontWeight: 700,
  },
  M: {
    height: '2.5rem',
    fontSize: '0.875rem',
    fontWeight: 600,
  },
  L: {
    height: '2.75rem',
    fontSize: '1rem',
    fontWeight: 600,
  },
  XL: {
    height: '3rem',
    fontSize: '1rem',
    fontWeight: 600,
  },
}

export default buttonSizeConfig

export const getButtonStyleByType = (
  type: ButtonType,
  hoverd: boolean,
  disabled: boolean,
  theme?: AppThemeModel
): CSSProperties => {
  switch (type) {
    case 'FILLED':
      if (disabled)
        return {
          borderColor: 'transparent',
          backgroundColor: theme?.color.ordinalColors.neural[100],
          color: theme?.color.ordinalColors.neural[400],
          cursor: 'not-allowed',
        }
      if (hoverd)
        return {
          backgroundColor: theme?.color.ordinalColors.afra[700],
          cursor: 'pointer',
        }
      return {
        paddingInline: '1.5rem',
        paddingBlock: '0.5rem',
        borderColor: 'transparent',
        borderRadius: '0.375rem',
        backgroundColor: theme?.color.ordinalColors.afra[500],
        color: theme?.color.solid.white,
        cursor: 'pointer',
      }
    case 'OUTLINE':
      if (disabled)
        return {
          borderColor: theme?.color.ordinalColors.neural[400],
          color: theme?.color.ordinalColors.neural[400],
          backgroundColor: theme?.color.ordinalColors.neural[100],
          cursor: 'not-allowed',
        }
      if (hoverd)
        return {
          borderColor: theme?.color.ordinalColors.afra[700],
          color: theme?.color.ordinalColors.afra[500],
          backgroundColor: theme?.color.ordinalColors.neural[50],
          cursor: 'pointer',
        }
      return {
        paddingInline: '1.5rem',
        paddingBlock: '0.5rem',
        borderRadius: '0.375rem',
        borderColor: theme?.color.ordinalColors.afra[500],
        color: theme?.color.ordinalColors.afra[500],
        backgroundColor: 'transparent',
        cursor: 'pointer',
      }
    case 'TEXT':
      if (disabled)
        return {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme?.color.ordinalColors.neural[400],
          cursor: 'not-allowed',
        }
      if (hoverd)
        return {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme?.color.ordinalColors.afra[700],
          cursor: 'pointer',
        }
      return {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: theme?.color.ordinalColors.afra[500],
        cursor: 'pointer',
      }
    case 'FILLED_SECONDARY':
      if (disabled)
        return {
          borderColor: 'transparent',
          backgroundColor: theme?.color.ordinalColors.neural[100],
          color: theme?.color.ordinalColors.neural[400],
          cursor: 'not-allowed',
        }
      if (hoverd)
        return {
          borderColor: 'transparent',
          color: theme?.color.ordinalColors.afra[700],
          backgroundColor: theme?.color.ordinalColors.afra[100],
          cursor: 'pointer',
        }
      return {
        paddingInline: '1.5rem',
        paddingBlock: '0.5rem',
        borderRadius: '0.375rem',
        borderColor: 'transparent',
        color: theme?.color.ordinalColors.afra[500],
        backgroundColor: theme?.color.ordinalColors.afra[0],
        cursor: 'pointer',
      }
    case 'OUTLINE_SECONDARY':
      if (disabled)
        return {
          borderColor: 'transparent',
          backgroundColor: theme?.color.ordinalColors.neural[100],
          color: theme?.color.ordinalColors.neural[400],
          cursor: 'not-allowed',
        }
      if (hoverd)
        return {
          borderColor: theme?.color.ordinalColors.neural[200],
          color: theme?.color.ordinalColors.afra[500],
          backgroundColor: theme?.color.ordinalColors.neural[50],
          cursor: 'pointer',
        }
      return {
        paddingInline: '1.5rem',
        paddingBlock: '0.5rem',
        borderRadius: '0.375rem',
        borderColor: theme?.color.ordinalColors.neural[200],
        color: theme?.color.ordinalColors.afra[500],
        backgroundColor: theme?.color.solid.white,
        cursor: 'pointer',
      }
    case 'GREY_OUTLINE':
      if (disabled)
        return {
          borderColor: 'transparent',
          color: theme?.color.ordinalColors.neural[400],
          backgroundColor: theme?.color.ordinalColors.neural[100],
          cursor: 'not-allowed',
        }
      if (hoverd)
        return {
          borderColor: theme?.color.ordinalColors.neural[200],
          color: theme?.color.ordinalColors.neural[900],
          backgroundColor: theme?.color.ordinalColors.neural[50],
          cursor: 'pointer',
        }
      return {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: theme?.color.ordinalColors.afra[500],
        cursor: 'pointer',
      }
    case 'SUCCESS':
      if (disabled)
        return {
          borderColor: 'transparent',
          color: theme?.color.ordinalColors.neural[400],
          backgroundColor: theme?.color.ordinalColors.neural[100],
          cursor: 'not-allowed',
        }
      if (hoverd)
        return {
          borderColor: theme?.color.ordinalColors.greenSuccess[700],
          color: theme?.color.solid.white,
          backgroundColor: theme?.color.ordinalColors.greenSuccess[700],
          cursor: 'pointer',
        }
      return {
        borderColor: theme?.color.ordinalColors.greenSuccess[600],
        color: theme?.color.solid.white,
        backgroundColor: theme?.color.ordinalColors.greenSuccess[600],
        cursor: 'pointer',
      }
    case 'ERROR':
      if (disabled)
        return {
          borderColor: 'transparent',
          color: theme?.color.ordinalColors.neural[400],
          backgroundColor: theme?.color.ordinalColors.neural[100],
          cursor: 'not-allowed',
        }
      if (hoverd)
        return {
          borderColor: theme?.color.ordinalColors.redError[600],
          color: theme?.color.solid.white,
          backgroundColor: theme?.color.ordinalColors.redError[600],
          cursor: 'pointer',
        }
      return {
        borderColor: theme?.color.ordinalColors.redError[500],
        color: theme?.color.solid.white,
        backgroundColor: theme?.color.ordinalColors.redError[500],
        cursor: 'pointer',
      }
    case 'SUCCESS_TEXT':
      if (disabled)
        return {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme?.color.ordinalColors.neural[400],
          cursor: 'not-allowed',
        }
      if (hoverd)
        return {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme?.color.ordinalColors.greenSuccess[700],
          cursor: 'pointer',
        }
      return {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: theme?.color.ordinalColors.greenSuccess[600],
        cursor: 'pointer',
      }
    case 'ERROR_TEXT':
      if (disabled)
        return {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme?.color.ordinalColors.neural[400],
          cursor: 'not-allowed',
        }
      if (hoverd)
        return {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme?.color.ordinalColors.redError[600],
          cursor: 'pointer',
        }
      return {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        color: theme?.color.ordinalColors.redError[500],
        cursor: 'pointer',
      }

    default:
      return {}
  }
}

export const getPaddingByIconAndType = (
  hasIcon: boolean,
  size: keyof typeof buttonSizeConfig,
  direction: StoreModel['language']['dir']
): CSSProperties => {
  switch (size) {
    case 'XS':
      if (hasIcon)
        return {
          paddingInline: '0.75rem',
          paddingBlock: '0.25rem',
          paddingLeft: direction === 'rtl' ? '0.5rem' : '0.75rem',
          paddingRight: direction === 'rtl' ? '0.75rem' : '0.5rem',
        }
      return {
        paddingBlock: '0.25rem',
        paddingInline: '0.75rem',
      }
    case 'S':
      if (hasIcon)
        return {
          paddingBlock: '0.625rem',
          paddingLeft: direction === 'rtl' ? '0.75rem' : '1rem',
          paddingRight: direction === 'rtl' ? '1rem' : '0.75rem',
        }
      return {
        paddingBlock: '0.375rem',
        paddingInline: '1rem',
      }
    case 'M':
      if (hasIcon)
        return {
          paddingBlock: '0.625rem',
          paddingLeft: direction === 'rtl' ? '1.25rem' : '1.5rem',
          paddingRight: direction === 'rtl' ? '1.5rem' : '1.25rem',
        }
      return {
        paddingBlock: '0.375rem',
        paddingInline: '1.5rem',
      }
    case 'L':
      if (hasIcon)
        return {
          paddingBlock: '0.75rem',
          paddingLeft: direction === 'rtl' ? '1.25rem' : '1.5rem',
          paddingRight: direction === 'rtl' ? '1.5rem' : '1.25rem',
        }
      return {
        paddingBlock: '0.5rem',
        paddingInline: '1.5rem',
      }
    case 'XL':
      if (hasIcon)
        return {
          paddingBlock: '0.8125rem',
          paddingLeft: direction === 'rtl' ? '1.25rem' : '1.5rem',
          paddingRight: direction === 'rtl' ? '1.5rem' : '1.25rem',
        }
      return {
        paddingBlock: '0.5rem',
        paddingInline: '1.5rem',
      }
    default:
      return {}
  }
}
