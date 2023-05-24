import LeftSidebarLayout from "@/application/layouts/LeftSidebarLayout"
import { NextRouter, useRouter } from "next/router"
import { ReactNode } from "react"
import { UserNav } from "../navigarion/UserNav"

const UserLayout = ({
    children
} : {
    children: ReactNode
}) => {
    const router = useRouter()
    const {userId: userIdQuery} = router.query

    if (!userIdQuery) {
        return (
            <h1 className='text-3xl font-bold'>
                Loading...
            </h1>
        )
    }

    const userId = typeof userIdQuery === 'string' ? userIdQuery : ''

    return (
        <LeftSidebarLayout
            leftColumn={
                <UserNav userId={userId} />
            }
        >
            {children}
        </LeftSidebarLayout>
    )
}

export {
    UserLayout
}