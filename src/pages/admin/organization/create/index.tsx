
import { ActionButton } from '@/entities/buttons/ActionButton'
import { AdminLayout } from '@/features/layouts/AdminLayout'
import { PageContent } from '@/features/layouts/PageContent'
import { InputWithLabel } from '@/shared/ui/inputs/inputWithLabel/InputWithLabel'
import { api } from '@/utils/api'
import { NextRouter, useRouter } from 'next/router'
import { useState } from 'react'

const redirectToOrganizationPage = (organizationId: string, router: NextRouter) => {
    // const organizationRoute = `/admin/${organizationId}`
    const organizationRoute = `/admin/organizations`
    
    router.push(organizationRoute)
}

const CreateOrganization = () => {
    const {mutate: createOrganization} = api.organization.create.useMutation()

    const [name, setName] = useState('')

    const router = useRouter()

    const getRedirectToOrganizationPageCallback = (router: NextRouter) => {
        return (organizationId: string) => {
            redirectToOrganizationPage(organizationId, router)
        }
    }

    const handleClick = () => {
        createOrganization({name}, {
            onSuccess: getRedirectToOrganizationPageCallback(router)
        })
    }

    return (
        <AdminLayout>
            <PageContent>
                <div className='space-y-8'>
                    <h1 className='text-2xl font-semibold'>Регистрация организации</h1>
                    <InputWithLabel 
                        labelText='Название'
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                    <ActionButton onClick={handleClick}>
                        Зарегистрировать
                    </ActionButton>
                </div>
            </PageContent>
        </AdminLayout>
    )
}

export default CreateOrganization