import EditEventLayout from "@/application/layouts/EditEventLayout"

const EventEditPreview= () => {
    return (
        <EditEventLayout>
            <div className='py-8 px-6 border-l h-full'>
                Выберете текст, который будете редактировать
            </div>
        </EditEventLayout>
    )
}

export default EventEditPreview