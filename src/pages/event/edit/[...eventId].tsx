import EditEventLayout from "@/application/layouts/EditEventLayout"
import { InputWithLabel } from "@/shared/ui/inputs/inputWithLabel/InputWithLabel"
import { api } from "@/utils/api"
import { useRouter } from "next/router"
import { useState } from 'react';

const EditingNavigation = () => {
    return (
        <h5>Редактирование теста</h5>
    )
}

const TestEditingContent = () => {
    const router = useRouter()
    const {eventId} = router.query

    if (!eventId) {
        return (
            <h1 className='text-3xl font-bold'>
                Loading...
            </h1>
        )
    }

    const [eventName, setEventName] = useState('')

    api.event.event.useQuery({eventId: typeof eventId![0] === 'string' ? eventId![0] : ''}, {
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

    return (
        <div className='flex gap-4 h-full'>
            <div className='flex-grow border-x h-full pt-8 px-4'>
                <TestEditingContent />
            </div>
            <div className='pt-8 w-40'>
                <EditingNavigation />
            </div>
        </div>
    )
}

const TestEdit = () => {
    return (
        <EditEventLayout>
            <EditingContent />
        </EditEventLayout>
    )
}

export default TestEdit