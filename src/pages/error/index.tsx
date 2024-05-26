import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

import { HOME_ROUTE } from '@/constants'
import { useMode } from '@/hooks/useMode'
import useAuth from '@/hooks/useAuth'

import cls from '@/pages/error/index.module.scss'

import imgLight from '@assets/images/not-found.jpg'
import imgDark from '@assets/images/not-found-dark.jpg'

const ErrorPage: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { isAuthorized } = useAuth()

    return (
        <div className={`${cls.error} ${darkModeClass}`}>
            <Helmet>
                <title>NuclearIDM | Страница не найдена</title>
            </Helmet>
            <AnimatePresence>
                {mode === 'dark' ? (
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        src={imgDark}
                        alt='Not Found'
                        className={cls.error__img}
                    />
                ) : (
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        src={imgLight}
                        alt='Not Found'
                        className={cls.error__img}
                    />
                )}
            </AnimatePresence>
            <Link
                to={HOME_ROUTE}
                className={`${cls.error__btn}  ${darkModeClass}`}
            >
                {isAuthorized ? 'Вернуться к отчетам' : 'Назад к авторизации'}
            </Link>
        </div>
    )
}

export default ErrorPage
