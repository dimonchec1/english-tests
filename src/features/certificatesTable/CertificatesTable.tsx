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

    const onRowClick = async (rowIndex: number) => {
        if (!process.env.CERTIFICATION_URL) return 
        const response = await fetch(`${process.env.CERTIFICATION_URL}/`, { 
            method: "GET",
            headers: { "Content-Type": "application/json",'Authorization': 'Bearer ' + window.localStorage["Access_Token"]},
            // body: JSON.stringify({
            //     a: 1
            // })
        })
        
        const data = await response.blob()
        
        var csvURL = window.URL.createObjectURL(data);
        let tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', 'test.pdf');
        tempLink.click()

        console.log(data)
    }
    
    return (
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
    )
}

export {
    CertificatesTable
}
