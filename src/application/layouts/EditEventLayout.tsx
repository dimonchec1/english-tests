import { EditTestNavigation } from "@/features/navigarion/EditTestNavigation"
import { ReactNode } from "react"

const EditEventLayout = (
    {
        children
    } : {
        children: ReactNode
    }
) => {
    return (
        <div className='flex-grow flex gap-4 h-full'>
            <div className='w-40 pt-8'>
                <EditTestNavigation />
            </div>
            <div className='flex-grow'>
                {children}
            </div>
        </div>
    )
}

export default EditEventLayout