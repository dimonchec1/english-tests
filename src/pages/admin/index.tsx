import { AdminLayout } from '@/features/layouts/AdminLayout'
import { PageContent } from '@/features/layouts/PageContent'
import { ContentHeader } from '@/shared/ui/headers/ContentHeader'
import React from 'react'

const AdminPage = () => {
    return (
        <AdminLayout>
            <PageContent>
                <ContentHeader title='Администрирование организации' />
            </PageContent>
        </AdminLayout>
    )
}

export default AdminPage