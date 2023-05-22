import { Loading } from "@/shared/ui/Loading"
import { api } from "@/utils/api"
import { OrganizerEventCard } from "./OrganizerEventCard"
import { NextRouter, useRouter } from "next/router"

const goToEditEventPage = (router: NextRouter, eventId: string) => {
    router.push(`/organization/event/edit/${eventId}`)
}

const EventsList = () => {
    const {data: events} = api.event.events.useQuery()
    const router = useRouter()

    if (!events) {
        return <Loading />
    }

    const handleEventClick = (eventId: string) => () => {
        goToEditEventPage(router, eventId)
    }

    return (
        <div className='space-y-4'>
            {
                events.map(event => (
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