import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { IField } from '@/types/common'
import { useMode } from '@/hooks/useMode'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import useSidebar from '@/hooks/useSidebar'

import cls from '@components/AccordionItem/index.module.scss'

interface AccordionItemProps {
    field: IField
}

const AccordionItem: React.FC<AccordionItemProps> = ({ field }) => {
    const navigate = useNavigate()

    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const isMedia700 = useMediaQuery(700)

    const { setSelectedReport, setIsOpen, selectedReport } = useSidebar()

    const handleClick = () => {
        setSelectedReport(field.title)
        navigate(field.path, { replace: true })
        if (isMedia700) {
            setIsOpen(false)
        }
    }

    return (
        <motion.div
            variants={{ collapsed: { scale: 0.94 }, open: { scale: 1 } }}
            transition={{ duration: 0.2 }}
            className={`${cls.item} ${darkModeClass}`}
            onClick={handleClick}
            animate={{
                backgroundColor:
                    selectedReport === field.title
                        ? mode === 'dark'
                            ? 'var(--bg-input)'
                            : 'var(--light-blue-translucent-light)'
                        : mode === 'dark'
                        ? 'var(--bg-input)'
                        : 'var(--color-white)',
            }}
        >
            <motion.span whileHover={{ scale: 1.05 }}>
                {field.title}
            </motion.span>
        </motion.div>
    )
}

export default AccordionItem
