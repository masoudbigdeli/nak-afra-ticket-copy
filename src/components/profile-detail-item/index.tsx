import React from 'react'
import ProfileDetailItemWrapper from '../../styles/components/profile-detail-item'

interface ProfileDetailItemProps {
    title: string
    content: string | number
}

const ProfileDetailItem: React.FC<ProfileDetailItemProps> = ({ title, content }) => {
    return (
        <ProfileDetailItemWrapper>
            <div className='title-text'>{title}</div>
            <div className='content-text'>{content}</div>
        </ProfileDetailItemWrapper>
    )
}

export default ProfileDetailItem
