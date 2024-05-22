import { motion } from 'framer-motion'

import { useMode } from '@/hooks/useMode'
import ListTemplates from '@/pages/history/ListTemplates'
import ChangingView from '@/pages/history/ChangingView'
import useSidebar from '@/hooks/useSidebar'

import cls from '@/pages/history/index.module.scss'

const HistoryTemplatesPage: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { selectedReport } = useSidebar()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.page}
        >
            <div className={`${cls.page__main} ${darkModeClass}`}>
                <div className={cls.page__main__head}>
                    <h2
                        className={`${cls.page__main__head__text} ${darkModeClass}`}
                    >{`История шаблонов для отчета "${selectedReport}"`}</h2>
                    <div className={cls.page__main__head__actions}>
                        <ChangingView />
                    </div>
                </div>
                <ListTemplates />
            </div>
        </motion.div>
    )
}

export default HistoryTemplatesPage
