import { CSSProperties } from 'react'
import TabsWrapper, { TabItem } from '../../styles/components/tabs'

export interface Tab<T extends any> {
    id: number | string
    label: string
    value: T
}

interface TabsProps<T extends any> {
    tabs: Array<Tab<T>>
    activeTab: Tab<T>
    tabWrapperStyle?: CSSProperties
    tabStyle?: CSSProperties
    onTabClick: (tab: Tab<T>) => void
}
const Tabs = <T extends any>(
    {
        tabs,
        activeTab,
        tabWrapperStyle,
        tabStyle,
        onTabClick,
    }: TabsProps<T>
) => {
    return (
        <TabsWrapper style={tabWrapperStyle}>
            {tabs.map((tab: Tab<T>) => (
                <TabItem
                    key={tab.id}
                    style={tabStyle}
                    isCurrent={activeTab.id === tab.id}
                    onClick={() => onTabClick(tab)}
                >
                    {tab.label}
                </TabItem>
            ))}
        </TabsWrapper>
    );
}

export default Tabs