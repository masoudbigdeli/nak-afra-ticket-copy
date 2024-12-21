import Icon from '../icons/icon'
import InfoWrapper from '../../styles/components/form/info'

export interface InfoProps {
    infoText: string
}

const Info = ({ infoText }: InfoProps) => {

    return (
        <InfoWrapper
        >
            <Icon iconName='circleInfo' size='1' style={{ cursor: 'default' }} />
            {infoText}
        </InfoWrapper >
    )
}

export default Info