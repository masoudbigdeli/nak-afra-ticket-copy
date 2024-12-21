import { RefObject, useCallback, useRef, useState } from 'react'

export type VerticalDirectionType = 'top' | 'down'
interface UseScrollDetectionProps {
    loading: boolean
    onTouchCallback: (verticalDirection: VerticalDirectionType) => void
}

interface UseScrollDetection<ElementType extends HTMLElement> {
    elementRef: RefObject<ElementType>
    verticalDirection: VerticalDirectionType | null
    onScroll: () => void
}

const useScrollDetection = <ElementType extends HTMLElement>({ loading, onTouchCallback }: UseScrollDetectionProps): UseScrollDetection<ElementType> => {
    const elementRef = useRef<ElementType>(null)
    const [verticalDirection, setVerticalDirection] = useState<VerticalDirectionType | null>('down')

    const onScroll = useCallback(() => {
        const element = elementRef.current

        if (!element || loading) return

        if (element.scrollTop === 0) {
            setVerticalDirection('top')
            onTouchCallback('top')
            setTimeout(() => elementRef.current?.scrollTo({ top: 0, behavior: 'smooth' }), 100)
        }
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            setVerticalDirection('down')
            onTouchCallback('down')
            setTimeout(() => elementRef.current?.scrollTo({ top: elementRef.current.scrollHeight, behavior: 'smooth' }), 100)
        }
    }, [loading, elementRef, onTouchCallback, setVerticalDirection])

    return {
        elementRef,
        verticalDirection,
        onScroll
    }
}

export default useScrollDetection
