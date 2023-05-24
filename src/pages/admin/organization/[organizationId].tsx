import { RightSidebarLayout } from "@/application/layouts/RightSidebarSubLayout"
import { AdminLayout } from "@/features/layouts/AdminLayout"
import { OrganizationNav } from "@/features/navigarion/admin/OrganizationNav"
import { AdminOrganizationContent } from "@/features/organization/AdminOrganizationContent"
import { api } from "@/utils/api"
import { useRouter } from "next/router"

const parseOrganizationQuery = (query: string | string[] | undefined) => {
    if (!query) return undefined

    return typeof query === 'string' ? query : query[0]
}

const OrganizationPage = () => {
    const router = useRouter()
    const {query} = router
    const {organizationId: organizationIdQuery} = query

    const organizationId = parseOrganizationQuery(organizationIdQuery) || ''

    console.log(organizationIdQuery, organizationId)

    return (
        <AdminLayout>
            <RightSidebarLayout 
                rightColumn={<OrganizationNav organizationId={organizationId} />}
            > 
                <AdminOrganizationContent organizationId={organizationId} />
            </RightSidebarLayout>
        </AdminLayout>
    )
}

export default OrganizationPage