import LeftSidebarLayout from "@/application/layouts/LeftSidebarLayout"
import { AddNewButton } from "@/entities/buttons/AddNewButton"
import { EventsList } from "@/features/events/EventsList"
import { EventLayout } from "@/features/layouts/EventsLayout"
import { PageContent } from "@/features/layouts/PageContent"
import { EditTestNavigation } from "@/features/navigarion/EditEventNavigation"
import { ContentHeader } from "@/shared/ui/headers/ContentHeader"
import { NextRouter, useRouter } from "next/router"

const redirectToCreateEvent = (router: NextRouter) => {
    router.push('/creator/event/create')
}

const EventEditPreview = () => {
    console.log('load')

    return (
        <EventLayout>
            <PageContent>
                <ContentHeader title='Мероприятия' />
                <EventsList />
            </PageContent>
        </EventLayout>
    )
}

export default EventEditPreview