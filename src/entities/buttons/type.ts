import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

interface ButtonPropsWithLeftAddon extends ButtonProps {
    leftAddon?: ReactNode

}

export type {
    ButtonProps,
    ButtonPropsWithLeftAddon
}