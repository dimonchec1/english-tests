import { api } from "@/utils/api"
import { useQuery } from "@tanstack/react-query"

const ResultsPage = () => {
    const {data: results} = api.enrollment.byUserId.useQuery()

    console.log(results)
    
    return (
        <div>sdf</div>
    )
}

export default ResultsPage