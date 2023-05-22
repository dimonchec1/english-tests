import { UiContainer } from "../types"

const Label = ({
    children
} : UiContainer) => {
    return (
        <label className="text-gray-700">
            {children}
        </label>
    )
}

export {
    Label
}