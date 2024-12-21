import { Path, UseFormReturn } from 'react-hook-form'
import Icon, { IconProps } from '../icons/icon'
import ResetterWrapper from '../../styles/components/form/resetter'
import { useCallback, useMemo } from 'react'

export interface ResetterProps<EntityModel extends Record<string, any>> {
    name: keyof EntityModel
    data: { reactHookFormObject: UseFormReturn<EntityModel>, defaultValue: EntityModel }
    resetValue: any
    iconName: IconProps['iconName']
}

const Resetter = <EntityModel extends Record<string, any>>({ name, data, resetValue, iconName }: ResetterProps<EntityModel>) => {

    const onResetterClick = useCallback(() => {
        data.reactHookFormObject.setValue(
            name as string as Path<EntityModel>,
            resetValue,
            {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
            }
        )
    }, [name, data, resetValue,])

    const fieldValue = useMemo(() => {
        return data.reactHookFormObject.watch(name as string as Path<EntityModel>)
    }, [name, data])

    if (!fieldValue || fieldValue === '' || fieldValue === null) return null

    return (
        <ResetterWrapper onClick={onResetterClick}>
            <Icon iconName={iconName} size='1' style={{ cursor: 'pointer' }} />
        </ResetterWrapper >
    )
}

export default Resetter