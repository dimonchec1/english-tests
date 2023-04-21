import { api } from "@/utils/api"
import Link from "next/link"

const EditTestNavigation = () => {
    const {data: events} = api.event.events.useQuery()
    return (
        <div className='w-full space-y-4'>
            <h5 className='font-semibold'>Созданные тесты</h5>
            <nav className='w-full flex'>
                <ul>
                {
                    events?.map(event => (
                        <li className='text-blue-600 hover:text-blue-400 cursor-pointer'>
                            <Link href={`/event/edit/${event.id}`}>
                                {event.name}
                            </Link>
                        </li>
                    )) 
                }
                </ul>
            </nav>
        </div>
       
    )
}

export {
    EditTestNavigation
}