import { AiOutlineUpload } from 'react-icons/ai'
import { IoCloseOutline, IoDownloadOutline } from 'react-icons/io5'
import { LiaSaveSolid } from 'react-icons/lia'
import { useState } from 'react'
import { RingLoader } from 'react-spinners'
import { AnimatePresence, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { MdOutlineHistory } from 'react-icons/md'

import { useMode } from '@/hooks/useMode'
import useModal from '@/hooks/useModal'
import useReportTemplate from '@/hooks/useReportTemplates'
import { getCurrentReportFromSessionStorage } from '@/helpers/sessionStorage.helper'
import { HISTORY_TEMPLATES_ROUTE } from '@/constants'

import cls from '@components/EditingTemplate/index.module.scss'

const EditingTemplate: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const navigate = useNavigate()

    const { setShowModal } = useModal()
    const { createTemplate, isLoading, template, downloadTemplate } =
        useReportTemplate()

    const [dragEnter, setDragEnter] = useState<boolean>(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const saveTemplate = async () => {
        if (selectedFile) {
            await createTemplate(
                getCurrentReportFromSessionStorage(),
                selectedFile
            )
            setSelectedFile(null)
        }
    }

    const downloadReportTemplate = async () => {
        await downloadTemplate(template.id_uuid)
    }

    const handleUploadFile = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const files = event.target.files
        if (files) {
            setSelectedFile(files[0])
        }
    }

    const dragEnterHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()

        const files = [...event.dataTransfer.files]
        setSelectedFile(files[0])
        setDragEnter(false)
    }

    const handleCloseWindow = () => setShowModal()

    const goToHistory = () => {
        navigate(HISTORY_TEMPLATES_ROUTE)
        setShowModal()
    }

    return (
        <div className={cls.window}>
            <h4 className={`${cls.window__header} ${darkModeClass}`}>
                Редактирование шаблона
            </h4>
            <button
                className={`${cls.window__history} ${darkModeClass}`}
                onClick={goToHistory}
            >
                <span>История шаблонов</span>
                <MdOutlineHistory size={32} />
            </button>
            <button
                className={`${cls.window__close} ${darkModeClass}`}
                onClick={handleCloseWindow}
            >
                <IoCloseOutline size={34} />
            </button>
            <div className={cls.window__actions}>
                <button
                    className={`${cls.window__actions__btns} ${darkModeClass}`}
                    onClick={downloadReportTemplate}
                    disabled={!!!template}
                >
                    <span>Скачать</span>
                    <IoDownloadOutline size={26} />
                </button>
                <div className={cls.disk__actions__upload}>
                    <label
                        htmlFor='upload-label'
                        className={`${cls.window__actions__upload__label} ${darkModeClass}`}
                    >
                        Загрузить файл
                    </label>
                    <input
                        onChange={handleUploadFile}
                        type='file'
                        id='upload-label'
                        className={cls.window__actions__upload__input}
                        accept='.docx'
                    />
                </div>
                <button
                    className={`${cls.window__actions__btns} ${darkModeClass}`}
                    disabled={!!!selectedFile}
                    onClick={saveTemplate}
                >
                    <span>Сохранить</span>
                    <LiaSaveSolid size={26} />
                </button>
            </div>
            <div
                className={`${cls.window__upload} ${darkModeClass}`}
                onDragEnter={dragEnterHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragEnterHandler}
                onDrop={dropHandler}
            >
                <AnimatePresence>
                    {!isLoading ? (
                        <>
                            {!selectedFile || dragEnter ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className={`${cls.window__upload__zone} ${darkModeClass}`}
                                >
                                    <AiOutlineUpload size={58} />
                                </motion.div>
                            ) : (
                                <span>{selectedFile?.name}</span>
                            )}
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='loader'
                        >
                            <RingLoader color='#36d7b7' />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default EditingTemplate
