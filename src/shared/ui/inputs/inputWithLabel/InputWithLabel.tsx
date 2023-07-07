import { FC } from "react"
import { Input } from "../input/Input"
import { InputProps } from "../type"
import { Label } from "../../label/Label"

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
            <Label>
                {labelText}
            </Label>
                <Input {...props} />
        </div>  
      
    )
}

export {
    InputWithLabel
}
