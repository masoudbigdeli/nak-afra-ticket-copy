import { useEffect, useLayoutEffect } from 'react'
import StoreModel from '../models/store-model'
import useStore from '../state-management/store'

const useDirection = () => {
    const language: StoreModel['language'] = useStore<StoreModel['language']>((store: StoreModel) => store.language)

    useLayoutEffect(() => {
        const body: HTMLBodyElement = document.getElementsByTagName('body')[0]
        if (body && (body.style.direction !== language.dir || body.dir !== language.dir)) {
            document.dir = language.dir
            body.style.direction = language.dir
            body.dir = language.dir
        }
    }, [language])

    useEffect(() => {
        const body: HTMLBodyElement = document.getElementsByTagName('body')[0]
        if (body && (body.style.direction !== language.dir || body.dir !== language.dir)) {
            document.dir = language.dir
            body.style.direction = language.dir
            body.dir = language.dir
        }
    }, [language])
}

export default useDirection