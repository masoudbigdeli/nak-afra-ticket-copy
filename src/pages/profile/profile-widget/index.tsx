import { createContext, CSSProperties, useContext } from "react"
import GeneralItemWidgetWrapper, { GeneralItemWidgetContentWrapper, GeneralItemWidgetLeftContentWrapper, GeneralItemWidgetRightContentWrapper, RightContentTopWrapper, TopOutTitle } from "../../../styles/components/info-widget"
import Icon from "../../../components/icons/icon"
import Button from "../../../components/button"
import { IconName } from "../../../components/icons/icon-list"

interface widgetInfo {
    outerTitle?: string
    phoneNumber?: string
    rightIcon?: IconName
    rightText?: string
    leftButtonText?: string
    leftButtonIcon?: IconName
    route?: string
}

const useProfileContext = () => {
    const context = useContext(GeneralItemWidgetContext)
    if (!context) {
        throw new Error('useProfileContext must be inside the GeneralItemWidget!')
    }
    return context
}

interface GeneralItemWidgetContext {
    widgetInfo: widgetInfo
}

export const GeneralItemWidgetContext = createContext<GeneralItemWidgetContext | undefined>(undefined)

interface GeneralItemWidgetProps {
    widgetInfo: widgetInfo,
    children?: React.ReactNode,
}
const GeneralItemWidget = ({ children, widgetInfo }: GeneralItemWidgetProps) => {
    return (
        <GeneralItemWidgetContext.Provider value={{ widgetInfo }}>
            <GeneralItemWidgetWrapper >
                {children}
            </GeneralItemWidgetWrapper>
        </GeneralItemWidgetContext.Provider>
    )
}

export default GeneralItemWidget

GeneralItemWidget.TopOutTitle = () => {
    const { widgetInfo } = useProfileContext()
    return (
        <TopOutTitle>
            {widgetInfo.outerTitle}
        </TopOutTitle>
    )
}

interface GeneralItemWidgetContentContainerProps {
    onClick?: () => void
    children: React.ReactNode
}

GeneralItemWidget.ContentContainer = ({ children, onClick }: GeneralItemWidgetContentContainerProps) => {
    return (
        <GeneralItemWidgetContentWrapper onClick={() => onClick && onClick()}>
            {children}
        </GeneralItemWidgetContentWrapper>
    )
}

interface GeneralItemWidgetRightContent {
    textStyle?: CSSProperties
    wrapperStyle?: CSSProperties
}

GeneralItemWidget.RightContent = ({ children, textStyle, wrapperStyle }: { children: React.ReactNode } & GeneralItemWidgetRightContent) => {
    return (
        <GeneralItemWidgetRightContentWrapper TextStyle={textStyle} WrapperStyle={wrapperStyle}>
            {children}
        </GeneralItemWidgetRightContentWrapper>
    )
}

interface GeneralItemWidgetRightContentTopProps {
    textColor?: 'red' | 'black'
    wrapperStyle?: CSSProperties
}

GeneralItemWidget.RightContentTop = ({ children, textColor, wrapperStyle }: { children: React.ReactNode } & GeneralItemWidgetRightContentTopProps) => {
    return (
        <RightContentTopWrapper textColor={textColor} WrapperStyle={wrapperStyle}>
            {children}
        </RightContentTopWrapper>
    )
}

GeneralItemWidget.RightContentBottomText = () => {
    const { widgetInfo } = useProfileContext()
    if (!widgetInfo.phoneNumber) return
    return (
        <div className='bottom-text'>
            {widgetInfo.phoneNumber}
        </div>
    )
}

GeneralItemWidget.RightContentMainText = () => {
    const { widgetInfo } = useProfileContext()
    return (
        <div className='main-text'>
            {widgetInfo.rightText}
        </div>
    )
}

GeneralItemWidget.RightContentIcon = () => {
    const { widgetInfo } = useProfileContext()
    if (!widgetInfo.rightIcon) return
    return (
        <Icon iconName={widgetInfo.rightIcon} size={'1.25'} />
    )
}


GeneralItemWidget.LeftContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <GeneralItemWidgetLeftContentWrapper>
            {children}
        </GeneralItemWidgetLeftContentWrapper>
    )
}

interface LeftContentButton {
    iconName: IconName
}

GeneralItemWidget.LeftContentButton = ({ iconName }: LeftContentButton) => {
    const { widgetInfo } = useProfileContext()
    return (
        <Button
            size={'M'}
            type={'TEXT'}
            hasIcon={true}
            icon={Icon}
            iconName={iconName}
            loading={false}
            disabled={false}
            onClick={() => { }}
            title={widgetInfo.leftButtonText ? widgetInfo.leftButtonText : ''}
            style={{ padding: '0rem', height: 'max-content' }}
        />
    )
}


