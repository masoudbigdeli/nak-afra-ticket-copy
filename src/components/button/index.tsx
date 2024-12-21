import { CSSProperties, FC, MouseEvent, useCallback, useMemo } from 'react'
import ButtonWrapper, { ButtonTitle, ButtonWrapperProps } from '../../styles/components/button'
import { IconProps } from '../icons/icon'
import { IconName } from '../icons/icon-list'
import { IconWrapperProps } from '../../styles/components/icons'
import ButtonLoading from './button-loading'

interface ButtonBaseProps extends ButtonWrapperProps {
    title: string
    loading: boolean
    onClick: (event: MouseEvent<HTMLDivElement>) => void
}

interface ButtonWithIconProps extends Omit<ButtonBaseProps, 'hasIcon'> {
    hasIcon: true
    icon: FC<IconProps>
    iconName: IconName
}

interface ButtonWithoutIconProps extends Omit<ButtonBaseProps, 'hasIcon'> {
    hasIcon: false
    icon?: undefined
    iconName?: undefined
}

export type ButtonProps = ButtonWithIconProps | ButtonWithoutIconProps

const Button: FC<ButtonProps> = ({ size, type, disabled, width, title, loading, hasIcon, icon: Icon, iconName, style, onClick }) => {
    const iconSize: IconWrapperProps['size'] = useMemo(() => {
        if (size === 'XS' || size === 'S') return '1'
        if (size === 'M' || size === 'L') return '1.25'
        return '1.5'
    }, [size])

    const iconStyle: CSSProperties = useMemo(() => {
        if (disabled) return { cursor: 'not-allowed' }
        return { cursor: 'pointer' }
    }, [disabled])

    const onClickHandler = useCallback((event: MouseEvent<HTMLDivElement>) => {
        if (disabled || loading) return
        onClick(event)
    }, [disabled, loading, onClick])

    return (
        <ButtonWrapper
            size={size}
            type={type}
            disabled={disabled}
            width={width}
            hasIcon={hasIcon}
            style={style}
            onClick={onClickHandler}
        >
            {
                loading
                    ? <ButtonLoading type={type} />
                    : <>
                        {
                            title ? (
                                <ButtonTitle
                                    size={size}
                                >
                                    {title}
                                </ButtonTitle>
                            ) : null
                        }

                        {(Icon && iconName)
                            ? <Icon
                                iconName={iconName}
                                size={iconSize}
                                style={iconStyle}
                            />
                            : null
                        }
                    </>
            }
        </ButtonWrapper>
    )
}

export default Button