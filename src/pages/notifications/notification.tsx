import { FC } from 'react'
import { NotificationEntityModel } from '../../models/pages/notification'
import { NotificationItemDateAndTime, NotificationItemInfo, NotificationItemTitle, NotificationItemWrapper } from '../../styles/pages/notifications'

const NotificationItem: FC<Omit<NotificationEntityModel, 'id'>> = ({ title, date, time, description }) => {
    return (
        <NotificationItemWrapper>
            <NotificationItemTitle>
                {title}
            </NotificationItemTitle>
            <NotificationItemDateAndTime>
                <span>{time}</span>
                <span>{date}</span>
            </NotificationItemDateAndTime>
            <NotificationItemInfo>
                {description}
            </NotificationItemInfo>
        </NotificationItemWrapper>
    )
}

export default NotificationItem