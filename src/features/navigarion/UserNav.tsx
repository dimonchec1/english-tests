import Link from "next/link"
import { ReactNode } from "react"

const availableLinks = ['user/profile', 'user/certificates', 'user/settings'] as const

type AvailableLinks = typeof availableLinks[number]

interface NavigationConfig {
    url: string
    label: string
}

const navigationConfig = (userId: string): Record<AvailableLinks, NavigationConfig> => {
    console.log('safd', userId)
    return {
    'user/profile': {
        url: `/user/${userId}/profile`,
        label: 'Профиль'
    },
    'user/certificates': {
        url: `/user/${userId}/certificates`,
        label: 'Сертификаты'
    },
    'user/settings': {
        url: `/user/${userId}/settings`,
        label: 'Настройки'
    }
}
}
    

const UserNav = ({
    userId,
    enhancer
} : {
    userId: string
    enhancer?: ReactNode
}) => {
    return (
        <div className='w-full space-y-4'>
            <h5 className='font-semibold'>Пользователь</h5>
            {enhancer}
            <nav className='w-full flex'>
                <ul>
                {availableLinks.map(availableLink => {
                    const {url, label} = navigationConfig(userId)[availableLink]
                    return (
                        <li key={availableLink} className='text-blue-600 hover:text-blue-400 cursor-pointer'>
                            <Link href={url}> {label}</Link>
                        </li>
                    )
                })}
                </ul>
            </nav>
        </div>
       
    )
}

export {
    UserNav
}