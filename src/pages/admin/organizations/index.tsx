import { ActionButton } from "@/entities/buttons/ActionButton"
import OrganizationsList from "@/features/organizationsList/OrganizationsList"
import { useRouter } from "next/router"

const Organizations = () => {
    const router = useRouter()

    return (
        <div
            className='py-8 px-4'
        >
            <ActionButton
                onClick={() => router.push('/admin/organization/create')}
                className='w-24'
            >
                Тест
            </ActionButton> 
            <OrganizationsList />
        </div>
    )
}

export default Organizations