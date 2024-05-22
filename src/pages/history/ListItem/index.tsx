import { motion } from 'framer-motion'
import { CiFileOn } from 'react-icons/ci'
import { MdOutlineCloudDownload, MdOutlineDelete } from 'react-icons/md'

import { ITemplate } from '@/types/common'
import { useMode } from '@/hooks/useMode'
import { formatDateAndTime } from '@/utils/common'
import { formatSize } from '@/utils/formats'
import useViewHistory from '@/hooks/useViewHistory'
import useReportTemplate from '@/hooks/useReportTemplates'
import useSidebar from '@/hooks/useSidebar'

import cls from '@/pages/history/ListItem/index.module.scss'

interface ListItemProps {
    temp: ITemplate
    index: number
}

const ListItem: React.FC<ListItemProps> = ({ temp, index }) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { view } = useViewHistory()

    const { downloadTemplate, removeTemplate, getAllTemplates } =
        useReportTemplate()
    const { selectedReport } = useSidebar()

    const downloadClickHandler = async (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.stopPropagation()
        await downloadTemplate(temp.id_uuid)
    }

    const deleteClickHandler = async (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.stopPropagation()
        await removeTemplate(temp.id_uuid)
        await getAllTemplates(selectedReport, 1)
    }

    if (view === 'list') {
        return (
            <motion.li
                initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.2,
                    delay: index * 0.1,
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
                key={index}
                className={`${cls.template} ${darkModeClass}`}
            >
                <CiFileOn size={64} className={cls.template__icon} />
                <div
                    className={cls.template__name}
                    title={`${temp.title}.${temp.type}`}
                >
                    {`${temp.title}.${temp.type}`}
                </div>
                <div className={cls.template__btns}>
                    <button
                        onClick={(e) => downloadClickHandler(e)}
                        className={`${cls.template__btn} ${cls.template__download} ${darkModeClass}`}
                    >
                        <MdOutlineCloudDownload size={42} />
                    </button>
                    <button
                        onClick={(e) => deleteClickHandler(e)}
                        className={`${cls.template__btn} ${cls.template__delete} ${darkModeClass}`}
                    >
                        <MdOutlineDelete size={42} />
                    </button>
                </div>
                <div className={cls.template__date}>
                    {formatDateAndTime(temp.date_creation)}
                </div>
                <div className={cls.template__size}>
                    {formatSize(temp.size)}
                </div>
            </motion.li>
        )
    }

    if (view === 'plate') {
        return (
            <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.9 }}
                className={`${cls.template_plate} ${darkModeClass}`}
            >
                <CiFileOn size={62} className={cls.template_plate__icon} />
                <div
                    className={cls.template_plate__name}
                    title={`${temp.title}.${temp.type}`}
                >
                    {`${temp.title}.${temp.type}`}
                </div>
                <div className={cls.template_plate__btns}>
                    <button
                        onClick={(e) => downloadClickHandler(e)}
                        className={`${cls.template_plate__btn} ${cls.template_plate__download} ${darkModeClass}`}
                    >
                        <MdOutlineCloudDownload size={36} />
                    </button>
                    <button
                        onClick={(e) => deleteClickHandler(e)}
                        className={`${cls.template_plate__btn} ${cls.template_plate__delete}  ${darkModeClass}`}
                    >
                        <MdOutlineDelete size={36} />
                    </button>
                </div>
            </motion.li>
        )
    }
}

export default ListItem
