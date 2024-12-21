import { Path, UseFormReturn } from 'react-hook-form'
import CharacterCounterWrapper from '../../styles/components/form/character-counter'
import { useMemo } from 'react'

export interface CharacterCounterProps<EntityModel extends Record<string, any>> {
    name: keyof EntityModel
    data: { reactHookFormObject: UseFormReturn<EntityModel>, defaultValue: EntityModel }
    characterCounterMaxLength?: number
}

const CharacterCounter = <EntityModel extends Record<string, any>>({ name, data, characterCounterMaxLength }: CharacterCounterProps<EntityModel>) => {

    const hasError: boolean = useMemo(() => {
        return !!(
            data.reactHookFormObject.formState.errors &&
            data.reactHookFormObject.formState.errors[name] &&
            data.reactHookFormObject.formState.errors[name]?.message
        )
    }, [data.reactHookFormObject.formState, name])

    const textLength: number = useMemo(() => {
        const value: any = data.reactHookFormObject.watch(name as string as Path<EntityModel>)
        if (typeof value !== 'string') return 0
        return value.length
    }, [data, name])

    if (hasError || !textLength) return null

    return (
        <CharacterCounterWrapper
            className={(typeof characterCounterMaxLength === 'number' && textLength > characterCounterMaxLength) ? 'length-error' : ''}
        >
            {`${textLength}/${characterCounterMaxLength ? characterCounterMaxLength : 'infinity'}`}
        </CharacterCounterWrapper >
    )
}

export default CharacterCounter