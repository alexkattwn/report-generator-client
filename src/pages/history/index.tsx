import { motion } from 'framer-motion'

import { useMode } from '@/hooks/useMode'
import ListTemplates from '@/pages/history/ListTemplates'

import cls from '@/pages/history/index.module.scss'

const HistoryTemplatesPage: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.page}
        >
            <div className={`${cls.page__main} ${darkModeClass}`}>
                HistoryTemplatesPage
                <ListTemplates />
            </div>
        </motion.div>
    )
}

export default HistoryTemplatesPage
