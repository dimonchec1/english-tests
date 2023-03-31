import { useCallback, useState } from "react"

function useToggle(initialState = false) {
    const [state, setState] = useState(initialState)

    const toggle = useCallback(() => setState(prev => !prev), [])

    return [state, toggle] as const
}

export {
    useToggle
}