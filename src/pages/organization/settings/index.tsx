import { EventLayout } from "@/features/layouts/EventsLayout"
import { PageContent } from "@/features/layouts/PageContent"
import ApiKey from "@/features/organization/ApiKey"
import { ContentHeader } from "@/shared/ui/headers/ContentHeader"

const Settings = () => {
    return (
        <EventLayout>
            <PageContent>
                <ContentHeader title='Настройки организации' />
                <ApiKey />
            </PageContent>
        </EventLayout>
    )
}

export default Settings