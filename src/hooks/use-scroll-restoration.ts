import { useLayoutEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollDataStorage } from '../App'


export function useScrollRestoration() {
  const { pathname, hash } = useLocation()

  const key = useMemo(() => {
    return pathname + hash
  }, [pathname, hash])

  const onScrollEnd = () => {
    const elements = document.querySelectorAll<HTMLElement>('[data-scroll-key="true"]')
    let element: HTMLElement | null = elements.length ? elements[0] : null
    scrollDataStorage[key] = element?.scrollTop || 0
  }

  useLayoutEffect(() => {
    let element: HTMLElement | null = null

    setTimeout(() => {
      const elements = document.querySelectorAll<HTMLElement>('[data-scroll-key="true"]')

      if (elements.length) {
        element = elements[0]
        element.addEventListener('scrollend', onScrollEnd)
        const prevScrollHeight = scrollDataStorage[key]
        element.scrollTo({ top: prevScrollHeight, left: 0, behavior: 'smooth' })
      }
    }, 500);

    return () => {
      if (!element) return
      element.removeEventListener('scrollend', onScrollEnd)
    }
  }, [key])
}
