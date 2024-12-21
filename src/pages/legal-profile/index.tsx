import { FC } from 'react'
import ProfileDetailItem from '../../components/profile-detail-item'
import { personalProfileDataS2CMiddleware } from '../../services-data-middleware/server-to-client/profile'
import { t } from 'i18next'
import PagesContainer from '../../styles/general/pages-container'
import LegalProfilePageWrapper from '../../styles/pages/legal-profile'
import useStore from '../../state-management/store'
import StoreModel from '../../models/store-model'
import PROFILE_TYPE from '../../enums/profile-type'

const LegalProfile: FC = () => {
    const user = useStore((store: StoreModel) => store['user'])
    const profileData = personalProfileDataS2CMiddleware(user ? user : undefined)

    return (
        <PagesContainer style={{ maxHeight: '100%', overflowY: 'auto' }}>
            <LegalProfilePageWrapper>
                {Object.entries(profileData).map(([key, value]) => (
                    <ProfileDetailItem
                        key={key}
                        title={t(`profilePage.${key}`)}
                        content={key === 'type' ? (value === PROFILE_TYPE.LEGAL
                            ? t('profilePage.legal')
                            : '') : value}
                    />
                ))}
            </LegalProfilePageWrapper>
        </PagesContainer>
    )
}

export default LegalProfile
