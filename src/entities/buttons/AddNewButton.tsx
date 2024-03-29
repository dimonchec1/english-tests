import { FC } from "react"
import { ButtonProps } from "./type"
import { ActionButton } from "./ActionButton"

const Plus = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}

const AddNewButton: FC<ButtonProps> = (props) => {
    return (
        <ActionButton
            {...props} 
            leftAddon={<Plus />}
        />
    )
}

export {
    AddNewButton
}