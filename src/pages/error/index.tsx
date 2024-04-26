import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import { HOME_ROUTE } from '@/constants'
import { useMode } from '@/hooks/useMode'

import cls from '@/pages/error/index.module.scss'

import imgLight from '@assets/images/not-found.jpg'
import imgDark from '@assets/images/not-found-dark.jpg'

const ErrorPage: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <div className={`${cls.error} ${darkModeClass}`}>
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
                Вернуться к отчетам
            </Link>
        </div>
    )
}

export default ErrorPage
