import { motion } from 'framer-motion'

import cls from '@/pages/reports/individual-dose-card/index.module.scss'
import { useNavigate } from 'react-router-dom'

const IndividualDoseCardReportPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.page}
        >
            <button
                onClick={() =>
                    //window.open('/test', '_blank', 'rel=noopener noreferrer')
                    navigate('/test', { replace: true })
                }
            >
                Посмотреть отчет
            </button>
        </motion.div>
    )
}

export default IndividualDoseCardReportPage
