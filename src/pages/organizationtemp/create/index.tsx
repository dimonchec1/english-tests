
import { ActionButton } from '@/entities/buttons/ActionButton'
import { InputWithLabel } from '@/shared/ui/inputs/inputWithLabel/InputWithLabel'
import { api } from '@/utils/api'
import { NextRouter, useRouter } from 'next/router'
import { useState } from 'react'

const redirectToOrganizationPage = (organizationId: string, router: NextRouter) => {
    const organizationRoute = `/organization/${organizationId}`
    router.push(organizationRoute)
}

const CreateOrganization = () => {
    const {mutate: createOrganization} = api.organizations.create.useMutation()

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
        <div className='my-8 space-y-8'>
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
    )
}

export default CreateOrganization