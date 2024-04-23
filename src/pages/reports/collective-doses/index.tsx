import { motion } from 'framer-motion'

import { REPORT_CD_ROUTE } from '@/constants'

import cls from '@/pages/reports/collective-doses/index.module.scss'

const CollectiveDosesPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.page}
        >
            CollectiveDosesPage
            <button onClick={() => window.open(REPORT_CD_ROUTE, '_blank')}>
                view
            </button>
        </motion.div>
    )
}

export default CollectiveDosesPage
