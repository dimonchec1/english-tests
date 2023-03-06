
import { TabUnstyled } from '@mui/base'
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import TabsUnstyled from '@mui/base/TabsUnstyled'
import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { signIn } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'   
import { ObjectValues } from '@/types/Helpers'
import { ISignUp, signUpSchema } from '@/server/api/validation/auth'
import { api } from '@/utils/api'

import clsx from 'clsx'

// import CloseButton from '../../assets/Close.svg'

const uiConfig = {
    signInSuccessUrl: '/',



}

const Button = ({text}: {text: string}) => {
    return <div className='w-40 h-10'>{text}</div>
}

const StyledTab = (
    {
        isActive,
        label,
        value
    } : {
        isActive: boolean
        label: string
        value: TabType
    }
) => {
    return (
        <TabUnstyled
            value={value}
            className={clsx(
                'w-28 h-6 m-1 rounded font-sans font-medium flex items-center justify-center text-sm text-white',
                {'bg-white text-sky-600': isActive},
                {'hover:bg-sky-700': !isActive}
            )}
        >
            {label}
        </TabUnstyled>
    )
}

function getTabName(tab: TabType) {
    switch (tab) {
        case Tab.Login: 
            return 'Вход'
        case Tab.Registration: 
            return 'Регистрация'
        default:
            throw new Error('Cant get tab name')
    }
}

const Tab = {
    Login: 'Login',
    Registration: 'Registration'
} as const

type TabType = ObjectValues<typeof Tab>

const LoginTab = (
    {
        value,
        children
    } : {
        value: string
        children: ReactNode
    }
) => {
    return (
        <TabPanelUnstyled 
            className='rounded'
            value={value}
        >
            {children}
        </TabPanelUnstyled>
    )
}

const inputStyles = 'rounded-sm px-1 hover:bg-white'

type LoginInputs = {
    email: string,
    password: string,
}

const LoginForm = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginInputs>()
    const onSubmit: SubmitHandler<LoginInputs> = async data => {
        console.log(data.password, data.email, 'pas email')
        const result = await signIn('credentials', {
            email: data.email,
            password: data.password
        })

        console.log(result, 'res')
    }

    /* TODO: В свободное время изучить как работает доступ к значению через watch */
    /* а так же типизация (watch подтягивает типы из LoginInputs) */
    //console.log(watch('email'), 'watch')

    return (
        <form onSubmit={handleSubmit(onSubmit)} action='login'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>E-mail:</label>
                <input className={inputStyles} defaultValue={'email'} id='email' type='email' {...register('email')} />
                <label htmlFor='password'>Пароль:</label>
                <input className={inputStyles} id='password' type='password' {...register('password', {required: true})} />
                {errors.password && <p>This field is required</p>}
                <input type='submit' value='Войти' />
            </div>
        </form>
    )
}

const RegistrationForm = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<ISignUp>({
        resolver: zodResolver(signUpSchema)
    })

    const {mutate: createUser} = api.user.create.useMutation({
        // onSuccess: (data, params) => {
        //     signIn('credentials', {
        //         email: params.email,
        //         password: params.password
        //     })
        // }
    })
    const onSubmit: SubmitHandler<ISignUp> = async data => {
        createUser({username: data.username, email: data.email, password: data.password})
        // const result = await signIn('credentials', {
        //     email: data.email,
        //     password: data.password
        // })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} action='login'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='username'>Имя пользователя:</label>
                <input className={inputStyles} placeholder={'Имя пользователя...'} id='username' type='text' {...register('username')} />
                <label htmlFor='email'>E-mail:</label>
                <input className={inputStyles} placeholder={'email'} id='email' type='email' {...register('email')} />
                <label htmlFor='password'>Пароль:</label>
                <input className={inputStyles} id='password' type='password' {...register('password', {required: true})} />
                {errors.password && <p>This field is required</p>}
                <input type='submit' value='Войти' />
            </div>
        </form>
    )
}

function getLoginTabContent(tab: TabType) {
    
    switch (tab) {
        case Tab.Login: 
            return (
                <LoginForm />
            )
        case Tab.Registration: 
            return (
                <RegistrationForm />
            )
        default: 
            throw new Error('Cant get tab content')
    }
}

function AuthWithCredentials({onClose}:{onClose: () => void}) {
    const [activeTab, setActiveTab] = useState<TabType>(Tab.Login)

    const changeTab = (tab: TabType) => {
        setActiveTab(tab) 
    }

    return (
        
            
        <div className='bg-white p-1 rounded'>
            <TabsUnstyled value={activeTab} onChange={(event, tab) => changeTab(tab as TabType)}>
                <div className='flex gap-6 justify-center items-center'>
                    <TabsListUnstyled className='inline-flex bg-sky-600 rounded'>
                        {
                            (Object.keys(Tab) as (keyof typeof Tab)[]).map(tab => {
                                return (
                                    <StyledTab 
                                        isActive={tab === activeTab} 
                                        label={getTabName(tab)}
                                        value={tab}
                                    />
                                )
                            })
                        }
                    </TabsListUnstyled>
                    <button
                        onClick={e => onClose()}
                        className='flex justify-center items-center h-6 w-6 mx-2 text-neutral-600 hover:text-neutral-900'
                    >
                        {/* <CloseButton className={'w-full h-full'} /> */}
                    </button>
                   
                </div>
                {
                    (Object.keys(Tab) as (keyof typeof Tab)[]).map(tab => {
                        return (
                            <LoginTab value={tab}>
                                <div className='bg-sky-600 rounded mt-1 p-1'>
                                    {getLoginTabContent(tab)}
                                </div>
                            </LoginTab>
                        )
                    })
                }
            </TabsUnstyled>
        </div>
    )
}

export {
    AuthWithCredentials
}