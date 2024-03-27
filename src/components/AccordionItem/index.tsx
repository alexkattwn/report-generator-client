import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { IField } from '@/types/common'
import { useMode } from '@/hooks/useMode'

import cls from '@components/AccordionItem/index.module.scss'

interface AccordionItemProps {
    field: IField
}

const AccordionItem: React.FC<AccordionItemProps> = ({ field }) => {
    const navigate = useNavigate()

    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <motion.div
            variants={{ collapsed: { scale: 0.94 }, open: { scale: 1 } }}
            transition={{ duration: 0.8 }}
            className={`${cls.item} ${darkModeClass}`}
            onClick={() => navigate(field.path, { replace: true })}
        >
            <motion.span whileHover={{ scale: 1.05 }}>
                {field.title}
            </motion.span>
        </motion.div>
    )
}

export default AccordionItem
