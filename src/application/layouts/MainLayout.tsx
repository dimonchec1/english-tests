import { LoginButton } from "@/features/loginButton/LoginButton"
import { FC, ReactNode } from "react"
import Head from 'next/head'
import { UserNavigation } from "@/features/navigarion/UserNavigation"
import { MainNavigation } from "@/features/navigarion/MainNavigation"

interface MainLayoutProps {
    children: ReactNode
}

const FullHeightPageStyles = () => {
    return (
        <style global jsx>{`
            html,
            body,
            div#__next {
                height: 100%;
            }
        `}</style>
    )
}

const RightSubNav = () => {
    return (
        <div className='ml-auto flex space-x-4'>
            <div className='py-2'>
                <LoginButton />     
            </div>
            <div className='py-0.5'>
                <UserNavigation userId='123' />               
            </div>
        </div>
    )
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Head>
                <title>Мероприятия</title>
                <meta name='description' content='Tests' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <FullHeightPageStyles />
            <div className='sticky top-0 bg-white z-40 border-b bg-gray-100'>
                <div className='max-w-7xl mx-auto gap-4'>
                    <div className='flex items-center px-4'>
                        <MainNavigation />
                        <RightSubNav /> 
                    </div>
                </div>
            </div>  
            <main className='max-w-7xl mx-auto flex flex-col min-h-[calc(100%_-_49px)] border-x px-4'>
                {children}
            </main>
        </>
    )
}

export {
    MainLayout
}