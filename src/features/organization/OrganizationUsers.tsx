import { api } from "@/utils/api"

const OrganizationUsers = ({
    organizationId
}: {
    organizationId: string
}) => {
    const {data: users} = api.organization.users.useQuery({
        organizationId
    })

    console.log(users, 'ursers')

    return (
        <div>Участники организации</div>
    )
}

export {
    OrganizationUsers
}