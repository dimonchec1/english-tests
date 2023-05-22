
const OrganizerEventCard = ({
    onClick,
    title
} : {
    onClick: () => void
    title: string
}) => {
    return (
        <div 
            className='rounded border border-sky-600 h-20 px-2 py-1 cursor-pointer'
            onClick={onClick}    
        >
            {title}
        </div>
    )
}

export {
    OrganizerEventCard
}