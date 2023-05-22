import { api } from "@/utils/api"
import Table from "./Table"
import Placeholder from "./Placeholder"
import { Loading } from "@/shared/ui/Loading"

const OrganizationsTable = () => {


    const {data: organizations} = api.organizations.getAll.useQuery()

    if (!organizations) {
        return <Loading />
    }
    
    return (
        <>
            {
                organizations.length > 0 
                    ? <Table />
                    : <Placeholder />
                
            }   
        </>
            
    )
}

export default OrganizationsTable
