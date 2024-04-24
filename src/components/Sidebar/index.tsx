import { AnimatePresence, motion } from 'framer-motion'
import {
    MdOutlineKeyboardDoubleArrowRight,
    MdOutlineKeyboardDoubleArrowLeft,
} from 'react-icons/md'

import { useMode } from '@/hooks/useMode'
import Accordion from '@components/Accordion'
import { dataAccordion } from '@/constants'
import useSidebar from '@/hooks/useSidebar'

import cls from '@components/Sidebar/index.module.scss'

const Sidebar: React.FC = () => {
    const { isOpen, setIsOpen } = useSidebar()

    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <>
            {!isOpen && (
                <button
                    className={`${cls.btnOpen} ${darkModeClass}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <MdOutlineKeyboardDoubleArrowRight
                        data-tooltip-id='tooltip'
                        data-tooltip-content='Развернуть'
                        data-tooltip-place='right'
                        size={36}
                    />
                </button>
            )}
            <div
                className={`${cls.sidebar} ${
                    isOpen ? cls.active : ''
                } ${darkModeClass}`}
            >
                {isOpen && (
                    <>
                        <div className={cls.sidebar__header}>
                            <h2
                                className={`${cls.sidebar__header__text} ${darkModeClass}`}
                            >
                                Отчеты
                            </h2>
                            <motion.button
                                className={`${cls.sidebar__header__back} ${darkModeClass}`}
                                onClick={() => setIsOpen(!isOpen)}
                                initial={{ x: -200, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.05 }}
                            >
                                <MdOutlineKeyboardDoubleArrowLeft
                                    data-tooltip-id='tooltip'
                                    data-tooltip-content='Свернуть'
                                    data-tooltip-place='right'
                                    size={36}
                                />
                            </motion.button>
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
