import { EditTestNavigation } from "@/features/navigarion/EditEventNavigation"
import { ReactNode } from "react"

const RightSidebarLayout = (
    {
        rightColumn,
        children
    } : {
        rightColumn: ReactNode,
        children: ReactNode
    }
) => {
    return (
         <div className='flex gap-4 h-full'>
            <div className='flex-grow h-full pt-8 px-4'>
                {children}
            </div>
            <div className='pt-8 w-40 border-l h-full'>
                {rightColumn}
            </div>
        </div>
    )
}

export {
    RightSidebarLayout
}