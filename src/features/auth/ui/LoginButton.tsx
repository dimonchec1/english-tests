import { ActionButton } from '@/entities/buttons/ActionButton'
import { ButtonProps } from '@/entities/buttons/type'
import { signOut, useSession } from 'next-auth/react'
import { FC } from 'react'
import { useRouter } from 'next/router'
import { redirectOpenAuthPopup } from '../authPopupRouting'

interface LoginButtonProps extends ButtonProps {}

const LoginButton: FC<LoginButtonProps> = ({...props}) => {
    const {data: session} = useSession()
    const router = useRouter()
    const handleLoginButtonClick = () => {
        if (session?.user) {
            signOut()
        } else {
            redirectOpenAuthPopup(router)
        }
    }
    
    return (
        <ActionButton
            {...props} 
            className='w-16'
            onClick={handleLoginButtonClick}
        >
            {
                session?.user 
                    ? `Выйти ${session.user.email}`
                    : 'Войти'
            }
        </ActionButton>
    )
}

export {
    LoginButton
}