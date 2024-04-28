import { AnimatePresence, motion } from 'framer-motion'
import { SetURLSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import { useMode } from '@/hooks/useMode'
import usePersonal from '@/hooks/usePersonal'
import { formatDate, removeEmptyFields } from '@/utils/common'
import { IParametersIDC, IPersonal } from '@/types/common'
import { setPersonToSessionStorage } from '@/helpers/sessionStorage.helper'
import SearchInput from '@/components/SearchInput'
import useDebounce from '@/hooks/useDebounce'
import { delayValue } from '@/constants'

import cls from '@/pages/reports/individual-dose-card/Table/index.module.scss'

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

interface TableIDCProps {
    setSearchParams: SetURLSearchParams
    parameters: IParametersIDC
    setParameters: (obj: IParametersIDC) => void
}

const TableIDC: React.FC<TableIDCProps> = ({
    parameters,
    setParameters,
    setSearchParams,
}) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { personal, isLoading, getPersonal, totalPages } = usePersonal()

    const [page, setPage] = useState<number>(1)
    const [searchValue, setSearchValue] = useState<string>('')

    const debouncedValue = useDebounce<string>(searchValue, delayValue)

    const handlePageChange = (selectedItem: { selected: number }) => {
        setPage(selectedItem.selected + 1)
    }

    useEffect(() => {
        getPersonal(parameters, page)
    }, [page])

    useEffect(() => {
        getPersonal(parameters, 1)
    }, [])

    const selectPerson = (person: IPersonal) => {
        setPersonToSessionStorage(person.id_uuid)
        setParameters({
            ...parameters,
            id_personal: person.id_uuid,
        })
        setSearchParams(
            {
                ...removeEmptyFields({
                    ...parameters,
                    id_personal: person.id_uuid,
                }),
            },
            { replace: true }
        )
    }

    const handleClear = () => setSearchValue('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchValue(e.target.value)

    useEffect(() => {
        getPersonal(parameters, 1, debouncedValue)
    }, [debouncedValue])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${cls.main} ${darkModeClass}`}
        >
            <SearchInput
                handleChange={handleChange}
                handleClear={handleClear}
                searchValue={searchValue}
            />
            {!isLoading ? (
                <>
                    {personal?.length ? (
                        <table
                            className={`${cls.main__table} ${darkModeClass}`}
                        >
                            <thead>
                                <tr>
                                    <td
                                        className={`${cls.main__table__header} ${cls.main__table__center} ${darkModeClass}`}
                                    >
                                        <span>№</span>
                                    </td>
                                    <td
                                        className={`${cls.main__table__header} ${darkModeClass}`}
                                    >
                                        <span>Фамилия</span>
                                    </td>
                                    <td
                                        className={`${cls.main__table__header} ${darkModeClass}`}
                                    >
                                        <span>Имя</span>
                                    </td>
                                    <td
                                        className={`${cls.main__table__header} ${darkModeClass}`}
                                    >
                                        <span>Отчество</span>
                                    </td>
                                    <td
                                        className={`${cls.main__table__header} ${darkModeClass}`}
                                    >
                                        <span>Должность</span>
                                    </td>
                                    <td
                                        className={`${cls.main__table__header} ${darkModeClass}`}
                                    >
                                        <span>Пол</span>
                                    </td>
                                    <td
                                        className={`${cls.main__table__header} ${darkModeClass}`}
                                    >
                                        <span>Дата рождения</span>
                                    </td>
                                    <td
                                        className={`${cls.main__table__header} ${darkModeClass}`}
                                    >
                                        <span>Табельный номер</span>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <AnimatePresence>
                                    {personal?.map((person, index) => (
                                        <motion.tr
                                            initial={{
                                                opacity: 0,
                                                x: index % 2 === 0 ? -100 : 100,
                                            }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.2,
                                                delay: index * 0.1,
                                            }}
                                            variants={variants}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.9 }}
                                            key={index}
                                            className={`${
                                                cls.main__table__line
                                            } ${darkModeClass} ${
                                                parameters.id_personal ===
                                                    person.id_uuid &&
                                                cls.selected
                                            }`}
                                            onClick={() => selectPerson(person)}
                                        >
                                            <td
                                                className={`${cls.main__table__body} ${darkModeClass}`}
                                            >
                                                <span>{index + 1}</span>
                                            </td>
                                            <td
                                                className={`${cls.main__table__body} ${cls.fio} ${darkModeClass}`}
                                            >
                                                <span>{person.surname}</span>
                                            </td>
                                            <td
                                                className={`${cls.main__table__body} ${cls.fio} ${darkModeClass}`}
                                            >
                                                <span>{person.name}</span>
                                            </td>
                                            <td
                                                className={`${cls.main__table__body} ${cls.fio} ${darkModeClass}`}
                                            >
                                                <span>{person.patronymic}</span>
                                            </td>
                                            <td
                                                className={`${cls.main__table__body} ${cls.post} ${darkModeClass}`}
                                            >
                                                <span>{person.name_post}</span>
                                            </td>
                                            <td
                                                className={`${cls.main__table__body} ${darkModeClass}`}
                                            >
                                                <span>{person.sex}</span>
                                            </td>
                                            <td
                                                className={`${cls.main__table__body} ${darkModeClass}`}
                                            >
                                                <span>
                                                    {formatDate(
                                                        person.birthday
                                                    )}
                                                </span>
                                            </td>
                                            <td
                                                className={`${cls.main__table__body} ${darkModeClass}`}
                                            >
                                                <span>
                                                    {person.personnel_number}
                                                </span>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    ) : (
                        <div className={`${cls.main__empty} ${darkModeClass}`}>
                            Персонал не найден...
                        </div>
                    )}
                </>
            ) : (
                <motion.table
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`${cls.skeleton} `}
                >
                    <tbody>
                        {[...Array(5)].map((_, i) => (
                            <tr
                                className={`${cls.skeleton__item} ${
                                    mode === 'dark' ? `${cls.dark_mode}` : ''
                                }`}
                                key={i}
                            >
                                {[...Array(8)].map((_, i) => (
                                    <td
                                        key={i}
                                        className={cls.skeleton__item__light}
                                    />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </motion.table>
            )}
            {personal?.length > 0 ? (
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
        </motion.div>
    )
}

export default TableIDC
