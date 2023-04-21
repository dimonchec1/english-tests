import { InputProps } from "../type"
import { FC } from "react"

import clsx from "clsx"

const Input: FC<InputProps> = (
    {
        className,
        ...props
    }
) => {
    return (
        <input 
            className={clsx(
                className, 
                `outline-none border border-neutral-600 rounded pl-2 hover:bg-stone-100 
                focus:bg-stone-100 focus:border-blue-600`
            )} 
            {...props} 
        />
    )
}

export {
    Input
}

export type {
    InputProps
}