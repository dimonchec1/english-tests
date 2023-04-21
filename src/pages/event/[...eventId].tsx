
import { api } from '@/utils/api';
import { useRouter } from 'next/router';

const Event = () => {
    const router = useRouter()
    const {eventId} = router.query

    if (!eventId) {
        return (
            <h1 className='text-3xl font-bold'>
                Loading...
            </h1>
        )
    }

    const {data: event} = api.event.event.useQuery({eventId: typeof eventId![0] === 'string' ? eventId![0] : ''})
    
    return (
        <div className='flex gap-4'>
            <h1 className='text-3xl font-bold'>
                {event?.name}
            </h1>
            <p>Страница эвента отображаемая пользователю</p>
        </div>
       
    )
}

export default Event