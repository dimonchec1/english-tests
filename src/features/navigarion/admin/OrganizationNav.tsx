
import Link from "next/link"
import { ReactNode } from "react"

const availableLinks = ['admin/organization', 'admin/organization/users'] as const

type AvailableLinks = typeof availableLinks[number]

interface NavigationConfig {
    url: string
    label: string
}

// const navigationConfig: Record<AvailableLinks, NavigationConfig> = {
//     'admin/organizations': {
//         url: '/admin/organizations',
//         label: 'Организации'
//     },
//     'admin/users': {
//         url: '/admin/users',
//         label: 'Пользователи'
//     }
// }

const navigationConfig = (organizationId: string): Record<AvailableLinks, NavigationConfig> => {
    return {
         'admin/organization': {
            url: `/admin/organization/${organizationId}`,
            label: 'Организация'
        },
        'admin/organization/users': {
            url: `/admin/organization/${organizationId}/users`,
            label: 'Пользователи'
        }
    }
}

const OrganizationNav = ({
    organizationId,
    enhancer
} : {
    organizationId: string
    enhancer?: ReactNode
}) => {
    return (
        <div className='w-full space-y-4 pl-4'>
            <h5 className='font-semibold'>Редактирование организации</h5>
            {enhancer}
            <nav className='w-full flex'>
                <ul>
                {availableLinks.map(availableLink => {
                    const {url, label} = navigationConfig(organizationId)[availableLink]
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
    OrganizationNav
}