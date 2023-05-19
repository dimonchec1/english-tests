import OrganizationsTable from "@/features/organizationsTable/OrganizationsTable"
import { NextRouter, useRouter } from "next/router"
import { AddNewButton } from "@/entities/buttons/AddNewButton"

function goToCreateOrganizationPage(router: NextRouter) {
    const organizationUrl = '/organization/create'
    router.push(organizationUrl)
}

const CreateOrganization = () => {
    const router = useRouter()

    const handleClick = () => {
        goToCreateOrganizationPage(router)
    }

    return <AddNewButton onClick={handleClick}>Добавить организацию</AddNewButton>
}

const index = () => {
    return (
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
            <div className="flex items-center justify-between mt-6">
            <a className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100        :bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>
                    previous
                </span>
            </a>
            <div className="items-center hidden md:flex gap-x-3">
                <a className="px-2 py-1 text-sm text-blue-500 rounded-md   bg-blue-100/60">1</a>
                <a className="px-2 py-1 text-sm text-gray-500 rounded-md  :bg-gray-800   hover:bg-gray-100">2</a>
                <a className="px-2 py-1 text-sm text-gray-500 rounded-md  :bg-gray-800   hover:bg-gray-100">3</a>
                <a className="px-2 py-1 text-sm text-gray-500 rounded-md  :bg-gray-800   hover:bg-gray-100">...</a>
                <a className="px-2 py-1 text-sm text-gray-500 rounded-md  :bg-gray-800   hover:bg-gray-100">12</a>
                <a className="px-2 py-1 text-sm text-gray-500 rounded-md  :bg-gray-800   hover:bg-gray-100">13</a>
                <a className="px-2 py-1 text-sm text-gray-500 rounded-md  :bg-gray-800   hover:bg-gray-100">14</a>
            </div>
            <a className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100        :bg-gray-800">
                <span>
                Next
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
            </div>
        </section>
    )
}

export default index