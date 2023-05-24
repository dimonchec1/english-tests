import LeftSidebarLayout from "@/application/layouts/LeftSidebarLayout"
import { AddNewButton } from "@/entities/buttons/AddNewButton"
import { EditTestNavigation } from "@/features/navigarion/EditEventNavigation"
import { NextRouter, useRouter } from "next/router"
import { ReactNode } from "react"
import { AdminNavigation } from "../navigarion/AdminNavigation"

const redirectToCreateEvent = (router: NextRouter) => {
    router.push('/organization/event/create')
}

const AdminLayout = ({
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
                <AdminNavigation />
            }
        >
            {children}
        </LeftSidebarLayout>
    )
}

export {
    AdminLayout
}