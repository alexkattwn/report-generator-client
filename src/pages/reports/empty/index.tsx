import { motion } from 'framer-motion'
import { SiDocusaurus } from 'react-icons/si'
import { Helmet } from 'react-helmet-async'

import { useMode } from '@/hooks/useMode'

import cls from '@/pages/reports/empty/index.module.scss'

const EmptyReportPage: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${cls.page} ${darkModeClass}`}
        >
            <Helmet>
                <title>NuclearIDM | Отчеты</title>
            </Helmet>
            <SiDocusaurus size={142} />
        </motion.div>
    )
}

export default EmptyReportPage
