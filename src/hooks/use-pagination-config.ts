import { useCallback } from 'react'
import StoreModel, { ApplicationEntities } from '../models/store-model'
import useStore from '../state-management/store'

interface UsePaginationConfig {
    latestConfig: { page: number, perPage: number, filter: any, sort: any }
    bulkLatestConfigSetter: (latestEditedConfig: { page: number, perPage: number, filter: any, sort: any }) => void
}

const usePaginationConfig = (entity: ApplicationEntities): UsePaginationConfig => {
    const latestConfig: Record<ApplicationEntities, { page: number, perPage: number, filter: any, sort: any }> = useStore((store: StoreModel) => store.entitiesListFetchLatestConfig)
    const setEntitiesListFetchLatestConfig = useStore((store: StoreModel) => store.setEntitiesListFetchLatestConfig)

    const bulkLatestConfigSetter = useCallback((latestEditedConfig: { page: number, perPage: number, filter: any, sort: any }) => {
        setEntitiesListFetchLatestConfig(
            {
                ...latestConfig,
                [entity]: latestEditedConfig
            }
        )
    }, [latestConfig])

    return {
        latestConfig: latestConfig[entity],
        bulkLatestConfigSetter
    }
}

export default usePaginationConfig