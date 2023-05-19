import { InputProps } from "../type"
import { FC } from "react"

const Input: FC<InputProps> = (
    {
        className,
        ...props
    }
) => {
    return (
        <input 
            type="text" 
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
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