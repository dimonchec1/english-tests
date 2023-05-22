
const CategoryHeader = ({
    title
} : {
    title: string
}) => {
    return (
        <h3 className='text-xl font-medium mb-4'>
            {title}
        </h3>
    )
}

export {
    CategoryHeader
}