import { PageContent } from "@/features/layouts/PageContent"
import { UserLayout } from "@/features/layouts/UserLayout"
import { ContentHeader } from "@/shared/ui/headers/ContentHeader"
import { api } from "@/utils/api"
import { useRouter } from "next/router"
import { useSession } from 'next-auth/react';

const Profile = () => {
    const session = useSession()

    if (!session.data?.user.email) {
        return <div>Loading...</div>
    }

    return (
        <UserLayout>
            <PageContent>
                <ContentHeader title={`Пользователь ${session.data?.user.email}`} />
            </PageContent>
        </UserLayout>
    )
}

export default Profile