import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { motion, AnimatePresence, useCycle } from 'framer-motion'
import { useState } from 'react'

import AccordionItem from '@components/AccordionItem'
import { IField } from '@/types/common'
import { useMode } from '@/hooks/useMode'

import cls from '@components/Accordion/index.module.scss'

interface AccordionProps {
    title: string
    fields?: IField[]
}

const Accordion: React.FC<AccordionProps> = ({ title, fields }) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const [animate, cycle] = useCycle({ rotate: 0 }, { rotate: 180 })

    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <div className={cls.accordion}>
            <motion.div
                initial={false}
                animate={{
                    backgroundColor: isActive
                        ? mode === 'dark'
                            ? 'var(--bg-input)'
                            : 'var(--light-blue-translucent)'
                        : mode === 'dark'
                        ? 'var(--bg-input)'
                        : 'var(--color-white)',
                }}
                className={`${cls.accordion__header} ${darkModeClass}`}
                onClick={() => setIsActive(!isActive)}
                onTap={() => cycle()}
            >
                <span
                    className={`${cls.accordion__header__title} ${darkModeClass}`}
                >
                    {title}
                </span>
                <motion.div
                    animate={animate}
                    className={`${cls.accordion__header__arrow} ${darkModeClass}`}
                >
                    <MdOutlineKeyboardArrowDown size={26} />
                </motion.div>
            </motion.div>
            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div
                        initial='collapsed'
                        animate='open'
                        exit='collapsed'
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                            duration: 0.2,
                            ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                    >
                        {fields?.map((field) => (
                            <AccordionItem key={field.title} field={field} />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Accordion
