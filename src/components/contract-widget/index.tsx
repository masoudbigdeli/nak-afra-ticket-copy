import { FC, useCallback } from "react"
import ContractWidgetWrapper, { ContractCodeWrapper, ContractMainInfoIconWrapper, ContractMainInfoWrapper, ContractNameAndStatusWrapper, RemainingTimeInfoTextWrapper, RemainingTimeInfoWrapper } from "../../styles/components/contract-widget"
import Icon from "../icons/icon"
import ProgressBar from "../progress-bar"
import Button from "../button"
import CONTRACT_STATUS_TYPE from "../../enums/contract-status-type"
import { useNavigate } from "react-router-dom"
import { pathGenerator } from "../../enums/path-of-routes"
import { ContractEntityModel } from "../../models/pages/contract"
import { useTranslation } from "react-i18next"
import Badge from "../../styles/components/badge"
import BADGE_TYPE from "../../enums/badge-type"

const ContractWidget: FC<ContractEntityModel> = ({ id: contractId, contractNumber, siteCode, status, contractDuration, contractRemaining }) => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const redirectTo = useCallback((id: number) => navigate(pathGenerator.CONTRACT_DETAIL!(id?.toString())), [pathGenerator])

    return (
        <ContractWidgetWrapper>
            <ContractMainInfoWrapper>
                <ContractMainInfoIconWrapper>
                    <Icon iconName='contractWidget' size='1.5' />
                </ContractMainInfoIconWrapper>
                <ContractNameAndStatusWrapper>
                    <div className="text">{contractNumber}</div>
                    <Badge badgeType={status === CONTRACT_STATUS_TYPE.ACTIVE ? BADGE_TYPE.GREEN : BADGE_TYPE.ORANGE}>
                        {status === CONTRACT_STATUS_TYPE.EXPIRED ? t('contractPage.expiredContract') : t('contractPage.activeContract')}
                    </Badge>
                </ContractNameAndStatusWrapper>
                <ContractCodeWrapper>
                    {siteCode}
                </ContractCodeWrapper>
            </ContractMainInfoWrapper>
            <RemainingTimeInfoWrapper hasBorderBottom={true}>
                <ProgressBar
                    scopeMaximumValue={contractDuration}
                    currentValue={contractDuration - contractRemaining}
                    hasError={isNaN(contractRemaining) || isNaN(contractDuration)}
                />
                <RemainingTimeInfoTextWrapper>
                    {
                        isNaN(contractRemaining) || isNaN(contractDuration)
                            ? t('contractPage.invalidContractInfo')
                            : <>
                                <span className='black-text'>
                                    {`${contractRemaining} `}
                                    {t('contractPage.days')}
                                </span>
                                &nbsp;
                                <span className='gray-text'>
                                    {t('contractPage.remainsFromContracrDays')}
                                </span>
                            </>
                    }
                </RemainingTimeInfoTextWrapper>
            </RemainingTimeInfoWrapper>
            <Button
                size={'M'}
                type={'TEXT'}
                hasIcon={true}
                icon={Icon}
                iconName='backArrowHeadGreen'
                loading={false}
                disabled={false}
                onClick={() => contractId && redirectTo(contractId)}
                title={t('contractPage.showDetails')}
                style={{ display: 'flex', justifyContent: 'flex-start', padding: '0rem', height: 'max-content' }}
            />
        </ContractWidgetWrapper>
    )
}

export default ContractWidget