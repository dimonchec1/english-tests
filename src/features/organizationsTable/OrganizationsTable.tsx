import { api } from "@/utils/api"
import Table from "./Table"
import Placeholder from "./Placeholder"

const OrganizationsTable = () => {


    const {data: organizations} = api.organizations.getAll.useQuery()

    if (!organizations) {
        return <h1>Loading...</h1>
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
