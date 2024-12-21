import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import {
    AccessWidgetClosedInfoWrapper,
    AccessWidgetTBottomCardsWrapper,
    AccessWidgetTBottomDateTextsWrapper,
    AccessWidgetTBottomDateWrapper,
    AccessWidgetTBottomExplanationTextsWrapper,
    AccessWidgetTBottomExplanationWrapper,
    AccessWidgetTBottomHeaderWrapper,
    AccessWidgetTBottomWrapper,
    AccessWidgetTopContentWrapper,
    AccessWidgetTopWrapper,
    AccessWidgetWrapper
} from "../../styles/pages/accesses"
import Icon from "../../components/icons/icon"
import { AccessEntityModel } from "../../models/pages/accesses"
import ACCESS_DATE_TIME_TYPE from "../../enums/access-data-time-type"

const Access = (access: AccessEntityModel) => {
    const [extended, setExtended] = useState<boolean>(false)
    const { t } = useTranslation()

    const accessDetailsHandler = useCallback(() => setExtended(prev => !prev), [setExtended])

    return (
        <AccessWidgetWrapper>
            <AccessWidgetTopWrapper>
                <AccessWidgetTopContentWrapper extended={extended}>
                    <div className='name'>{access.personName}</div>
                    <AccessWidgetClosedInfoWrapper type={ACCESS_DATE_TIME_TYPE.ENTER}>
                        {`${t('accessesPage.firstEnterance')}: `}
                        {access?.startDate} {`${t('accessesPage.time')} `}
                        {access?.startTime}</AccessWidgetClosedInfoWrapper>
                </AccessWidgetTopContentWrapper>
                <Icon
                    iconName={extended ? 'arrowUp' : 'arrowDown'}
                    size='2'
                    onClick={accessDetailsHandler}
                />
            </AccessWidgetTopWrapper>
            <AccessWidgetTBottomWrapper extended={extended}>
                <AccessWidgetTBottomHeaderWrapper>
                    <div className="top-text">{access.personName}</div>
                    <div className="bottom-text">{access.personDescription}</div>
                </AccessWidgetTBottomHeaderWrapper>
                <AccessWidgetTBottomCardsWrapper>
                    <AccessWidgetTBottomDateWrapper>
                        <Icon iconName='enter' size='1.5' />
                        <AccessWidgetTBottomDateTextsWrapper>
                            <div className='top-text'>{t('accessesPage.firstEnterance')}</div>
                            <AccessWidgetClosedInfoWrapper type={ACCESS_DATE_TIME_TYPE.ENTER}>
                                {access?.startDate} {`${t('accessesPage.time')} `}
                                {access?.startTime}
                            </AccessWidgetClosedInfoWrapper>
                        </AccessWidgetTBottomDateTextsWrapper>
                    </AccessWidgetTBottomDateWrapper>
                    <AccessWidgetTBottomDateWrapper>
                        <Icon iconName='exit' size='1.5' />
                        <AccessWidgetTBottomDateTextsWrapper>
                            <div className='top-text'>{t('accessesPage.lastExit')}</div>
                            <AccessWidgetClosedInfoWrapper type={ACCESS_DATE_TIME_TYPE.EXIT}>
                                {access?.endDate} {`${t('accessesPage.time')} `}
                                {access?.endTime}
                            </AccessWidgetClosedInfoWrapper>
                        </AccessWidgetTBottomDateTextsWrapper>
                    </AccessWidgetTBottomDateWrapper>
                    <AccessWidgetTBottomExplanationWrapper>
                        <Icon iconName='explanation' size='1.5' />
                        <AccessWidgetTBottomExplanationTextsWrapper>
                            <div className='top-text'>
                                {t('accessesPage.explanation')}
                            </div>
                            <div className='bottom-text'>
                                {access.description}
                            </div>
                        </AccessWidgetTBottomExplanationTextsWrapper>
                    </AccessWidgetTBottomExplanationWrapper>
                </AccessWidgetTBottomCardsWrapper>
            </AccessWidgetTBottomWrapper>
        </AccessWidgetWrapper>
    )
}

export default Access