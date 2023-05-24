import OrganizationsTable from "@/features/organization/organizationsTable/OrganizationsTable"
import { NextRouter, useRouter } from "next/router"
import { AddNewButton } from "@/entities/buttons/AddNewButton"
import { AdminLayout } from "@/features/layouts/AdminLayout"

function goToCreateOrganizationPage(router: NextRouter) {
    const organizationUrl = '/admin/organization/create'
    router.push(organizationUrl)
}

const CreateOrganization = () => {
    const router = useRouter()

    const handleClick = () => {
        goToCreateOrganizationPage(router)
    }

    return <AddNewButton onClick={handleClick}>Добавить организацию</AddNewButton>
}

const OrganizationPage = () => {
    return (
        <AdminLayout>
            <section className="container px-4 mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                <h2 className="text-lg font-medium text-gray-800">Files uploaded</h2>
                <div className="flex items-center mt-4 gap-x-3">
                    <button className="w-1/2 px-5 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto  :bg-gray-800   hover:bg-gray-100    ">
                    Download all
                    </button>
                    <CreateOrganization />
                </div>
                </div>
                <OrganizationsTable />
            </section>
        </AdminLayout>
    )
}

export default OrganizationPage