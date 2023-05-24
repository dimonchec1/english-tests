import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const USER_AVATAR_URL = 'https://65.mchs.gov.ru/uploads/resize_cache/news/2021-08-25/pravila-povedeniya-pri-vstreche-s-medvedem_1629847892112633638__800x800.jpg'

interface Props {
    userId: string
}

const UserNavigation = ({userId}: Props) => {

    const router = useRouter()

    const handleClick = () => {
        console.log(userId, 'userid')
        router.push(`/user/${userId}/profile`)
    }

    return (
        <div 
            onClick={handleClick}
            className='group/user-avatar rounded flex justify-center items-center w-11 h-11 p-1 bg-sky-600 hover:bg-sky-700 cursor-pointer'
        >
            <div className='relative w-full h-full bg-black rounded'>
                <Image
                    alt='Аватарка пользователя'
                    src={USER_AVATAR_URL}
                    className='rounded group-hover/user-avatar:opacity-80'
                    fill
                />
            </div>
        </div>
    )
}

export {
    UserNavigation
}