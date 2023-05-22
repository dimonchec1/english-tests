import { ActionButton } from "@/entities/buttons/ActionButton"
import { InputWithLabel } from "@/shared/ui/inputs/inputWithLabel/InputWithLabel"
import { api } from "@/utils/api"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"

const CreateEventContent = () => {
    const router = useRouter()
    const {data: session} = useSession()
    const {mutate} = api.event.create.useMutation()
    const [name, setName] = useState('')

    const handleCreateTestClick = () => {
        mutate({
            testName: name,
            userId: session!.user.id
        }, {
            onSuccess: eventId => {
                router.push(`/organization/event/edit/${eventId}`)
            }
        })
    }

    return (
        <>
            <h1 className='text-2xl font-semibold'>Создайте новое мероприятие</h1>
            <InputWithLabel 
                value={name}
                onChange={e => setName(e.target.value)}
                labelText='Название теста:' 
                className='h-8' 
            />
            <ActionButton 
                onClick={handleCreateTestClick}
                className='w-28'
            >
                Создать мероприятие
            </ActionButton>
        </>
        
    )
}

export {
    CreateEventContent
}