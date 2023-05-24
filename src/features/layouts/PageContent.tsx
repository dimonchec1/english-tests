import { ReactNode } from "react"

const PageContent = ({
    children
} : {
    children: ReactNode
}) => {
    return (
        <div className='py-8 px-6'>
            {children}
        </div>
    )
}

export {
    PageContent
}