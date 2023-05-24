import { Loading } from "@/shared/ui/Loading"
import { api } from "@/utils/api"
import { OrganizerEventCard } from "./OrganizerEventCard"
import { NextRouter, useRouter } from "next/router"
import { ActionButton } from '@/entities/buttons/ActionButton';
import { useState } from 'react';

const goToEditEventPage = (router: NextRouter, eventId: string) => {
    router.push(`/organization/event/edit/${eventId}`)
}

const EventsList = ({withFilter} : {withFilter?: boolean}) => {
    const {data: events} = api.event.events.useQuery()
    const router = useRouter()
    const [search, setSearch] = useState('')

    if (!events) {
        return <Loading />
    }

    const handleEventClick = (eventId: string) => () => {
        goToEditEventPage(router, eventId)
    }

    const handleSearchEvents = () => {
        //do some backend search
    }

    return (
        <div className='space-y-4 h-full'>
            {withFilter && (
                <div className='border rounded h-24 my-8 items-center flex px-4 rounded-lg gap-4'>
                    <input
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        className='h-10 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-grey/10 
                            focus:ring-2 outline-none focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6'
                        type='text'
                        placeholder='Название мероприятия...'
                    />
                    <ActionButton onClick={handleSearchEvents}>
                        Поиск
                    </ActionButton>
                    <ActionButton onClick={handleSearchEvents}>
                        Дата
                    </ActionButton>
                </div>
            )}
            {
                events
                    .filter(event => event.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                    .map(event => (
                        <OrganizerEventCard 
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