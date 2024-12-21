import { ContractDetailSubContentWrapper } from "../../../styles/pages/contracts"

interface DetailSubItemProps {
    subTitle: string
    infoText: string | number
}

const DetailSubItem = ({ subTitle, infoText }: DetailSubItemProps) => {
    return (
        <ContractDetailSubContentWrapper>
            <div className='sub-title'>{subTitle}:</div>&nbsp;
            <div className='info-text'>{infoText}</div>
        </ContractDetailSubContentWrapper>
    )
}

export default DetailSubItem