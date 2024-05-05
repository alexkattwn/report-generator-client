import { SetURLSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RiDeleteBin5Line } from 'react-icons/ri'

import { IFilter, IParametersID } from '@/types/common'
import { showSimpleErrorMessage } from '@/utils/notifications'
import { removeEmptyFields } from '@/utils/common'
import { delayValue, initialStateParametersID } from '@/constants'
import useDebounce from '@/hooks/useDebounce'
import useFilters from '@/hooks/useFilters'
import useSidebar from '@/hooks/useSidebar'
import { useMode } from '@/hooks/useMode'
import ButtonAddField from '@/components/ButtonAddField'
import SelectParameter from '@/components/SelectParameter'

import cls from '@/pages/reports/individual-doses/Filters/index.module.scss'

interface FiltersIDProps {
    setSearchParams: SetURLSearchParams
    parameters: IParametersID
    setParameters: (obj: IParametersID) => void
}

const FiltersID: React.FC<FiltersIDProps> = ({
    setSearchParams,
    parameters,
    setParameters,
}) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { selectedReport } = useSidebar()
    const { filters, getFilters, createFilter, removeFilter } = useFilters()

    const debouncedFilter = useDebounce<string>(parameters.filter, delayValue)

    const [value, setValue] = useState<string>('')

    useEffect(() => {
        getFilters(selectedReport)
    }, [])

    useEffect(() => {
        getFilters(selectedReport)
    }, [selectedReport])

    const clearFilter = () => {
        setParameters(initialStateParametersID)
        setSearchParams({}, { replace: true })
    }

    const filterSearch = (value: string) =>
        setParameters({ ...parameters, filter: value })

    useEffect(() => {
        getFilters(selectedReport, debouncedFilter)
    }, [debouncedFilter])

    const selectFilter = (filter: string) => {
        const selectedFilter = JSON.parse(
            filters.find((f) => f.name_filter === filter)?.parameters as string
        ) as IParametersID
        setParameters({
            ...selectedFilter,
            filter: filter,
        })
        setSearchParams(
            {
                ...removeEmptyFields({
                    ...selectedFilter,
                    filter: filter,
                }),
            },
            { replace: true }
        )
    }

    const createNewFilter = () => {
        if (!value) {
            return showSimpleErrorMessage('Поле не может быть пустым')
        }
        createFilter(selectedReport, value, parameters)
    }

    const handleRemoveFilter = (
        event: React.MouseEvent<HTMLButtonElement>,
        filter: IFilter
    ) => {
        event.stopPropagation()
        removeFilter(selectedReport, filter.id_filter)
    }

    return (
        <div className={`${cls.block} ${darkModeClass}`}>
            <h3 className={`${cls.block__header} ${darkModeClass}`}>Фильтры</h3>
            <div className={cls.block__filter}>
                <SelectParameter
                    selected={parameters.filter}
                    onClear={clearFilter}
                    onChange={filterSearch}
                >
                    {filters?.length > 0 ? (
                        <AnimatePresence>
                            {filters?.map((filter) => (
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={filter.id_filter}
                                    className={`${cls.block__filter__option} ${darkModeClass}`}
                                    onClick={() =>
                                        selectFilter(filter.name_filter)
                                    }
                                >
                                    <span title={filter.name_filter}>
                                        {filter.name_filter}
                                    </span>
                                    <button
                                        className={`${cls.block__filter__option__btn} ${darkModeClass}`}
                                        data-tooltip-id='tooltip'
                                        data-tooltip-content='Удалить фильтр'
                                        data-tooltip-place='right'
                                        data-tooltip-offset={20}
                                        onClick={(event) =>
                                            handleRemoveFilter(event, filter)
                                        }
                                    >
                                        <RiDeleteBin5Line size={16} />
                                    </button>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    ) : (
                        <div className={`${cls.empty} ${darkModeClass}`}>
                            Ничего не найдено...
                        </div>
                    )}
                </SelectParameter>
                <ButtonAddField
                    onChange={(e) => setValue(e.target.value)}
                    onClear={() => setValue('')}
                    placeholder='Введите название...'
                    value={value}
                    create={createNewFilter}
                />
            </div>
        </div>
    )
}

export default FiltersID
