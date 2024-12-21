import { ChangeEvent, FC, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Path, PathValue, UseFormReturn } from 'react-hook-form'
import { ErrorProps } from '../error'
import { InfoProps } from '../info'
import ImagePickerWrapper, { ImagePickerLabelWrapper, HideInput, ImageItemWrapper, ImagesWrapper } from '../../../styles/components/form/elements/file-picker'
import Icon from '../../icons/icon'

interface ImagePickerProps<EntityModel extends Record<string, any>> {
    name: keyof EntityModel
    data: { reactHookFormObject: UseFormReturn<EntityModel>, defaultValue: EntityModel }
    label?: string | JSX.Element
    error?: FC<ErrorProps<any>>
    info?: FC<InfoProps>
    infoText?: string
    countOfColumns: number
    maxSelection: number
    multiple?: boolean
    accept?: string
    fileVlidator?: <T>(file: File, data: T) => boolean
    onInvalidCallbak?: <T>(file: File, data: T) => void
}

const ImagePicker = <EntityModel extends Record<string, any>>({
    name,
    data,
    label: Label,
    error: Error,
    info: Info,
    infoText,
    countOfColumns,
    maxSelection,
    multiple,
    accept,
    fileVlidator,
    onInvalidCallbak,
}: ImagePickerProps<EntityModel>) => {
    const hideInputRef = useRef<HTMLInputElement | null>(null)
    const imagesWrapperRef = useRef<HTMLDivElement | null>(null)
    const [imagesWrapperWidth, setImagesWrapperWidth] = useState<number>(1)

    useLayoutEffect(() => {
        if (!imagesWrapperRef.current) return; // Ensures the element exists
        const observer = new ResizeObserver(resizer);
        observer.observe(imagesWrapperRef.current);
    
        return () => {
            observer.disconnect(); // Clean up observer on unmount
        };
    }, []);

    const resizer = useCallback((e: any) => {
        if (
            e &&
            Array.isArray(e) &&
            e.length && e[0]['contentRect'] &&
            e[0]['contentRect']['width'] &&
            typeof e[0]['contentRect']['width'] === 'number'
        ) {
            setImagesWrapperWidth(e[0]['contentRect']['width'])
        }
    }, [])

    const hasError: boolean = useMemo(() => {
        return !!(
            data.reactHookFormObject.formState.errors &&
            data.reactHookFormObject.formState.errors[name] &&
            data.reactHookFormObject.formState.errors[name]?.message
        )
    }, [data.reactHookFormObject.formState, name])

    const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const validFiles: Array<File> = []
        const processWaiting: Array<true> = []

        if (event.target && event.target.files && event.target.files.length) {
            if (multiple) {
                const previousValues: Array<File> = data.reactHookFormObject.watch(name as string as Path<EntityModel>)
                if (previousValues.length >= maxSelection) return

                for (let i = 0; i < event.target.files.length; i++) {
                    processWaiting.push(true)
                    const file = event.target.files[i]
                    const img = new Image()
                    img.src = URL.createObjectURL(file)
                    img.onload = () => {
                        processWaiting.pop()
                        if (!fileVlidator || fileVlidator<HTMLImageElement>(file, img)) {
                            validFiles.push(file)
                        } else if (onInvalidCallbak) {
                            onInvalidCallbak(file, img)
                        }
                        if (processWaiting.length === 0 && validFiles.length) {
                            if (previousValues.length + validFiles.length <= maxSelection) {
                                data.reactHookFormObject.setValue(
                                    name as string as Path<EntityModel>,
                                    [...previousValues, ...validFiles] as PathValue<EntityModel, Path<EntityModel>>,
                                    {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                        shouldTouch: true,
                                    }
                                )
                            } else {
                                const remainning: number = maxSelection - previousValues.length
                                const newValue: Array<File> = [...previousValues]

                                for (let i = 0; i < validFiles.length; i++) {
                                    if ((i + 1) <= remainning) {
                                        newValue.push(validFiles[i])
                                    }
                                }

                                data.reactHookFormObject.setValue(
                                    name as string as Path<EntityModel>,
                                    newValue as PathValue<EntityModel, Path<EntityModel>>,
                                    {
                                        shouldValidate: true,
                                        shouldDirty: true,
                                        shouldTouch: true,
                                    }
                                )
                            }
                        }
                    }
                    img.onerror = () => processWaiting.pop()
                }
            } else {
                for (let i = 0; i < event.target.files.length; i++) {
                    processWaiting.push(true)
                    const file = event.target.files[i]
                    const img = new Image()
                    img.src = URL.createObjectURL(file)
                    img.onload = () => {
                        processWaiting.pop()
                        if (!fileVlidator || fileVlidator<HTMLImageElement>(file, img)) {
                            validFiles.push(file)
                        } else if (onInvalidCallbak) {
                            onInvalidCallbak(file, img)
                        }
                        if (processWaiting.length === 0 && validFiles.length) {
                            data.reactHookFormObject.setValue(
                                name as string as Path<EntityModel>,
                                validFiles[0] as PathValue<EntityModel, Path<EntityModel>>,
                                {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                    shouldTouch: true,
                                }
                            )
                        }
                    }
                    img.onerror = () => processWaiting.pop()
                }
            }
        }
    }, [name, data, maxSelection, multiple, fileVlidator])

    const onRemove = useCallback((index?: number) => {
        if (typeof index !== 'number') {
            data.reactHookFormObject.setValue(
                name as string as Path<EntityModel>,
                null as PathValue<EntityModel, Path<EntityModel>>,
                {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                }
            )
            return
        }
        const previousValues: Array<File> = data.reactHookFormObject.watch(name as string as Path<EntityModel>)
        const newValue: Array<File> = [...previousValues]
        newValue.splice(index, 1)
        data.reactHookFormObject.setValue(
            name as string as Path<EntityModel>,
            newValue as PathValue<EntityModel, Path<EntityModel>>,
            {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
            }
        )
    }, [name, data])

    const fireInput = useCallback(() => {
        hideInputRef.current && hideInputRef.current.click()
    }, [hideInputRef])

    const fieldData: Array<File | { id: number, url: string }> | File | { id: number, url: string } | null = useMemo(() => {
        return data.reactHookFormObject.watch(name as string as Path<EntityModel>)
    }, [name, data])

    return (
        <ImagePickerWrapper>
            {Label ? <ImagePickerLabelWrapper>{Label}</ImagePickerLabelWrapper> : null}
            <HideInput type='file' ref={hideInputRef} multiple={multiple} accept={accept ? accept : 'image/*'} onChange={onInputChange} />
            <ImagesWrapper ref={imagesWrapperRef}>
                {
                    imagesWrapperRef.current?.clientWidth
                        ? <>
                            {
                                Array.isArray(fieldData)
                                    ? <>
                                        {
                                            fieldData.map((item: File | { id: number, url: string }, i: number) => (
                                                <ImageItemWrapper
                                                    countOfColumns={countOfColumns}
                                                    multiple={true}
                                                    isEmpty={false}
                                                    parentWidth={imagesWrapperWidth}
                                                    key={(i + 1).toString()}
                                                >
                                                    <div
                                                        className="remover-wrapper"
                                                        onClick={(event: any) => event.stopPropagation()}
                                                    >
                                                        <Icon
                                                            iconName='formFieldResetter'
                                                            size='1.25'
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => onRemove(i)}
                                                        />
                                                    </div>
                                                    <img src={item instanceof File ? URL.createObjectURL(item) : item.url} alt="single-file" />
                                                </ImageItemWrapper>
                                            ))
                                        }
                                        {
                                            fieldData.length < maxSelection
                                                ? <ImageItemWrapper
                                                    countOfColumns={countOfColumns}
                                                    multiple={true}
                                                    isEmpty={true}
                                                    parentWidth={imagesWrapperWidth}
                                                    onClick={fireInput}
                                                >
                                                    <Icon iconName='plus' size='1.25' style={{ cursor: 'pointer' }} />
                                                </ImageItemWrapper>
                                                : null
                                        }
                                    </>
                                    : <ImageItemWrapper
                                        countOfColumns={countOfColumns}
                                        multiple={multiple || false}
                                        isEmpty={fieldData === null}
                                        parentWidth={imagesWrapperWidth}
                                        onClick={fireInput}
                                    >
                                        {
                                            fieldData === null
                                                ? <Icon iconName='plus' size='1.25' style={{ cursor: 'pointer' }} />
                                                : <>
                                                    <div className="remover-wrapper" onClick={(event: any) => event.stopPropagation()}>
                                                        <Icon
                                                            iconName='formFieldResetter'
                                                            size='1.25'
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={onRemove}
                                                        />
                                                    </div>
                                                    <img src={fieldData instanceof File ? URL.createObjectURL(fieldData) : fieldData.url} alt="single-file" />
                                                </>
                                        }
                                    </ImageItemWrapper>
                            }
                        </>
                        : null
                }
            </ImagesWrapper>
            {
                (hasError && Error)
                    ? <Error name={name} data={data} fontSize='0.75rem' fontWeight={400} />
                    : <>{Info && <Info infoText={infoText ? infoText : ''} />}</>
            }
        </ImagePickerWrapper>
    )
}

export default ImagePicker