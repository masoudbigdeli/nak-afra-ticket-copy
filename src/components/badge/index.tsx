import BADGE_TYPE from '../../enums/badge-type'
import BadgeWrapper from '../../styles/components/badge'

interface BadgeProps {
    badgeType: BADGE_TYPE
    children: React.ReactNode,
}

const Badge = ({ children, badgeType }: BadgeProps) => {
    return (
        <BadgeWrapper badgeType={badgeType}>
            {children}
        </BadgeWrapper>
    )
}

export default Badge