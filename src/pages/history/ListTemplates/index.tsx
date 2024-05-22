import { useEffect } from 'react'

import { getCurrentReportFromSessionStorage } from '@/helpers/sessionStorage.helper'
import useReportTemplate from '@/hooks/useReportTemplates'

import cls from '@/pages/history/ListTemplates/index.module.scss'
import { AnimatePresence } from 'framer-motion'
import ListItem from '../ListItem'
import { PuffLoader } from 'react-spinners'

const ListTemplates: React.FC = () => {
    const { allTemplates, getAllTemplates, isLoadinAll } = useReportTemplate()

    useEffect(() => {
        ;(async () => {
            await getAllTemplates(getCurrentReportFromSessionStorage(), 1)
        })()
    }, [])

    return (
        <>
            {!isLoadinAll ? (
                <div className={cls.list}>
                    <div className={cls.list__header}>
                        <span className={cls.list__name}>Название</span>
                        <span className={cls.list__date}>Дата</span>
                        <span className={cls.list__size}>Размер</span>
                    </div>
                    <AnimatePresence>
                        {allTemplates.map((temp) => (
                            <ListItem key={temp.id_uuid} temp={temp} />
                        ))}
                    </AnimatePresence>
                </div>
            ) : (
                <div className='loader'>
                    <PuffLoader color='#36d7b7' size={80} />
                </div>
            )}
        </>
    )
}

export default ListTemplates
