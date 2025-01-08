import { DOMAttributes, HTMLInputTypeAttribute, KeyboardEvent, useMemo, MouseEvent, useCallback, CSSProperties } from 'react'
import FormElementWrapper from '../../../styles/components/form'
import { CharacterCounterCmpWrapper, InputUi, InputWrapper, InsideIconsWrapper, LabelWrapper } from '../../../styles/components/form/elements/input'
import { FormElementBaseProps } from '../index'

export interface InputProps<EntityModel extends Record<string, any>> extends FormElementBaseProps<EntityModel>, DOMAttributes<HTMLInputElement> {
    type?: HTMLInputTypeAttribute | undefined
    labelStyle?: CSSProperties | undefined
}

const Input = <EntityModel extends Record<string, any>>({
    name,
    data,
    registerOptions,
    label: Label,
    error: Error,
    icon: Icon,
    resetter: Resetter,
    info: Info,
    characterCounter: CharacterCounter,
    type,
    dir,
    size,
    disabled,
    borderHide,
    inputResetValue,
    infoText,
    labelText,
    labelStyle,
    isRequired,
    characterCounterMaxLength,
    ...rest
}: InputProps<EntityModel>) => {

    const hasError: boolean = useMemo(() => {
        return !!(
            data.reactHookFormObject.formState.errors &&
            data.reactHookFormObject.formState.errors[name] &&
            data.reactHookFormObject.formState.errors[name]?.message
        )
    }, [data.reactHookFormObject.formState, name])

    const onLabelClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.currentTarget.parentElement?.querySelector('input')?.focus()
    }, [])

    return (
        <FormElementWrapper>
            <InputWrapper>
                <InputUi
                    type={type}
                    key={name.toString()}
                    defaultValue={data.defaultValue[name]}
                    size={size}
                    error={hasError}
                    disabled={disabled}
                    borderHide={borderHide}
                    hasIcon={!!(Icon)}
                    hasResetter={!!(Resetter)}
                    dir={dir}
                    placeholder=' '
                    onKeyDown={(type && type === 'number')
                        ? (event: KeyboardEvent<HTMLInputElement>) => ['e', 'E', '+', '-'].includes(event.key) && event.preventDefault()
                        : undefined
                    }
                    {...data.reactHookFormObject.register(name as any, registerOptions ? { ...registerOptions } : undefined)}
                    {...rest}
                />
                {
                    Label
                        ? <LabelWrapper
                            className='label-wrapper'
                            onClick={onLabelClick}
                        >
                            <Label style={labelStyle || {}} labelText={labelText ? labelText : ''} isRequired={isRequired} />
                        </LabelWrapper>
                        : null
                }
                {
                    (Icon || Resetter)
                        ? <InsideIconsWrapper className='ssss' dir={dir ? dir : 'rtl'}>
                            {Icon ? <Icon /> : null}
                            {Resetter
                                ? <Resetter
                                    name={name}
                                    data={data}
                                    resetValue={inputResetValue ? inputResetValue : ''}
                                    iconName='formFieldResetter'
                                />
                                : null}
                        </InsideIconsWrapper>
                        : null
                }
                {
                    CharacterCounter
                        ? <CharacterCounterCmpWrapper>
                            <CharacterCounter name={name} data={data} characterCounterMaxLength={characterCounterMaxLength} />
                        </CharacterCounterCmpWrapper>

                        : null
                }
            </InputWrapper>
                {Error && <Error name={name} data={data} fontSize='0.75rem' fontWeight={400} lineHeight='1.25rem'/>}
                {!hasError && Info && <Info infoText={infoText || ''} />}
        </FormElementWrapper>
    )
}

export default Input