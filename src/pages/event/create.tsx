import { ActionButton } from "@/entities/buttons/ActionButton"
import { api } from "@/utils/api"
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router";
import { InputWithLabel } from "@/shared/ui/inputs/inputWithLabel/InputWithLabel";

const CreateTest = () => {
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
                router.push(`/event/edit/${eventId}`)
            }
        })
    }

    return (
        <div className='py-8'>
            <h1 className='text-3xl font-bold'>Создайте новый тест</h1>
            <div className='mt-8'>
                <InputWithLabel 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    labelText='Название теста:' 
                    className='h-8' 
                />
            </div>
            <ActionButton 
                onClick={handleCreateTestClick}
                className='w-28 mt-10'
            >
                Создать тест
            </ActionButton>
        </div>
    )
}

export default CreateTest