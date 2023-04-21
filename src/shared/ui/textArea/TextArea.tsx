import TextareaAutosize from "@mui/base/TextareaAutosize"

const TextArea = ({
    minRows,
    placeholder
} : {
    minRows: number
    placeholder: string
}) => {
    return (
        <TextareaAutosize
            className='w-80 resize-none' 
            minRows={minRows}
            placeholder={placeholder}
        />
    )
}

export {
    TextArea
}