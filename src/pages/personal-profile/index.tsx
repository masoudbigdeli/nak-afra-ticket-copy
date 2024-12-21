import { FC } from 'react'
import ProfileDetailItem from '../../components/profile-detail-item'
import { personalProfileDataS2CMiddleware } from '../../services-data-middleware/server-to-client/profile'
import { t } from 'i18next'
import PagesContainer from '../../styles/general/pages-container'
import PersonalProfilePageWrapper from '../../styles/pages/personal-profile'
import useStore from '../../state-management/store'
import StoreModel from '../../models/store-model'
import PROFILE_TYPE from '../../enums/profile-type'

const PersonalProfile: FC = () => {
    const user = useStore((store: StoreModel) => store['user'])
    const profileData = personalProfileDataS2CMiddleware(user ? user : undefined)

    return (
        <PagesContainer style={{ overflowY: 'auto' }}>
                <PersonalProfilePageWrapper>
                {Object.entries(profileData).map(([key, value]) => (
                    <ProfileDetailItem
                        key={key}
                        title={t(`profilePage.${key}`)}
                        content={key === 'type' ? (value === PROFILE_TYPE.PERSONAL ? t('profilePage.personal')
                            : '') : value}
                    />
                ))}
            </PersonalProfilePageWrapper>
        </PagesContainer>
    )
}

export default PersonalProfile