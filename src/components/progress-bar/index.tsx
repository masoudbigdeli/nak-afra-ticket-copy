import { FC, useMemo } from 'react'
import ProgressBarWrapper, { ProgressBarFill } from '../../styles/components/progress-bar'

interface ProgressBarProps {
    scopeMaximumValue: number
    currentValue: number
    hasError: boolean
}

const ProgressBar: FC<ProgressBarProps> = ({ scopeMaximumValue, currentValue, hasError }) => {

    const percentage: number = useMemo(() => {
        if (currentValue >= scopeMaximumValue) return 100
        return ((currentValue / scopeMaximumValue) * 100)
    }, [currentValue, scopeMaximumValue])

    return (
        <ProgressBarWrapper hasError={hasError}>
            <ProgressBarFill style={{ width: `${percentage}%`, maxWidth: '100%' }} hasError={hasError} />
        </ProgressBarWrapper>
    )
}

export default ProgressBar