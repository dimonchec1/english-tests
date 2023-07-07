import { api } from "@/utils/api"
import Table from "./Table"
import Placeholder from "./Placeholder"
import { Loading } from "@/shared/ui/Loading"
import { Pagination } from "./Pagination"
import { useRouter } from "next/router"

enum ColType {
    Name, 
    Date,
    Members,
    EventsCount
}

interface OrganizationTableInfoType {
    organizationId: string
    organizationName: string
    createdAt: Date
    organizationMembersCount: number
    totalEventsCount: number
}

const colCount = 4

const getHeadContent = (colIndex: number) => {
    switch (colIndex) {
        case ColType.Name: 
            return 'Название'
        case ColType.Date:
            return 'Дата создания'
        case ColType.Members:
            return 'Участников'
        case ColType.EventsCount: 
            return 'Мероприятий'
        default:
            return <div>No data</div>
    }
}

const OrganizationMembersTotal = ({
    organizationId,
    organizationMembersCount
}: {
    organizationId: string
    organizationMembersCount: number
}) => {

    const router = useRouter()
    
    const goToOrganizationMembersPage = () => {
        router.push(`./organization/${organizationId}/users`)
    }

    return (
        <div 
            className='cursor-pointer hover:underline hover:text-sky-600'
            onClick={goToOrganizationMembersPage}
        >
            {organizationMembersCount}
        </div>
    )
}

const OrganizationEventsTotal = ({
    organizationId,
    organizationEventCount,
}:{
    organizationId: string
    organizationEventCount: number
}) => {
    const router = useRouter()

    const goToOrganizationEventsPage = () => {
        router.push('./')
    }

    return (
        <div 
            className='cursor-pointer hover:underline hover:text-sky-600'
            onClick={goToOrganizationEventsPage}
        >
            {organizationEventCount}
        </div>
    )
}

const getCellContent = (rowIndex: number, colIndex: number, organizationInfo: OrganizationTableInfoType) => {
    const {
        organizationId,
        organizationName,
        createdAt,
        organizationMembersCount,
        totalEventsCount
    } = organizationInfo

    switch (colIndex) {
        case ColType.Name: 
            return organizationName
        case ColType.Date:
            return createdAt.toLocaleDateString()
        case ColType.Members:
            return (
                <OrganizationMembersTotal 
                    organizationId={organizationId}
                    organizationMembersCount={organizationMembersCount}
                />
            )
        case ColType.EventsCount: 
            return (
                <OrganizationEventsTotal 
                    organizationId={organizationId} 
                    organizationEventCount={totalEventsCount}
                />
            )
        default:
            return <div>No data</div>
    }
}

const OrganizationsTable = () => {

    const {data: organizations} = api.organization.getAll.useQuery()
    const router = useRouter()

    if (!organizations) {
        return <Loading />
    }

    const onRowClick = (rowIndex: number) => {
        const organization = organizations[rowIndex]
        const {organizationId} = organization!
        router.push(`/admin/organization/${organizationId}`)
    }
    
    return (
        <>
            {
                organizations.length > 0 
                    ? (
                        <>
                            <Table 
                                colCount={colCount}
                                data={organizations}
                                getHeadContent={getHeadContent}
                                getCellContent={getCellContent} 
                                onRowClick={onRowClick}
                            />
                            <Pagination />
                        </>
                    )
                    
                    : <Placeholder />
                
            }   
        </>
            
    )
}

export default OrganizationsTable

export type {
    OrganizationTableInfoType
}
