import { FC } from 'react'
import iconList, { IconName } from './icon-list'
import IconWrapper, { IconWrapperProps } from '../../styles/components/icons'

export interface IconProps extends IconWrapperProps {
    iconName: IconName
    className?: string
    isFill?: boolean
    onClick?: (event: any) => void
}

const Icon: FC<IconProps> = ({ iconName, size, style, className, isFill, onClick }) => {
    const Icon: FC<Pick<IconProps, 'isFill'>> = iconList[iconName]
    return (
        <IconWrapper
            size={size}
            style={style}
            className={className}
            onClick={(event: any) => onClick && onClick(event)}
        >
            <Icon isFill={isFill} />
        </IconWrapper>
    )
}

export default Icon