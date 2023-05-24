import { ContentHeader } from "@/shared/ui/headers/ContentHeader"
import { api } from "@/utils/api"

const AdminOrganizationContent = ({
    organizationId
} : {
    organizationId: string
}) => {
    const {data: organization} = api.organization.organization.useQuery({
        organizationId
    })

    if (!organization) {
        return <div>Поиск организации...</div>
    }

    return (
        <>
            <ContentHeader title={organization.name} />
        </>
    )
}

export {
    AdminOrganizationContent
}