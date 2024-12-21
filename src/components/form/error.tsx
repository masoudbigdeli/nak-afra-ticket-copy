import { useMemo } from 'react'
import ErrorWrapper, { ErrorWrapperProps } from '../../styles/components/form/error'
import { UseFormReturn } from 'react-hook-form'
import Icon from '../icons/icon'

export interface ErrorProps<EntityModel extends Record<string, any>> extends ErrorWrapperProps {
    name: keyof EntityModel
    data: { reactHookFormObject: UseFormReturn<EntityModel>, defaultValue: EntityModel }
}

const Error = <EntityModel extends Record<string, any>>({ name, data, fontSize, fontWeight, lineHeight }: ErrorProps<EntityModel>) => {

    const hasError: boolean = useMemo(() => {
        return !!(
            data.reactHookFormObject.formState.errors &&
            data.reactHookFormObject.formState.errors[name] &&
            data.reactHookFormObject.formState.errors[name]?.message
        )
    }, [data.reactHookFormObject.formState, name])

    const error: string = useMemo(() => {
        return (data.reactHookFormObject.formState.errors &&
            data.reactHookFormObject.formState.errors[name] &&
            data.reactHookFormObject.formState.errors[name]?.message &&
            typeof data.reactHookFormObject.formState.errors[name]?.message === 'string')
            ? data.reactHookFormObject.formState.errors[name]?.message as string
            : ''
    }, [data.reactHookFormObject.formState, name])

    // if (!hasError) return null

    return (
        <ErrorWrapper
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
        >
            {hasError ? <Icon iconName='triangleError' size='1' style={{ cursor: 'default' }} /> : null}
            {error}
        </ErrorWrapper >
    )
}

export default Error