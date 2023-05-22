import LeftSidebarLayout from "@/application/layouts/LeftSidebarLayout"
import { AddNewButton } from "@/entities/buttons/AddNewButton"
import { EditTestNavigation } from "@/features/navigarion/EditEventNavigation"
import { NextRouter, useRouter } from "next/router"
import { ReactNode } from "react"

const redirectToCreateEvent = (router: NextRouter) => {
    router.push('/organization/event/create')
}

const EventLayout = ({
    children
} : {
    children: ReactNode
}) => {
    const router = useRouter()

    const handleAddNewEventClicked = () => {
        redirectToCreateEvent(router)
    }

    return (
        <LeftSidebarLayout
            leftColumn={
                <EditTestNavigation
                    enhancer={
                        <AddNewButton 
                            onClick={handleAddNewEventClicked} 
                        >
                            Новое мероприятие
                        </AddNewButton>
                    } 
                />
            }
        >
            {children}
        </LeftSidebarLayout>
    )
}

export {
    EventLayout
}