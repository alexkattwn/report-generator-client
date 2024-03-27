import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
    MdOutlineKeyboardDoubleArrowRight,
    MdOutlineKeyboardDoubleArrowLeft,
} from 'react-icons/md'

import { useMode } from '@/hooks/useMode'
import Accordion from '@components/Accordion'
import { dataAccordion } from '@/constants'

import cls from '@components/Sidebar/index.module.scss'

const Sidebar: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <>
            {!isActive && (
                <button
                    className={`${cls.btnOpen} ${darkModeClass}`}
                    onClick={() => setIsActive(!isActive)}
                >
                    <MdOutlineKeyboardDoubleArrowRight
                        data-tooltip-id='tooltip'
                        data-tooltip-content='Развернуть'
                        data-tooltip-delay-hide={100}
                        data-tooltip-place='right'
                        data-tooltip-variant='info'
                        size={36}
                    />
                </button>
            )}
            <div
                className={`${cls.sidebar} ${
                    isActive ? cls.active : ''
                } ${darkModeClass}`}
            >
                {isActive && (
                    <>
                        <div className={cls.sidebar__header}>
                            <h2
                                className={`${cls.sidebar__header__text} ${darkModeClass}`}
                            >
                                Отчеты
                            </h2>
                            <button
                                className={`${cls.sidebar__header__back} ${darkModeClass}`}
                                onClick={() => setIsActive(!isActive)}
                            >
                                <MdOutlineKeyboardDoubleArrowLeft
                                    data-tooltip-id='tooltip'
                                    data-tooltip-content='Свернуть'
                                    data-tooltip-delay-hide={100}
                                    data-tooltip-place='right'
                                    data-tooltip-variant='info'
                                    size={36}
                                />
                            </button>
                        </div>
                        <div className={cls.sidebar__content}>
                            <AnimatePresence>
                                {dataAccordion.map((accordion) => (
                                    <Accordion
                                        key={accordion.title}
                                        title={accordion.title}
                                        fields={accordion.fields}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Sidebar
