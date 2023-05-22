import { EventLayout } from "@/features/layouts/EventsLayout"
import ApiKey from "@/features/organization/ApiKey"
import { ContentHeader } from "@/shared/ui/headers/ContentHeader"

const Settings = () => {
    return (
        <EventLayout>
            <ContentHeader title='Настройки организации' />
            <ApiKey />
        </EventLayout>
    )
}

export default Settings