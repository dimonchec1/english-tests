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
        <div>
            <label className="text-gray-700">
                {labelText}
                <Input {...props} />
            </label>
        </div>  
      
    )
}

export {
    InputWithLabel
}
