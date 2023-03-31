import { AuthWithCredentials } from '@/components/auth/auth'
import { ActionButton } from '@/entities/buttons/ActionButton'
import { ButtonProps } from '@/entities/buttons/type'
import { signOut, useSession } from 'next-auth/react'
import { FC, useState } from 'react'
import { LoginModal } from './LoginModal'

interface LoginButtonProps extends ButtonProps {}

const LoginButton: FC<LoginButtonProps> = ({...props}) => {
  const {data: session} = useSession()

  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false)

  const handleOpenAuthPopup = () => {
    setIsAuthPopupOpen(true)
  }

  const handleCloseAuthPopup = () => {
    setIsAuthPopupOpen(false)
  }

  const handleLoginButtonClick = () => {
    if (session?.user) {
        signOut()
    } else {
        handleOpenAuthPopup()
    }
  }
  
  return (
        <>
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
            <LoginModal
                open={isAuthPopupOpen}
                onClose={handleCloseAuthPopup}
            >
                <AuthWithCredentials onClose={handleCloseAuthPopup} />
            </LoginModal>
        </>
    )
}

export {
    LoginButton
}