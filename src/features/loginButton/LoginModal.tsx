import { ModalUnstyled } from '@mui/base'
import { ComponentProps, FC, forwardRef } from 'react'

import clsx from 'clsx'

interface ModalProps extends ComponentProps<typeof ModalUnstyled> {}

const Modal: FC<ModalProps> = (props) => {
    return (
        <ModalUnstyled {...props} className='fixed right-0 bottom-0 top-0 left-0 flex items-center justify-center z-[1300]' />
    )
}

const BackdropUnstyled = forwardRef<
    HTMLDivElement,
    { open?: boolean; className: string; ownerProps?: any }
>((props, ref) => {
    //https://github.com/mui/material-ui/issues/32882
    const { open, className, ownerProps, ...other } = props;
    return (
        <div
            className={clsx({ 'MuiBackdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    )
})

const Backdrop = () => {
    return(
        <BackdropUnstyled className='fixed right-0 bottom-0 top-0 left-0 z-[-1] bg-black/50' />
    )
}

interface LoginModalProps extends ModalProps {}

const LoginModal: FC<LoginModalProps> = (props) => {
    return (
        <Modal
            {...props}
            slots={{backdrop: Backdrop}}
            disablePortal
        >
            <div>{props.children}</div>
        </Modal>
    )
}

export {
    LoginModal
}