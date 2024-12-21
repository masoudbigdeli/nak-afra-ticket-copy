import { CSSProperties, FC } from 'react'
import LabelWrapper from '../../styles/components/form/label'

export interface LabelProps {
    labelText: string | JSX.Element
    isRequired?: boolean
    style: CSSProperties
}

const Label: FC<LabelProps> = ({ labelText, isRequired, style }) => {

    return (
        <LabelWrapper style={style}>
            {labelText}
            {isRequired ? <span style={{ color: 'red' }}>*</span> : null}
        </LabelWrapper>
    )
}

export default Label