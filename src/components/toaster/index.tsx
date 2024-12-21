import { ToastOptions, toast } from 'react-toastify'
import ToasterBody from '../toaster/toaster-body'
import TOAST_TYPE from '../../enums/toast-type'

const toastBodyContainerClassNameByType: Record<TOAST_TYPE, string> = {
  ERROR: 'toast-body-container-error',
  SUCCESS: 'toast-body-container-success',
  WARNING: 'toast-body-container-warning',
  INFO: 'toast-body-container-info',
}

const toaster: Record<
  TOAST_TYPE,
  (
    title: string,
    config?: Partial<ToastOptions>
  ) => void
> = {
  ERROR: (
    title: string,
    config?: Partial<ToastOptions>
  ) => {
    const toastId = `error-${title}`
    if (!toast.isActive(toastId)) {
      toast(<ToasterBody title={title} iconName='triangleError' />, {
        className: toastBodyContainerClassNameByType.ERROR,
        position: 'top-center',
        toastId,
        ...config,
      })
    }
  },
  SUCCESS: (
    title: string,
    config?: Partial<ToastOptions>
  ) => {
    const toastId = `success-${title}`
    if (!toast.isActive(toastId)) {
      toast(<ToasterBody title={title} iconName='circleSuccess' />, {
        className: toastBodyContainerClassNameByType.SUCCESS,
        position: 'top-center',
        toastId,
        ...config,
      })
    }
  },
  WARNING: (
    title: string,
    config?: Partial<ToastOptions>
  ) => {
    const toastId = `warning-${title}`
    if (!toast.isActive(toastId)) {
      toast(<ToasterBody title={title} iconName='circleInfo' />, {
        className: toastBodyContainerClassNameByType.WARNING,
        position: 'top-center',
        toastId,
        ...config,
      })
    }
  },
  INFO: (
    title: string,
    config?: Partial<ToastOptions>
  ) => {
    const toastId = `info-${title}`
    if (!toast.isActive(toastId)) {
      toast(<ToasterBody title={title} />, {
        className: toastBodyContainerClassNameByType.INFO,
        position: 'top-center',
        toastId,
        ...config,
      })
    }
  },
}

export default toaster
