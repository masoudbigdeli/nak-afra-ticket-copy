import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import useBaseService from './base-service'
import useServiceAuthorization from '../hooks/use-service-authorization'

const useCrudService = <EntityCreateModel, EntityUpdateModel>() => {
    const baseService: AxiosInstance = useBaseService()
    const isServiceAuthorized = useServiceAuthorization()
    const auth = <T>(
        api: string,
        apiPermissions: Array<string>,
        data: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        if (!isServiceAuthorized(apiPermissions)) return Promise.reject()
        return baseService.post(api, data, config)
    }

    const logout = <T>(
        api: string,
        apiPermissions: Array<string>,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        if (!isServiceAuthorized(apiPermissions)) return Promise.reject()
        return baseService.get(api, config)
    }

    const createEntity = <T>(
        api: string,
        apiPermissions: Array<string>,
        entity: EntityCreateModel,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        if (!isServiceAuthorized(apiPermissions)) return Promise.reject()
        return baseService.post(api, entity, config)
    }

    const getEntity = <T>(
        api: string,
        apiPermissions: Array<string>,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        if (!isServiceAuthorized(apiPermissions)) return Promise.reject()
        return baseService.get(api, config)
    }

    const getEntityList = <T>(
        api: string,
        apiPermissions: Array<string>,
        payload?: Record<string, any>,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        if (!isServiceAuthorized(apiPermissions)) return Promise.reject()
        return baseService.post(api, payload, config)
    }

    const updateEntity = <T>(
        api: string,
        apiPermissions: Array<string>,
        updatedEntity: EntityUpdateModel,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        if (!isServiceAuthorized(apiPermissions)) return Promise.reject()
        return baseService.put(api, updatedEntity, config)
    }

    const updateEntityPartially = <T>(
        api: string,
        apiPermissions: Array<string>,
        updatedEntity: Partial<EntityUpdateModel>,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        if (!isServiceAuthorized(apiPermissions)) return Promise.reject()
        return baseService.patch(api, updatedEntity, config)
    }

    const deleteEntity = <T>(
        api: string,
        apiPermissions: Array<string>,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        if (!isServiceAuthorized(apiPermissions)) return Promise.reject()
        return baseService.delete(api, config)
    }

    const uploadFile = <T>(
        api: string,
        apiPermissions: Array<string>,
        file: File,
        appendName: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        if (!isServiceAuthorized(apiPermissions)) return Promise.reject()
        baseService.defaults.headers['Content-Type'] = 'multipart/form-data'
        const bodyOfFormData = new FormData()
        bodyOfFormData.append(appendName, file)
        return baseService.post(api, bodyOfFormData, config)
    }

    const uploadMultipleFile = <T>(
        api: string,
        apiPermissions: Array<string>,
        files: Record<string, File | string>,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> => {
        if (!isServiceAuthorized(apiPermissions)) return Promise.reject()
        baseService.defaults.headers['Content-Type'] = 'multipart/form-data'
        const bodyOfFormData = new FormData()
        Object.keys(files).forEach((key: string) => { bodyOfFormData.append(key, files[key]) })
        return baseService.post(api, bodyOfFormData, config)
    }

    return {
        baseService,
        auth,
        logout,
        createEntity,
        getEntity,
        getEntityList,
        updateEntity,
        updateEntityPartially,
        deleteEntity,
        uploadFile,
        uploadMultipleFile,
    }
}

export default useCrudService