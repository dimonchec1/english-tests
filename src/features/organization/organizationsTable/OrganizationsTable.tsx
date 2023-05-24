import { api } from "@/utils/api"
import Table from "./Table"
import Placeholder from "./Placeholder"
import { Loading } from "@/shared/ui/Loading"
import { Pagination } from "./Pagination"
import { Organization } from "@prisma/client"
import { useRouter } from "next/router"

type CellType = 'name' | 'date' | 'eventsCount'

enum ColType {
    Name, 
    Date,
    EventsCount
}

const colCount = 3

const getHeadContent = (colIndex: number) => {
    switch (colIndex) {
        case ColType.Name: 
            return 'имя'
        case ColType.Date:
            return 'дата'
        case ColType.EventsCount: 
            return 'колл. мероприятий.'
    }

    return <div>head</div>
}

const getCellContent = (rowIndex: number, colIndex: number, organization: Organization) => {
    switch (colIndex) {
        case ColType.Name: 
            return organization.name
        case ColType.Date:
            return organization.createdAt.toLocaleDateString();
        case ColType.EventsCount: 
            return 1
    }

    return <div>cell</div>
}

const OrganizationsTable = () => {

    const {data: organizations} = api.organization.getAll.useQuery()
    const router = useRouter()

    if (!organizations) {
        return <Loading />
    }

    const onRowClick = (rowIndex: number) => {
        const organization = organizations[rowIndex]
        const {id} = organization!
        router.push(`/admin/organization/${id}`)
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
