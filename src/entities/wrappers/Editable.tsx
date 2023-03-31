import { useToggle } from "@/shared/hooks/useToggle"
import Image from "next/image"
import { FC, ReactNode, useState } from "react"

import EditButtonn from '../../assets/EditButton.svg'

interface EditButtonProps {
    onClick: () => void
}

const EditButton: FC<EditButtonProps> = ({onClick}) => {
    return (
        <div 
            onClick={onClick}
            className='absolute top-[-10px] right-[-10px] cursor-pointer'
        >
            <Image
                src={EditButtonn}
                alt='Редактировать'
                width={20}
                height={20}
            />
        </div>
       
    )
}


interface EditableProps {
    children: (editable: boolean) => ReactNode
    editMode?: boolean
}

const Editable: FC<EditableProps> = (
    {
        children,
        editMode = false
    }
) => {
    const [editable, toggleEditable] = useToggle(false)
    return (
        <div className='relative'>
            {<EditButton onClick={toggleEditable} />}
            {children(editable)}
        </div>
    )
}

export {
    Editable
}