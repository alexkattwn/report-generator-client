import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

import useAuth from '@/hooks/useAuth'
import Input from '@/components/Input'
import { useMode } from '@/hooks/useMode'

import cls from '@/pages/auth/index.module.scss'

const AuthPage: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { signIn } = useAuth()

    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const handleSignIn = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault()
        await signIn(name, password)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.auth}
        >
            <Helmet>
                <title>NuclearIDM | Авторизация</title>
            </Helmet>
            <div className={cls.auth__container}>
                <form
                    onSubmit={handleSignIn}
                    className={`${cls.auth__container__form} ${darkModeClass}`}
                >
                    <h2 className={cls.auth__container__form__header}>Вход</h2>
                    <div className={cls.auth__container__form__inputs}>
                        <Input
                            label='Логин'
                            onChange={(e) => setName(e.target.value)}
                            id='name'
                            type='text'
                            value={name}
                        />
                        <Input
                            label='Пароль'
                            onChange={(e) => setPassword(e.target.value)}
                            id='password'
                            type='password'
                            value={password}
                        />
                    </div>
                    <button
                        type='submit'
                        className={cls.auth__container__form__btn}
                    >
                        Войти
                    </button>
                </form>
            </div>
        </motion.div>
    )
}

export default AuthPage
