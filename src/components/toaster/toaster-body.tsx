import { FC } from 'react'
import ToasterBodyWrapper from '../../styles/components/toaster'
import Icon from '../icons/icon'
import { IconName } from '../icons/icon-list'

interface ToasterBodyProps {
  title: string
  iconName?: IconName
}

const ToasterBody: FC<ToasterBodyProps> = ({ title, iconName }) => {
  return (
    <ToasterBodyWrapper justifyContent='center'>
      {iconName ? (
        <Icon
          iconName={iconName}
          size='1.25'
          style={{
            marginLeft: '0.5rem',
          }}
        />
      ) : null}
      <span className='title'>{title}</span>
    </ToasterBodyWrapper>
  )
}

export default ToasterBody
