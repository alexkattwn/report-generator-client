import { motion } from 'framer-motion'

import cls from '@/pages/history/index.module.scss'

const HistoryTemplatesPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.page}
        >
            HistoryTemplatesPage
        </motion.div>
    )
}

export default HistoryTemplatesPage
