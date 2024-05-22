import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { PuffLoader } from 'react-spinners'
import ReactPaginate from 'react-paginate'

import { getCurrentReportFromSessionStorage } from '@/helpers/sessionStorage.helper'
import useReportTemplate from '@/hooks/useReportTemplates'
import { useMode } from '@/hooks/useMode'
import ListItem from '@/pages/history/ListItem'
import useViewHistory from '@/hooks/useViewHistory'

import cls from '@/pages/history/ListTemplates/index.module.scss'

const ListTemplates: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { view } = useViewHistory()

    const [page, setPage] = useState<number>(1)
    //const [searchValue, setSearchValue] = useState<string>('')

    const { allTemplates, getAllTemplates, isLoadinAll, totalPages } =
        useReportTemplate()

    useEffect(() => {
        ;(async () =>
            await getAllTemplates(getCurrentReportFromSessionStorage(), 1))()
    }, [])

    const handlePageChange = (selectedItem: { selected: number }) => {
        setPage(selectedItem.selected + 1)
    }

    useEffect(() => {
        ;(async () =>
            await getAllTemplates(getCurrentReportFromSessionStorage(), page))()
    }, [page])

    if (allTemplates.length === 0 && !isLoadinAll) {
        return (
            <div className={`${cls.empty} ${darkModeClass}`}>
                Здесь пока пусто...
            </div>
        )
    }

    if (view === 'list') {
        return (
            <>
                {!isLoadinAll ? (
                    <div className={`${cls.list} ${darkModeClass}`}>
                        <div className={cls.list__header}>
                            <span className={cls.list__name}>
                                Название файла
                            </span>
                            <span className={cls.list__date}>
                                Дата загрузки
                            </span>
                            <span className={cls.list__size}>Размер</span>
                        </div>
                        <AnimatePresence>
                            {allTemplates.map((temp, index) => (
                                <ListItem
                                    key={temp.id_uuid}
                                    temp={temp}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className='loader'>
                        <PuffLoader color='#36d7b7' size={80} />
                    </div>
                )}
                {allTemplates.length > 0 ? (
                    <ReactPaginate
                        className={cls.paginate}
                        activeClassName={`${cls.paginate__active} ${darkModeClass}`}
                        pageLinkClassName={`${cls.paginate__page_link} ${darkModeClass}`}
                        previousClassName={cls.paginate__previous}
                        nextClassName={cls.paginate__next}
                        disabledClassName={cls.paginate__disabled}
                        disabledLinkClassName={cls.paginate__disabled_link}
                        pageCount={Math.ceil(totalPages)}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageChange}
                        nextLabel='>'
                        previousLabel='<'
                        breakLabel=' '
                    />
                ) : (
                    <div>{''}</div>
                )}
            </>
        )
    }

    if (view === 'plate') {
        return (
            <>
                {!isLoadinAll ? (
                    <div className={cls.plate}>
                        <AnimatePresence>
                            {allTemplates.map((temp, index) => (
                                <ListItem
                                    key={temp.id_uuid}
                                    temp={temp}
                                    index={index}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className='loader'>
                        <PuffLoader color='#36d7b7' size={80} />
                    </div>
                )}
                {allTemplates.length > 0 ? (
                    <ReactPaginate
                        className={cls.paginate}
                        activeClassName={`${cls.paginate__active} ${darkModeClass}`}
                        pageLinkClassName={`${cls.paginate__page_link} ${darkModeClass}`}
                        previousClassName={cls.paginate__previous}
                        nextClassName={cls.paginate__next}
                        disabledClassName={cls.paginate__disabled}
                        disabledLinkClassName={cls.paginate__disabled_link}
                        pageCount={Math.ceil(totalPages)}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageChange}
                        nextLabel='>'
                        previousLabel='<'
                        breakLabel=' '
                    />
                ) : (
                    <div>{''}</div>
                )}
            </>
        )
    }
}

export default ListTemplates
