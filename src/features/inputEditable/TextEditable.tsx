
import { Input, InputProps } from '@/entities/inputs/input/Input'
import { FC } from 'react'

interface TextEditableProps extends InputProps {
    editable: boolean
}

const TextEditable: FC<TextEditableProps> = ({
    editable,
    ...props
}) => {
    return (
        <>
            {
                editable ? (
                    <Input {...props} />
                ) : (
                    <p className={props.className}>{props.value}</p>
                )
            }
        </>
    )
}

export {
    TextEditable
}