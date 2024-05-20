import { AiOutlineUpload } from 'react-icons/ai'
import { IoCloseOutline, IoDownloadOutline } from 'react-icons/io5'
import { LiaSaveSolid } from 'react-icons/lia'
import { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners'

import { useMode } from '@/hooks/useMode'
import useModal from '@/hooks/useModal'
import useReportTemplate from '@/hooks/useReportTemplates'
import { getCurrentReportFromSessionStorage } from '@/helpers/sessionStorage.helper'

import cls from '@components/EditingTemplate/index.module.scss'

const EditingTemplate: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { setShowModal } = useModal()
    const {
        createTemplate,
        getTemplate,
        isLoading,
        template,
        downloadTemplate,
    } = useReportTemplate()

    const [dragEnter, setDragEnter] = useState<boolean>(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    useEffect(() => {
        getTemplate(getCurrentReportFromSessionStorage())
    }, [])

    const saveTemplate = async () => {
        if (selectedFile) {
            await createTemplate(
                getCurrentReportFromSessionStorage(),
                selectedFile
            )
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

    return (
        <div className={cls.window}>
            <h4 className={`${cls.window__header} ${darkModeClass}`}>
                Редактирование шаблона
            </h4>
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
                        accept='.doc,.docx'
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
                {(!selectedFile || dragEnter) && !isLoading ? (
                    <div
                        className={`${cls.window__upload__zone} ${darkModeClass}`}
                    >
                        <AiOutlineUpload size={58} />
                    </div>
                ) : (
                    <span>{selectedFile?.name}</span>
                )}
                {isLoading && (
                    <div className='loader'>
                        <RingLoader color='#36d7b7' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default EditingTemplate
