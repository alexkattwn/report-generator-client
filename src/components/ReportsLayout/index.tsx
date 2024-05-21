import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Sidebar from '@/components/Sidebar'

import cls from '@components/ReportsLayout/index.module.scss'

const ReportsLayout: React.FC = () => (
    <div className={cls.layout}>
        <Sidebar />
        <AnimatePresence>
            <Outlet />
        </AnimatePresence>
    </div>
)
export default ReportsLayout
