import { CertificatesTable } from "@/features/certificatesTable/CertificatesTable"
import { PageContent } from "@/features/layouts/PageContent"
import { UserLayout } from "@/features/layouts/UserLayout"
import { ContentHeader } from "@/shared/ui/headers/ContentHeader"

const Certificates = () => {
    return (
        <UserLayout>
            <PageContent>
                    <ContentHeader title='Сертификаты' />
                    <CertificatesTable />
            </PageContent>
        </UserLayout>
    )
}

export default Certificates