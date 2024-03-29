import Link from "next/link"

const availableLinks = ['main', 'organization/events', 'admin', 'verification'] as const

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
    'organization/events': {
        url: '/organization/events',
        label: 'Меню организации'
    },
    'admin': {
        url: '/admin',
        label: 'Администрирование'
    },
    'verification': {
        url: '/verification',
        label: 'Верификация'
    }
}

const MainNavigation = () => {

    return (
        <nav className='text-gray-500 font-sans font-semibold'>
            <ul className='flex space-x-8'>
                {availableLinks.map(availableLink => {
                    const {url, label} = navigationConfig[availableLink]
                    return (
                        <li key={availableLink} className='hover:text-sky-600'>
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