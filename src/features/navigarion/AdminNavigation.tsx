import Link from "next/link"
import { ReactNode } from "react"

const availableLinks = ['admin/organizations', 'admin/users', 'admin/settings'] as const

type AvailableLinks = typeof availableLinks[number]

interface NavigationConfig {
    url: string
    label: string
}

const navigationConfig: Record<AvailableLinks, NavigationConfig> = {
    'admin/organizations': {
        url: '/admin/organizations',
        label: 'Организации'
    },
    'admin/users': {
        url: '/admin/users',
        label: 'Пользователи'
    },
    'admin/settings': {
        url: '/admin/settings',
        label: 'Настройки'
    }
}

const AdminNavigation = ({
    enhancer
} : {
    enhancer?: ReactNode
}) => {
    return (
        <div className='w-full space-y-4'>
            <h5 className='font-semibold'>Администрирование</h5>
            {enhancer}
            <nav className='w-full flex'>
                <ul>
                {availableLinks.map(availableLink => {
                    const {url, label} = navigationConfig[availableLink]
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
    AdminNavigation
}