import { AuthWithCredentials } from "@/features/auth/ui/auth"
import { redirectCloseAuthPopup } from "@/features/auth/authPopupRouting"
import { LoginModal } from "@/features/auth/ui/LoginModal"
import {useRouter } from "next/router"
import { ReactNode } from 'react'

const AuthLayout = ({children} : {children: ReactNode}) => {
    const router = useRouter()
    const {auth} = router.query

    const handleCloseAuthPopup = () => {
        redirectCloseAuthPopup(router)
    }

    const showAuthPopup = auth === 'signup' || auth === 'signin'
    return (
        <div className='h-full relative'>
            <LoginModal
                open={showAuthPopup}
                onClose={handleCloseAuthPopup}
            >
                <AuthWithCredentials onClose={handleCloseAuthPopup} />
            </LoginModal>
            {children}
        </div>
    )
}

export {
    AuthLayout
}