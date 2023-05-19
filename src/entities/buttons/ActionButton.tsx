import React, { FC } from 'react'
import { ButtonPropsWithLeftAddon } from './type'

import clsx from 'clsx'

const ActionButton: FC<ButtonPropsWithLeftAddon> = (
    {
        className,
        children,
        leftAddon,
        ...props
    }
) => {
    return (
        <button 
            {...props}
            className={clsx(
                className,
                'flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600'
            )}
        >
            {leftAddon}
            {children}
        </button>
    )
}

export {
    ActionButton
}