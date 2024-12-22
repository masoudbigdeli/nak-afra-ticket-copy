import { FC, useCallback, useState, ChangeEvent, KeyboardEvent, useEffect, useMemo } from 'react'
import OtpInputWrapper, { OtpInputElementsWrapper } from '../../../styles/components/form/elements/otp-input'
import { Path, PathValue, UseFormReturn } from 'react-hook-form'
import { ErrorProps } from '../error'
import { InfoProps } from '../info'

interface OtpInputProps<EntityModel extends Record<string, any>> {
    name: keyof EntityModel
    data: { reactHookFormObject: UseFormReturn<EntityModel>, defaultValue: EntityModel }
    error?: FC<ErrorProps<any>>
    info?: FC<InfoProps>
    infoText?: string
    countOfDigit: number
    onComplete?: () => void
}

interface CodeItem {
    index: number
    isFirst: boolean
    isLatest: boolean
    value: string
    isValid: boolean
}

const OtpInput = <EntityModel extends Record<string, any>>({
    name,
    data,
    error: Error,
    info: Info,
    infoText,
    countOfDigit,
    onComplete,
}: OtpInputProps<EntityModel>) => {
    const [code, setCode] = useState<Array<CodeItem>>(initialValue(countOfDigit))

    const isAllInputsDirty: boolean = useMemo(() => {
        const value: string = code.map((value: CodeItem) => (value.value)).join('')
        return value.length === countOfDigit
    }, [code, countOfDigit])

    const hasError: boolean = useMemo(() => {
        return !!(
            data.reactHookFormObject.formState.errors &&
            data.reactHookFormObject.formState.errors[name] &&
            data.reactHookFormObject.formState.errors[name]?.message
        )
    }, [data.reactHookFormObject.formState, name])

    useEffect(() => {
        const firstInput: HTMLElement | null = document.getElementById('nak-afra-otp-code-input-0')
        if (firstInput) {
            firstInput.focus()
        }
    }, [])

    const onItemChange = useCallback((value: string, index: number) => {
        const item: CodeItem = { ...code[index] }

        if (value === '') {
            item.value = ''
            item.isValid = false
            if (!item.isFirst) {
                document.getElementById(`nak-afra-otp-code-input-${item.index - 1}`)?.focus()
            }
        } else {
            item.value = value[0]
            item.isValid = isNaN(Number(value[0])) ? false : true
            if (!item.isLatest) {
                document.getElementById(`nak-afra-otp-code-input-${item.index + 1}`)?.focus()
            }
        }

        const newCode: Array<CodeItem> = [...code]
        newCode.splice(index, 1, item)
        setCode(newCode)

        let codeValue: string = ''
        for (let i = 0; i < newCode.length; i++) {
            codeValue = codeValue + newCode[i].value
        }

        if (codeValue.length === countOfDigit) {
            data.reactHookFormObject.setValue(
                name as string as Path<EntityModel>,
                codeValue as PathValue<EntityModel, Path<EntityModel>>,
                {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                }
            )
            if (onComplete) {
                setTimeout(() => onComplete(), 300);
            }
        }
    }, [data, name, countOfDigit, code, setCode, onComplete])

    const onKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>, index: number) => {
        ["e", "E", "+", "-", 'Shift', 'Alt', 'Control'].includes(event.key) && event.preventDefault()
        const preventCodes: Array<string> = ['Space', 'Enter', 'ArrowUp', 'ArrowDown']
        if (preventCodes.includes(event.code)) event.preventDefault()
        const item: CodeItem = { ...code[index] }
        if (event.code === 'Backspace') {
            item.value = ''
            item.isValid = false
            const newCode: Array<CodeItem> = [...code]
            newCode.splice(index, 1, item)
            setCode(newCode)
            if (!item.isFirst) {
                document.getElementById(`nak-afra-otp-code-input-${item.index - 1}`)?.focus()
            }
            event.preventDefault()
        }
        if (event.code === 'ArrowLeft') {
            if (!item.isFirst) {
                document.getElementById(`nak-afra-otp-code-input-${item.index - 1}`)?.focus()
            }
            event.preventDefault()
        }
        if (event.code === 'ArrowRight') {
            if (!item.isLatest) {
                document.getElementById(`nak-afra-otp-code-input-${item.index + 1}`)?.focus()
            }
            event.preventDefault()
        }
    }, [countOfDigit, code, setCode])

    return (
        <OtpInputWrapper>
            <OtpInputElementsWrapper hasError={hasError}>
                {
                    code.map((item: CodeItem) => (
                        <input
                            id={`nak-afra-otp-code-input-${item.index}`}
                            key={item.index}
                            className={(hasError && isAllInputsDirty) ? 'error' : ''}
                            value={item.value}
                            // type='number'
                            inputMode='numeric'
                            placeholder=' '
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                onItemChange(event.target.value, item.index)
                            }}
                            onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                                onKeyDown(event, item.index)
                            }}
                        />
                    ))
                }
            </OtpInputElementsWrapper>
            {
                (hasError && Error)
                    ? <Error name={name} data={data} fontSize='0.75rem' fontWeight={400} />
                    : <>{Info && <Info infoText={infoText ? infoText : ''} />}</>
            }
        </OtpInputWrapper>
    )
}

export default OtpInput

const initialValue = (countOfDigit: number): Array<CodeItem> => {
    const initState: Array<CodeItem> = []
    for (let i = 0; i < countOfDigit; i++) {
        initState.push({
            index: i,
            isFirst: i === 0 ? true : false,
            isLatest: i === (countOfDigit - 1) ? true : false,
            value: '',
            isValid: false,
        })
    }
    return initState
}