import styled from "@emotion/styled"
import AppThemeModel from "../../../models/theme-model"
import BADGE_TYPE from "../../../enums/badge-type"
import { CSSProperties } from "react"

interface BadgeWrapperProps {
    badgeType: BADGE_TYPE
}

const BadgeWrapper = styled.div<BadgeWrapperProps & { theme?: AppThemeModel }>(({ theme, badgeType }) => {
    return {
        fontSize: '0.625rem',
        fontWeight: 600,
        paddingInline: theme.spacing.spacingXs,
        paddingBlock: theme.spacing.spacingXxs,
        borderRadius: theme.radious.radiousL,
        ...convertBadgeTypeToColor(badgeType, theme)
    }
})

export default BadgeWrapper

const convertBadgeTypeToColor = (badge: BADGE_TYPE, theme?: AppThemeModel): CSSProperties => {
    switch (badge) {
        case BADGE_TYPE.GREEN:
            return {
                backgroundColor: theme?.color.ordinalColors.greenSuccess[50] || '',
                color: theme?.color.ordinalColors.greenSuccess[600] || ''
            }
        case BADGE_TYPE.ORANGE:
            return {
                backgroundColor: theme?.color.ordinalColors.orange[50] || '',
                color: theme?.color.ordinalColors.orange[600] || ''
            }
        case BADGE_TYPE.RED:
            return {
                backgroundColor: theme?.color.ordinalColors.redError[50] || '',
                color: theme?.color.ordinalColors.redError[600] || ''
            }
        default:
            return {}
    }
}