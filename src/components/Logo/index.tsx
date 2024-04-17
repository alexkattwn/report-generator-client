import { useMode } from '@/hooks/useMode'

import cls from '@components/Logo/index.module.scss'

const Logo: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <div className={cls.logo}>
            {mode === 'dark' ? (
                <img src='/images/logo-dark.png' alt='Logo' />
            ) : (
                <img src='/images/logo.png' alt='Logo' />
            )}
            <div className={`${cls.logo__line} ${darkModeClass}`} />
            <div className={cls.logo__name}>
                <span className={`${cls.logo__name__org}`}>ПСЗ</span>
                <div>
                    <span
                        className={`${cls.logo__name__first} ${darkModeClass}`}
                    >
                        РОС
                    </span>
                    <span
                        className={`${cls.logo__name__second} ${darkModeClass}`}
                    >
                        АТОМ
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Logo
