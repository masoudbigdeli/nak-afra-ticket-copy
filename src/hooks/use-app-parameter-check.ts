import { useCallback, useRef, useState, useEffect } from 'react'

type CheckType = 'internetSpeed' | 'mode' | 'isOnline'

const useAppParameterCheck = () => {
  const intervalRefs = useRef<Map<CheckType, ReturnType<typeof setInterval> | null>>(new Map())

  const [internetSpeedStatus, setInternetSpeedStatus] = useState<'good' | 'bad' | null>(null)
  const [modeStatus, setModeStatus] = useState<'standalone' | 'browser' | null>(null)
  const [onlineStatus, setOnlineStatus] = useState<'online' | 'offline' | null>(null)

  const performParameterCheck = useCallback((checks: CheckType[], intervalTime: number = 2000) => {
    checks.forEach((check) => {
      if (intervalRefs.current.get(check)) {
        clearInterval(intervalRefs.current.get(check)!)
      }
    })

    if (checks.includes('mode')) {
      const isStandalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || (navigator as any).standalone
      setModeStatus(isStandalone ? 'standalone' : 'browser')
    }

    checks.forEach((check) => {
      if (check !== 'mode') {
        const intervalId = setInterval(() => {
          if (check === 'internetSpeed') {
            const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
            setInternetSpeedStatus(
              connection && ['slow-2g', '2g', '3g'].includes(connection.effectiveType) ? 'bad' : 'good'
            )
          } else if (check === 'isOnline') {
            setOnlineStatus(navigator.onLine ? 'online' : 'offline')
          }
        }, intervalTime)

        intervalRefs.current.set(check, intervalId)
      }
    })
  }, [])

  useEffect(() => {
    return () => {
      intervalRefs.current.forEach((intervalId) => {
        if (intervalId) {
          clearInterval(intervalId)
        }
      })
    }
  }, [])

  return { performParameterCheck, internetSpeedStatus, modeStatus, onlineStatus }
}

export default useAppParameterCheck
