import { EditTestNavigation } from "@/features/navigarion/EditEventNavigation"
import { ReactNode } from "react"

const LeftSidebarLayout = (
    {
        leftColumn,
        children
    } : {
        leftColumn: ReactNode,
        children: ReactNode
    }
) => {
    return (
        <div className='flex-grow flex gap-4 h-full'>
            <div className='w-52 pt-8'>
                {leftColumn}
            </div>
            <div className='flex-grow py-8 px-6 border-l'>
                {children}
            </div>
        </div>
    )
}

export default LeftSidebarLayout