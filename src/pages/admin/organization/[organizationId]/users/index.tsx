import { RightSidebarLayout } from "@/application/layouts/RightSidebarSubLayout"
import { AdminLayout } from "@/features/layouts/AdminLayout"
import { OrganizationNav } from "@/features/navigarion/admin/OrganizationNav"
import { OrganizationMembersTable } from "@/features/organization/organizationMembersTable/OrganizationMembersTable"
import { useRouter } from "next/router"

const parseOrganizationQuery = (query: string | string[] | undefined) => {
    if (!query) return undefined

    return typeof query === 'string' ? query : query[0]
}

const OrganizationUsersPage = () => {
    const router = useRouter()
    const {query} = router
    const {organizationId: organizationIdQuery} = query

    const organizationId = parseOrganizationQuery(organizationIdQuery) || ''

    return (
        <AdminLayout>
            <RightSidebarLayout 
                rightColumn={<OrganizationNav organizationId={organizationId} />}
            > 
                <OrganizationMembersTable 
                    organizationId={organizationId} 
                />
            </RightSidebarLayout>
        </AdminLayout>
    )
}

export default OrganizationUsersPage