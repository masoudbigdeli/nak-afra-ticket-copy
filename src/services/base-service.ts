import Axios, { AxiosInstance, AxiosResponse } from 'axios'
import { jwtDecode } from 'jwt-decode'
import JsonWebTokenModel from '../models/json-web-token-model'
import StoreModel from '../models/store-model'
import useStore from '../state-management/store'
import apiUri from '../configs/api-uri'

const confidenceLevelOfGettingTokenByRefreshToken: number = 5000

const useBaseService = (): AxiosInstance => {
    const axiosInstance: AxiosInstance = Axios.create()

    const token: StoreModel['token'] = useStore((store: StoreModel) => store.token)
    const refreshToken: StoreModel['refreshToken'] = useStore((store: StoreModel) => store.refreshToken)
    const setToken: StoreModel['setToken'] = useStore((store: StoreModel) => store.setToken)
    const setRefreshToken: StoreModel['setRefreshToken'] = useStore((store: StoreModel) => store.setRefreshToken)

    axiosInstance.defaults.baseURL = import.meta.env.VITE_SERVER_BASE_URL
    axiosInstance.defaults.headers['Content-Type'] = 'application/json'
    if (token && typeof token === 'string' && token !== '') {
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`
    } else {
        if ('Authorization' in axiosInstance.defaults.headers) {
            delete axiosInstance.defaults.headers['Authorization']
        }
    }

    axiosInstance.interceptors.response.use(
        function (response) {
            return response
        },
        function (error) {
            if (
                error.response &&
                typeof error.response.status === 'number' &&
                error.response.status === 401
            ) {
                if (
                    typeof refreshToken === 'string' &&
                    refreshToken !== ''
                ) {
                    const decodedRefreshToken = jwtDecode<JsonWebTokenModel>(refreshToken)
                    const now: number = new Date().getTime()

                    if (now < ((decodedRefreshToken.exp * 1000) - confidenceLevelOfGettingTokenByRefreshToken)) {
                        getTokenByRefreshToken(refreshToken)
                            .then((res: AxiosResponse<{ access: string }, unknown>) => {
                                setToken(res.data.access)

                                const config = error.config
                                config.headers['Authorization'] = `Bearer ${res.data.access}`

                                return new Promise((resolve, reject) => {
                                    Axios.request(config)
                                        .then((response: unknown) => {
                                            resolve(response)
                                        })
                                        .catch((error: unknown) => {
                                            reject(error)
                                        })
                                })
                            })
                            .catch(() => {
                                setToken(null)
                                setRefreshToken(null)
                                return Promise.reject(error)
                            })
                    } else {
                        setToken(null)
                        setRefreshToken(null)
                        return Promise.reject(error)
                    }
                } else {
                    if (token !== null || refreshToken !== null) {
                        setToken(null)
                        setRefreshToken(null)
                    }
                    return Promise.reject(error)
                }
            }
            return Promise.reject(error)
        },
    )
    return axiosInstance
}

export default useBaseService

const getTokenByRefreshToken = (refreshToken: string) => {
    const axiosInstance: AxiosInstance = Axios.create({
        baseURL: import.meta.env.VITE_SERVER_BASE_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return axiosInstance.post(apiUri.refreshToken.uri(), { refreshToken })
}