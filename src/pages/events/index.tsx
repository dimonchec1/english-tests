import { ActionButton } from "@/entities/buttons/ActionButton"
import { TestList } from "@/features/testList/TestList"
import { useRouter } from "next/router"

const EventsPage = () => {
    const router = useRouter()
    return (
        <div className='space-y-8 py-8'>
            <ActionButton 
                onClick={() => router.push('event/create')}
                className='w-24'
            >
                Новый курс
            </ActionButton>
            <TestList />
        </div>
    )
}

export default EventsPage