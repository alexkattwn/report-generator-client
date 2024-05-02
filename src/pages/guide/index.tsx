import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react'

import { useMode } from '@/hooks/useMode'
import useUsersGuide from '@/hooks/useUsersGuide'
import GuideElement from '@/pages/guide/GuideElement'

import cls from '@/pages/guide/index.module.scss'

const GuidePage: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { getGuide, isLoading, guide } = useUsersGuide()

    const [isVisibleButton, setIsVisibleButton] = useState<boolean>(false)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const { ref, inView } = useInView({
        threshold: 0,
    })

    useEffect(() => {
        getGuide('5ed757ec-cd92-4e59-9450-03086500178f')
    }, [])

    useEffect(() => {
        setIsVisibleButton(!inView)
    }, [inView])

    const scrollToTop = () =>
        document
            .getElementById('guide')
            ?.scrollIntoView({ block: 'start', behavior: 'smooth' })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.page}
        >
            <div className={cls.page__main} id='guide'>
                <div ref={ref} />
                <div className={`${cls.page__main__header} ${darkModeClass}`}>
                    <h3>Руководство пользователя</h3>
                </div>
                <div className={`${cls.page__main__content} ${darkModeClass}`}>
                    {!isLoading && (
                        <>
                            {guide?.map((element) => (
                                <GuideElement
                                    key={element.id_uuid}
                                    element={element}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
            <AnimatePresence>
                {isVisibleButton && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        ref={buttonRef}
                        onClick={scrollToTop}
                        className={`${cls.page__btn} ${darkModeClass}`}
                    >
                        <MdOutlineKeyboardDoubleArrowUp size={32} />
                        <span>Наверх</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default GuidePage
