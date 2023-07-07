import { Loading } from "@/shared/ui/Loading"
import { api } from "@/utils/api"
import { OrganizerEventCard } from "./OrganizerEventCard"
import { NextRouter, useRouter } from "next/router"
import { ActionButton } from '@/entities/buttons/ActionButton';
import { useState } from 'react';
import { DatePicker } from "@mui/x-date-pickers";

const goToEditEventPage = (router: NextRouter, eventId: string) => {
    router.push(`/organization/event/edit/${eventId}`)
}

const goToEventPage = (router: NextRouter, eventId: string) => {
    router.push(`/organization/event/${eventId}`)
}

const EventsList = ({editMode} : {editMode?: boolean}) => {
    const {data: events} = api.event.events.useQuery()
    const router = useRouter()
    const [search, setSearch] = useState('')

    if (!events) {
        return <Loading />
    }

    const handleEventClick = (eventId: string) => () => {
        if (editMode) {
            goToEditEventPage(router, eventId)
        } else {
            goToEventPage(router, eventId)
        }
    }

    const handleSearchEvents = () => {
        //do some backend search
    }

    const hardCodedData = [
        {
            date: '19.05.2023',
            status: 'Текущее'
        },
        {
            date: '17.05.2023',
            status: 'Прошедшее'
        },
        {
            date: '20.05.2023',
            status: 'Предстоящее'
        }
    ]

    return (
        <div className='space-y-4 h-full'>
            {!editMode && (
                <div className='border rounded h-20 my-8 items-center flex px-4 rounded-lg gap-4'>
                    <input
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        className='h-10 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-grey/10 
                            focus:ring-2 outline-none focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6'
                        type='text'
                        placeholder='Название мероприятия...'
                    />
                    <DatePicker className='w-48' label="Дата начала" 
                    slotProps={{ textField: { size: 'small' } }} />
                    <DatePicker
                        slotProps={{ textField: { size: 'small' } }} 
                     className='w-48' label="Дата окончания" />
                    <ActionButton onClick={handleSearchEvents}>
                        Поиск
                    </ActionButton>
                </div>
            )}
            {
                events
                    .filter(event => event.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                    .map((event, index) => (
                        <OrganizerEventCard 
                            date={hardCodedData[index]!.date}
                            status={hardCodedData[index]!.status}
                            title={event.name}
                            onClick={handleEventClick(event.id)}
                        />
                    ))
            }
        </div>
    )
}

export {
    EventsList
}