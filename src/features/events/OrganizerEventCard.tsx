
const OrganizerEventCard = ({
    onClick,
    title,
    date,
    status
} : {
    onClick: () => void
    title: string
    status: string
    date: string
}) => {
    return (
        <div 
            className='rounded border border-sky-600 h-20 px-2 py-1 cursor-pointer'
            onClick={onClick}    
        >
            <div className='w-full flex justify-between'>
                <div> {title}</div>
                <div>{date}</div>
            </div>
            <div className='flex flex-row-reverse'>
                <div> {status}</div>
            </div>
        </div>
    )
}

export {
    OrganizerEventCard
}