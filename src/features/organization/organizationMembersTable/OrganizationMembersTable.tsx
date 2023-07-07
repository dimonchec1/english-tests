import { api } from "@/utils/api"
import { Organization, OrganizationMember, User } from '@prisma/client'
import Table from "../organizationsTable/Table"

enum ColType {
    Name, 
    Date
}

const getHeadContent = (colIndex: number) => {
    switch (colIndex) {
        case ColType.Name: 
            return 'Имя'
        case ColType.Date:
            return 'Дата добавления'
    }

    return <div>head</div>
}

const getCellContent = (rowIndex: number, colIndex: number, organizationMember: OrganizationMember & { user: User; }) => {
    switch (colIndex) {
        case ColType.Name: 
            return organizationMember.user.username
        case ColType.Date:
            return <div>{organizationMember.createdAt.toLocaleDateString()}</div>
    }

    return <div>cell</div>
}

const OrganizationMembersTable = ({
    organizationId
}: {
    organizationId: string
}) => {
    const {data: users} = api.organization.users.useQuery({
        organizationId
    })

    if (!users) {
        return <div>'Loading...'</div>
    }

    const onRowClick = (rowIndex: number) => {
    }

    return (
        <Table 
            colCount={users.length}
            data={users}
            getHeadContent={getHeadContent}
            getCellContent={getCellContent} 
            onRowClick={onRowClick}
        />
    )
}

export {
    OrganizationMembersTable
}