import React, { FC } from 'react'
import { ButtonProps } from './type'

import clsx from 'clsx'

const ActionButton: FC<ButtonProps> = (
    {
        className,
        ...props
    }
) => {
    return (
        <button 
            {...props}
            className={clsx(
                className,
                'rounded bg-sky-600 px-2 h-8 text-white flex items-center justify-center font-sans text-sm hover:bg-sky-700'
            )}
        />
    )
}

export {
    ActionButton
}