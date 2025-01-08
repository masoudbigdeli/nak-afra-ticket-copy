import { ContractDetailWidgetContentWrapper, ContractDetailWidgetTitleWrapper, ContractWidgetsWithTitleWrapper } from '../../../styles/pages/contracts'

interface ContractDetailWidgetProps {
    title?: string
    children: React.ReactNode,
}

const ContractDetailWidget = ({ children, title }: ContractDetailWidgetProps) => {
    return (
        <ContractWidgetsWithTitleWrapper>
            {title && <ContractDetailWidgetTitleWrapper>
                {title}
            </ContractDetailWidgetTitleWrapper>}
            <ContractDetailWidgetContentWrapper>
                {children}
            </ContractDetailWidgetContentWrapper>
        </ContractWidgetsWithTitleWrapper>
    )
}

export default ContractDetailWidget