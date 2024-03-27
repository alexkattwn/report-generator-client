import { IoLogOutOutline } from 'react-icons/io5'
import { PiUserCircleLight } from 'react-icons/pi'

import ModeToggler from '@components/ModeToggler'
import { useMode } from '@/hooks/useMode'
import useAuth from '@/hooks/useAuth'
import inMemoryJWT from '@/services/inMemoryJWT'

import cls from '@components/Header/index.module.scss'

const Header: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { isAuthorized, setIsAuthorized } = useAuth()

    const handleLogout = () => {
        inMemoryJWT.deleteToken()
        setIsAuthorized(false)
    }

    return (
        <header className={`${cls.header} ${darkModeClass}`}>
            <div className={cls.header__nav}>
                <div className={cls.header__nav__logo}>
                    <img src='/images/logo.png' alt='Logo' />
                    <div className={cls.header__nav__logo__name}>
                        <span
                            className={`${cls.header__nav__logo__name__first} ${darkModeClass}`}
                        >
                            РОС
                        </span>
                        <span
                            className={`${cls.header__nav__logo__name__second} ${darkModeClass}`}
                        >
                            АТОМ
                        </span>
                    </div>
                </div>
                <div className={cls.header__nav__toggle}>
                    <ModeToggler />
                </div>
                {isAuthorized && (
                    <div className={cls.header__nav__block}>
                        <button
                            onClick={handleLogout}
                            className={`${cls.header__nav__block__btn} ${darkModeClass}`}
                        >
                            <IoLogOutOutline
                                data-tooltip-id='tooltip'
                                data-tooltip-content='Выйти'
                                data-tooltip-delay-hide={100}
                                data-tooltip-place='bottom'
                                data-tooltip-variant='info'
                                size={32}
                            />
                        </button>
                        <span
                            className={`${cls.header__nav__block__username} ${darkModeClass}`}
                        >
                            Иванов И.И.
                        </span>
                        <button
                            className={`${cls.header__nav__block__btn} ${darkModeClass}`}
                        >
                            <PiUserCircleLight size={40} />
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
