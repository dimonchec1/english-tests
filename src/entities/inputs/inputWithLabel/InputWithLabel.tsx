import { FC } from "react"
import { Input } from "../input/Input"
import { InputProps } from "../type"

interface InputWithLabelProps extends InputProps  {
    labelText: string
}

const InputWithLabel: FC<InputWithLabelProps> = (
    {
        labelText,
        ...props
    }
) => {
    return (
        <label>
            <span className='block mb-2'>{labelText}</span>
            <Input {...props} />
        </label>
    )
}

export {
    InputWithLabel
}