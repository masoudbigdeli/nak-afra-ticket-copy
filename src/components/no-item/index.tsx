import { FC } from "react"
import NoItemImage from "./no-item-image"
import NoItemWrapper, { NoItemTextWrapper } from "../../styles/components/no-item"

interface NoItemProps {
    text: string
    loading: boolean
}

const NoItem: FC<NoItemProps> = ({ text, loading }) => {
    return (
        <>
            {
                !loading
                    ? <NoItemWrapper>
                        < NoItemImage />
                        <NoItemTextWrapper>
                            {text}
                        </NoItemTextWrapper>
                    </NoItemWrapper >
                    : null
            }
        </>
    )
}

export default NoItem