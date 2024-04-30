import { IoLogOutOutline } from 'react-icons/io5'
import { PiUserCircleLight } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

import ModeToggler from '@components/ModeToggler'
import { useMode } from '@/hooks/useMode'
import useAuth from '@/hooks/useAuth'
import inMemoryJWT from '@/services/inMemoryJWT'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { usePopup } from '@/hooks/usePopup'
import Logo from '@components/Logo'
import { USERS_GUIDE_ROUTE } from '@/constants'
import useSidebar from '@/hooks/useSidebar'

import cls from '@components/Header/index.module.scss'

const Header: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const navigate = useNavigate()

    const { isAuthorized, setIsAuthorized, currentUser } = useAuth()
    const { setSelectedReport } = useSidebar()

    const { toggleOpen, open, closePopup } = usePopup()

    const isMedia620 = useMediaQuery(620)

    const handleLogout = () => {
        inMemoryJWT.deleteToken()
        setIsAuthorized(false)
        if (open) closePopup()
    }

    const handlePopup = () => {
        if (open) return closePopup()
        return toggleOpen()
    }

    const navigateToInstructions = () => {
        navigate(USERS_GUIDE_ROUTE, { replace: true })
        setSelectedReport('')
        if (isMedia620) closePopup()
    }

    return (
        <header className={`${cls.header} ${darkModeClass}`}>
            {isMedia620 && (
                <>
                    {isAuthorized && (
                        <button
                            onClick={handlePopup}
                            className={`${cls.burger_menu} ${
                                open ? cls.open : ''
                            } ${darkModeClass}`}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    )}

                    <Logo />
                    <div className={cls.header__nav__toggle}>
                        <ModeToggler />
                    </div>
                </>
            )}
            <div
                className={`${cls.header__nav}  ${
                    open ? cls.open : ''
                } ${darkModeClass}`}
            >
                {!isMedia620 && (
                    <>
                        <Logo />
                        <div className={cls.header__nav__toggle}>
                            <ModeToggler />
                        </div>
                    </>
                )}
                {isAuthorized && (
                    <div className={cls.header__nav__block}>
                        <button
                            onClick={navigateToInstructions}
                            className={`${cls.header__nav__block__instructions} ${darkModeClass}`}
                            data-tooltip-id='tooltip'
                            data-tooltip-content='Руководство пользователя'
                            data-tooltip-place='bottom'
                        >
                            Инструкция
                        </button>
                        <button
                            onClick={handleLogout}
                            className={`${cls.header__nav__block__btn} ${darkModeClass}`}
                        >
                            <IoLogOutOutline
                                data-tooltip-id='tooltip'
                                data-tooltip-content='Выйти'
                                data-tooltip-place='bottom'
                                size={32}
                            />
                        </button>
                        <span
                            className={`${cls.header__nav__block__username} ${darkModeClass}`}
                        >
                            {currentUser?.showname}
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
