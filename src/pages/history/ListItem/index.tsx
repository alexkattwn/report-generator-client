import { motion } from 'framer-motion'
import { CiFileOn } from 'react-icons/ci'

import { ITemplate } from '@/types/common'
import { useMode } from '@/hooks/useMode'
import { formatDateAndTime } from '@/utils/common'
import { formatSize } from '@/utils/formats'

import cls from '@/pages/history/ListItem/index.module.scss'

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

interface ListItemProps {
    temp: ITemplate
}

const ListItem: React.FC<ListItemProps> = ({ temp }) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            variants={variants}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.9 }}
            className={cls.template}
        >
            <CiFileOn
                size={62}
                className={`${cls.template__icon} ${darkModeClass}`}
            />
            <div className={cls.template__name}>{temp.title}</div>
            <div className={cls.template__btns}></div>
            <div className={cls.template__date}>
                {formatDateAndTime(temp.date_creation)}
            </div>
            <div className={cls.template__size}>{formatSize(temp.size)}</div>
        </motion.li>
    )
}

export default ListItem
