import { Loading } from "@/shared/ui/Loading"
import { api } from "@/utils/api"
import { Organization } from "@prisma/client"
import { useRouter } from "next/router"
import Placeholder from "../organization/organizationsTable/Placeholder"
import { Pagination } from "../organization/organizationsTable/Pagination"
import Table from '../organization/organizationsTable/Table'

type CellType = 'name' | 'date' | 'eventsCount'

enum ColType {
    Name, 
    Date,
    EventsCount
}

const colCount = 4

const getHeadContent = (colIndex: number) => {
    switch (colIndex) {
        case ColType.Name: 
            return 'Название'
        case ColType.Date:
            return 'аудирование'
        case ColType.EventsCount: 
            return 'лексика.'
    }

    return <div>head</div>
}

const getCellContent = (rowIndex: number, colIndex: number, organization: number) => {
    switch (colIndex) {
        case ColType.Name: 
            return 'Экзамен по английскому языку'
        case ColType.Date:
            return 20;
        case ColType.EventsCount: 
            return 30
    }

    return <div>cell</div>
}

type Data = {
    aud: string
    lex: string
}

const CertificatesTable = () => {

    const router = useRouter()

    const onRowClick = (rowIndex: number) => {
        // const organization = organizations[rowIndex]
        // const {id} = organization!
        // router.push(`/admin/organization/${id}`)
    }
    
    return (
        <>
            {
            <>
                <Table 
                    colCount={colCount}
                    data={[1]}
                    getHeadContent={getHeadContent}
                    getCellContent={getCellContent} 
                    onRowClick={onRowClick}
                />
                <Pagination />
            </>
                
            }   
        </>
            
    )
}

export {
    CertificatesTable
}
