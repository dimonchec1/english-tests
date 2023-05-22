
const ContentHeader = ({
    title
} : {
    title: string
}) => {
    return (
        <h2 className='text-2xl font-semibold mb-8'>
            {title}
        </h2>
    )
}

export {
    ContentHeader
}