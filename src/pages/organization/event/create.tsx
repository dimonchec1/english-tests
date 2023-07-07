import { CreateEventContent } from "@/features/events/CreateEventContent"
import { EventLayout } from "@/features/layouts/EventsLayout"

const CreateTest = () => {


    return (
        <EventLayout>
            <div className='px-6 py-8 space-y-8'>
                <CreateEventContent />
            </div>
        </EventLayout>
    )
}

export default CreateTest