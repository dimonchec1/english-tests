import { EventsList } from '@/features/events/EventsList'
import { PageContent } from '@/features/layouts/PageContent'
import { ContentHeader } from '@/shared/ui/headers/ContentHeader'
import { type NextPage } from 'next'

const Home: NextPage = () => {

    return (
        <PageContent>
            <ContentHeader title='Активные мероприятия' />
            <EventsList />
        </PageContent>
    )
}

export default Home