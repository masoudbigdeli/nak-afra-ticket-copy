import { DOMAttributes, useMemo, MouseEvent, useCallback, CSSProperties } from 'react'
import FormElementWrapper from '../../../styles/components/form'
import { CharacterCounterCmpWrapper, TextareaUi, TextareaWrapper, InsideIconsWrapper, LabelWrapper } from '../../../styles/components/form/elements/textarea'
import { FormElementBaseProps } from '../index'

export interface TextareaProps<EntityModel extends Record<string, any>> extends FormElementBaseProps<EntityModel>, DOMAttributes<HTMLTextAreaElement> {
    minHeight?: CSSProperties['minHeight']
    maxHeight?: CSSProperties['maxHeight']
    labelStyle?: CSSProperties | undefined
}

const Textarea = <EntityModel extends Record<string, any>>({
    name,
    data,
    registerOptions,
    label: Label,
    error: Error,
    icon: Icon,
    resetter: Resetter,
    info: Info,
    characterCounter: CharacterCounter,
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
    minHeight,
    maxHeight,
    ...rest
}: TextareaProps<EntityModel>) => {

    const hasError: boolean = useMemo(() => {
        return !!(
            data.reactHookFormObject.formState.errors &&
            data.reactHookFormObject.formState.errors[name] &&
            data.reactHookFormObject.formState.errors[name]?.message
        )
    }, [data.reactHookFormObject.formState, name])

    const onLabelClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.currentTarget.parentElement?.querySelector('textarea')?.focus()
    }, [])

    return (
        <FormElementWrapper>
            <TextareaWrapper>
                <TextareaUi
                    key={name.toString()}
                    defaultValue={data.defaultValue[name]}
                    size={size}
                    error={hasError}
                    disabled={disabled}
                    borderHide={borderHide}
                    hasIcon={!!(Icon)}
                    hasResetter={!!(Resetter)}
                    dir={dir}
                    minHeight={minHeight}
                    maxHeight={maxHeight}
                    placeholder=' '
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
            </TextareaWrapper>
            {Error && <Error name={name} data={data} fontSize='0.75rem' fontWeight={400} lineHeight='1.25rem' />}
            {!hasError && Info && <Info infoText={infoText ? infoText : ''} />}
        </FormElementWrapper>
    )
}

export default Textarea