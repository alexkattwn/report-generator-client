import { useState } from 'react'

import useAuth from '@/hooks/useAuth'
import Input from '@/components/Input'
import { useMode } from '@/hooks/useMode'

import cls from '@/pages/auth/index.module.scss'

const AuthPage: React.FC = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const { setIsAuthorized } = useAuth()

    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const handleSignIn = async () => {
        //await signIn(name, password)
        setIsAuthorized(true)
    }

    return (
        <div className={cls.auth}>
            <div className={cls.auth__container}>
                <div
                    className={`${cls.auth__container__form} ${darkModeClass}`}
                >
                    <h2 className={cls.auth__container__form__header}>Вход</h2>
                    <div className={cls.auth__container__form__inputs}>
                        <Input
                            label='Логин'
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setName(e.target.value)}
                            id='name'
                            type='text'
                            value={name}
                        />
                        <Input
                            label='Пароль'
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setPassword(e.target.value)}
                            id='password'
                            type='password'
                            value={password}
                        />
                    </div>
                    <button
                        onClick={handleSignIn}
                        className={cls.auth__container__form__btn}
                    >
                        Войти
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AuthPage
