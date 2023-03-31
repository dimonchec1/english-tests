import { ActionButton } from "@/entities/buttons/ActionButton"
import { InputWithLabel } from "@/entities/inputs/inputWithLabel/InputWithLabel"
import { api } from "@/utils/api"
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router";

const CreateTest = () => {
    const router = useRouter()
    const {data: session} = useSession()
    const {mutate} = api.test.create.useMutation()
    const [name, setName] = useState('')

    const handleCreateTestClick = () => {
        mutate({
            testName: name,
            userId: session!.user.id
        })
        router.push('/tests/1')
    }

    return (
        <>
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
        </>
    )
}

export default CreateTest