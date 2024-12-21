
interface NoItemComponentProps {
    pageName: string
}

const NoItemComponent = ({ pageName }: NoItemComponentProps) => {
    return (
        <>{pageName}</>
    )
}

export default NoItemComponent