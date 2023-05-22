import Link from "next/link"
import { ReactNode } from "react"

const availableLinks = ['organization/events', 'organization/employees', 'organization/settings'] as const

type AvailableLinks = typeof availableLinks[number]

interface NavigationConfig {
    url: string
    label: string
}

const navigationConfig: Record<AvailableLinks, NavigationConfig> = {
    'organization/events': {
        url: '/organization/events',
        label: 'Мероприятия'
    },
    'organization/employees': {
        url: '/organization/employees',
        label: 'Сотрудники'
    },
    'organization/settings': {
        url: '/organization/settings',
        label: 'Настройки'
    }
}

const EditTestNavigation = ({
    enhancer
} : {
    enhancer: ReactNode
}) => {
    return (
        <div className='w-full space-y-4'>
            <h5 className='font-semibold'>Организация</h5>
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
    EditTestNavigation
}