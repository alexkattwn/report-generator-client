import { motion } from 'framer-motion'
import { CiFileOn } from 'react-icons/ci'
import {
    MdOutlineCheckBoxOutlineBlank,
    MdOutlineCloudDownload,
    MdOutlineDelete,
    MdOutlineCheckBox,
} from 'react-icons/md'

import { ITemplate } from '@/types/common'
import { useMode } from '@/hooks/useMode'
import { formatDateAndTime } from '@/utils/common'
import { formatSize } from '@/utils/formats'
import useViewHistory from '@/hooks/useViewHistory'
import useReportTemplate from '@/hooks/useReportTemplates'
import useSidebar from '@/hooks/useSidebar'

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
    index: number
    setPage: (page: number) => void
}

const ListItem: React.FC<ListItemProps> = ({ temp, index, setPage }) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { view } = useViewHistory()

    const {
        downloadTemplate,
        removeTemplate,
        getAllTemplates,
        selectTemplate,
    } = useReportTemplate()
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
        setPage(1)
    }

    const selectClickHandler = async (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.stopPropagation()
        await selectTemplate(temp.id_uuid)
        await getAllTemplates(selectedReport, 1)
    }

    if (view === 'list') {
        return (
            <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={variants}
                whileHover={{ scale: 1.025 }}
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
                <button
                    onClick={(e) => selectClickHandler(e)}
                    className={`${cls.template__select} ${darkModeClass}`}
                >
                    {temp.is_selected ? (
                        <MdOutlineCheckBox size={32} />
                    ) : (
                        <MdOutlineCheckBoxOutlineBlank size={32} />
                    )}
                </button>
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
