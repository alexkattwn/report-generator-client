import { motion } from 'framer-motion'

import { REPORT_ID_ROUTE } from '@/constants'

import cls from '@/pages/reports/individual-doses/index.module.scss'

const IndividualDosesPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.page}
        >
            IndividualDosesPage
            <button
                onClick={() =>
                    window.open(
                        REPORT_ID_ROUTE,
                        '_blank'
                        //'rel=noopener noreferrer'
                    )
                }
            >
                view
            </button>
        </motion.div>
    )
}

export default IndividualDosesPage
