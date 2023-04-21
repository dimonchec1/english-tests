import Link from "next/link"

const availableLinks = ['main', 'events', 'event/edit', 'admin/organizations', 'organization/settings'] as const

type AvailableLinks = typeof availableLinks[number]

interface NavigationConfig {
    url: string
    label: string
}

const navigationConfig: Record<AvailableLinks, NavigationConfig> = {
    'main': {
        url: '/',
        label: 'Главная'
    },
    'events': {
        url: '/events',
        label: 'Мероприятия'
    },
    'event/edit': {
        url: '/event/edit',
        label: 'Редактирование'
    },
    'admin/organizations': {
        url: '/admin/organizations/',
        label: 'Организации'
    },
    'organization/settings': {
        url: '/organization/settings/',
        label: 'Настройки организации'
    }
}

const MainNavigation = () => {

    return (
        <nav className='text-gray-500 font-sans font-semibold'>
            <ul className='flex space-x-8'>
                {availableLinks.map(availableLink => {
                    const {url, label} = navigationConfig[availableLink]
                    return (
                        <li className='hover:text-sky-600'>
                            <Link href={url}> {label}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export {
    MainNavigation
}