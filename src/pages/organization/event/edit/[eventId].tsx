import LeftSidebarLayout from "@/application/layouts/LeftSidebarLayout"
import { InputWithLabel } from "@/shared/ui/inputs/inputWithLabel/InputWithLabel"
import { api } from "@/utils/api"
import { useRouter } from "next/router"
import { useState } from 'react';

const EditingNavigation = () => {
    return (
        <h5>Редактирование теста</h5>
    )
}

const TestEditingContent = ({
    eventId
} : {
    eventId: string
}) => {

    const [eventName, setEventName] = useState('')

    api.event.event.useQuery({eventId}, {
        onSuccess(data) {
            if (data) {
                setEventName(data.name)
            }
        },
    })

    return (
        <div className='space-y-4'>
            <div className='font-bold text-3xl'>Информация курса</div>
            <InputWithLabel
                value={eventName}
                onChange={e => setEventName(e.target.value)}
                labelText='Название мероприятия'
            />
        </div>
    )
}

const EditingContent = () => {
    const router = useRouter()
    const {eventId: eventIdQuery} = router.query
    
    if (!eventIdQuery) {
        return (
            <h1 className='text-3xl font-bold'>
                Loading...
            </h1>
        )
    }

    const eventId = typeof eventIdQuery[0] === 'string' ? eventIdQuery![0] : ''

    return (
        <div className='flex gap-4 h-full'>
            <div className='flex-grow h-full pt-8 px-4'>
                <TestEditingContent
                    eventId={eventId}
                />
            </div>
            <div className='pt-8 w-40'>
                <EditingNavigation />
            </div>
        </div>
    )
}

const TestEdit = () => {
    return (
        <LeftSidebarLayout
            leftColumn={<div></div>}
        >
            <EditingContent />
        </LeftSidebarLayout>
    )
}

export default TestEdit