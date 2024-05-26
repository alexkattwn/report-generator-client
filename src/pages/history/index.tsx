import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import { useMode } from '@/hooks/useMode'
import ListTemplates from '@/pages/history/ListTemplates'
import ChangingView from '@/pages/history/ChangingView'
import useSidebar from '@/hooks/useSidebar'
import { delayValue } from '@/constants'
import useDebounce from '@/hooks/useDebounce'
import { getCurrentReportFromSessionStorage } from '@/helpers/sessionStorage.helper'
import useReportTemplate from '@/hooks/useReportTemplates'
import SearchField from '@/pages/history/SearchField'

import cls from '@/pages/history/index.module.scss'

const HistoryTemplatesPage: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const [dragEnter, setDragEnter] = useState<boolean>(false)

    const { selectedReport } = useSidebar()

    const [searchValue, setSearchValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(searchValue, delayValue)

    const { getAllTemplates, createTemplate } = useReportTemplate()

    const handleClear = () => setSearchValue('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchValue(e.target.value)

    useEffect(() => {
        ;(async () =>
            await getAllTemplates(
                getCurrentReportFromSessionStorage(),
                1,
                debouncedValue
            ))()
    }, [debouncedValue])

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

    const dropHandler = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()

        const files = [...event.dataTransfer.files]

        if (files[0]) {
            await createTemplate(getCurrentReportFromSessionStorage(), files[0])
        }

        setDragEnter(false)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.page}
        >
            <Helmet>
                <title>NuclearIDM | История шаблонов</title>
            </Helmet>
            <div
                className={`${cls.page__main} ${darkModeClass}`}
                onDragEnter={dragEnterHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragEnterHandler}
            >
                <div className={cls.page__main__head}>
                    <h2
                        className={`${cls.page__main__head__text} ${darkModeClass}`}
                    >{`История шаблонов для отчета "${selectedReport}"`}</h2>
                    <div className={cls.page__main__head__actions}>
                        <ChangingView />
                    </div>
                </div>
                <SearchField
                    handleChange={handleChange}
                    handleClear={handleClear}
                    searchValue={searchValue}
                />
                {!dragEnter ? (
                    <ListTemplates />
                ) : (
                    <div
                        className={`${cls.drop_area} ${darkModeClass}`}
                        onDragEnter={dragEnterHandler}
                        onDragLeave={dragLeaveHandler}
                        onDragOver={dragEnterHandler}
                        onDrop={dropHandler}
                    >
                        Перетащите файлы сюда
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default HistoryTemplatesPage
