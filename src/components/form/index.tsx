import { CSSProperties, FC } from 'react'
import { RegisterOptions, useForm, UseFormProps, UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormElementSize } from '../../styles/components/form'
import { ResetterProps } from './resetter'
import { ErrorProps } from './error'
import { InfoProps } from './info'
import { LabelProps } from './label'
import { CharacterCounterProps } from './character-counter'

export type FormType = 'CREATE' | 'UPDATE'

export interface FormProps<EntityModel extends Record<string, any>> {
    formType: FormType
    defaultValue: EntityModel
    validation: any
    useFormProps?: UseFormProps<EntityModel, any>
    fieldsRenderer: (data: {
        reactHookFormObject: UseFormReturn<EntityModel>,
        defaultValue: EntityModel
    }) => JSX.Element | Array<JSX.Element>
}

export interface FormElementBaseProps<EntityModel extends Record<string, any>> {
    name: keyof EntityModel
    data: { reactHookFormObject: UseFormReturn<EntityModel>, defaultValue: EntityModel }
    registerOptions?: RegisterOptions<EntityModel, any>
    error?: FC<ErrorProps<EntityModel>>
    resetter?: FC<ResetterProps<EntityModel>>
    icon?: FC<any>
    info?: FC<InfoProps>
    label?: FC<LabelProps>
    labelText?: string | JSX.Element
    characterCounter?: FC<CharacterCounterProps<EntityModel>>
    characterCounterMaxLength?: number
    size: FormElementSize
    disabled?: boolean
    borderHide?: boolean
    dir?: CSSProperties['direction']
    inputResetValue?: any
    infoText?: string
    isRequired?: boolean
}

const Form = <EntityModel extends Record<string, any>>(
    {
        validation,
        useFormProps,
        defaultValue,
        fieldsRenderer
    }: FormProps<EntityModel>
) => {
    const reactHookFormObject = useForm<EntityModel>({
        defaultValues: (defaultValue as any),
        resolver: yupResolver(validation),
        mode: 'all',
        ...useFormProps
    })

    return (
        <>
            {fieldsRenderer({ reactHookFormObject, defaultValue })}
        </>
    )
}

export default Form