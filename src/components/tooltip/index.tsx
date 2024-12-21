import { FC, useCallback, useRef } from 'react'
import { IconName } from '../icons/icon-list'
import Icon, { IconProps } from '../icons/icon'
import TooltipWrapper, { TooltipHintWrapper } from '../../styles/components/tooltip'

interface TooltipProps {
    iconName: IconName
    iconSize: IconProps['size']
    hintMsg: string
}

const Tooltip: FC<TooltipProps> = ({ iconName, iconSize, hintMsg }) => {
    const tooltipHintWrapperRef = useRef<HTMLDivElement | null>(null)

    const onMouseEnter = useCallback(() => {
        if (!tooltipHintWrapperRef.current) return
        tooltipHintWrapperRef.current.classList.add('show')
    }, [tooltipHintWrapperRef])

    const onMouseLeave = useCallback(() => {
        if (!tooltipHintWrapperRef.current) return
        tooltipHintWrapperRef.current.classList.remove('show')
    }, [tooltipHintWrapperRef])

    return (
        <TooltipWrapper
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Icon
                iconName={iconName}
                size={iconSize}
            />
            <TooltipHintWrapper ref={tooltipHintWrapperRef}>
                {hintMsg}
            </TooltipHintWrapper>
        </TooltipWrapper>
    )
}

export default Tooltip