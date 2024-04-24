import { SetURLSearchParams } from 'react-router-dom'
import { HiOutlineSearch } from 'react-icons/hi'
import { AiOutlineClear } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

import { IParametersCD } from '@/types/common'
import SelectParameter from '@/components/SelectParameter'
import InputParameter from '@/components/InputParameter'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { delayValue, initialStateParametersCD } from '@/constants'
import useDebounce from '@/hooks/useDebounce'
import CheckboxParameter from '@/components/CheckboxParameter'
import useCompanyStructure from '@/hooks/useCompanyStructure'
import { useMode } from '@/hooks/useMode'

import cls from '@/pages/reports/collective-doses/Parameters/index.module.scss'

interface ParametersCDProps {
    setSearchParams: SetURLSearchParams
    parameters: IParametersCD
    setParameters: (obj: IParametersCD) => void
}

const ParametersCD: React.FC<ParametersCDProps> = ({
    setSearchParams,
    parameters,
    setParameters,
}) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const debouncedStruct = useDebounce<string>(parameters.struct, delayValue)

    const { companyStructures, getCompanyStructures } = useCompanyStructure()

    const isMedia746 = useMediaQuery(746)

    useEffect(() => {
        getCompanyStructures()
    }, [])

    const handleClear = () => {
        setParameters(initialStateParametersCD)
        setSearchParams({}, { replace: true })
    }

    const structSearch = (value: string) =>
        setParameters({ ...parameters, struct: value })

    useEffect(() => {
        getCompanyStructures(debouncedStruct)
    }, [debouncedStruct])

    const changeParameters = () => {
        let newParams = {} as IParametersCD
        if (parameters.on_business_trips)
            newParams.on_business_trips = parameters.on_business_trips
        if (parameters.by_surveys) newParams.by_surveys = parameters.by_surveys
        if (parameters.by_receipts)
            newParams.by_receipts = parameters.by_receipts
        if (parameters.main_tdk) newParams.main_tdk = parameters.main_tdk
        if (parameters.additional_tdk)
            newParams.additional_tdk = parameters.additional_tdk
        if (parameters.odk) newParams.odk = parameters.odk
        if (parameters.date_start) newParams.date_start = parameters.date_start
        if (parameters.date_end) newParams.date_end = parameters.date_end
        if (parameters.struct) newParams.struct = parameters.struct
        if (parameters.age_from) newParams.age_from = parameters.age_from
        if (parameters.age_to) newParams.age_to = parameters.age_to
        if (parameters.sex) newParams.sex = parameters.sex
        if (parameters.chief_orb) newParams.chief_orb = parameters.chief_orb
        if (parameters.chief_lprk_orb)
            newParams.chief_lprk_orb = parameters.chief_lprk_orb
        if (parameters.filter) newParams.filter = parameters.filter

        setSearchParams({ ...newParams }, { replace: true })
    }

    const handleSearch = () => {
        changeParameters()
    }

    return (
        <div className={`${cls.parameters} ${darkModeClass}`}>
            <h2 className={`${cls.parameters__head} ${darkModeClass}`}>
                Параметры
            </h2>
            <div className={cls.parameters__fields}>
                <SelectParameter
                    selected={parameters.struct}
                    onClear={() =>
                        setParameters({
                            ...parameters,
                            struct: '',
                        })
                    }
                    onChange={structSearch}
                    label='Структура'
                >
                    {companyStructures?.length > 0 ? (
                        <AnimatePresence>
                            {companyStructures?.map((companyStructure) => (
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={companyStructure.id_uuid}
                                    className={`${cls.option_companyStructure} ${darkModeClass}`}
                                    onClick={() =>
                                        setParameters({
                                            ...parameters,
                                            struct: companyStructure.name,
                                        })
                                    }
                                >
                                    <span
                                        className={
                                            cls.option_companyStructure__first
                                        }
                                    >
                                        {companyStructure.name}
                                    </span>
                                    {!isMedia746 && (
                                        <>
                                            <div
                                                className={`${cls.line} ${darkModeClass}`}
                                            />
                                            <span
                                                className={
                                                    cls.option_companyStructure__other
                                                }
                                            >
                                                {companyStructure.code}
                                            </span>
                                            <div
                                                className={`${cls.line} ${darkModeClass}`}
                                            />
                                            <span
                                                className={
                                                    cls.option_companyStructure__other
                                                }
                                            >
                                                {companyStructure.shortname}
                                            </span>
                                        </>
                                    )}
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    ) : (
                        <div className={`${cls.empty} ${darkModeClass}`}>
                            Ничего не найдено...
                        </div>
                    )}
                </SelectParameter>
                <CheckboxParameter
                    label='В командировках'
                    value={Boolean(parameters.on_business_trips)}
                    setValue={(value) =>
                        setParameters({
                            ...parameters,
                            on_business_trips: value,
                        })
                    }
                />
                <CheckboxParameter
                    label='По обследованиям СИЧ'
                    value={Boolean(parameters.by_surveys)}
                    setValue={(value) =>
                        setParameters({
                            ...parameters,
                            by_surveys: value,
                        })
                    }
                />
                <CheckboxParameter
                    label='По поступлениям СИЧ'
                    value={Boolean(parameters.by_receipts)}
                    setValue={(value) =>
                        setParameters({
                            ...parameters,
                            by_receipts: value,
                        })
                    }
                />
                <CheckboxParameter
                    label='Основной ТДК'
                    value={Boolean(parameters.main_tdk)}
                    setValue={(value) =>
                        setParameters({
                            ...parameters,
                            main_tdk: value,
                        })
                    }
                />
                <CheckboxParameter
                    label='Дополнительный ТДК'
                    value={Boolean(parameters.additional_tdk)}
                    setValue={(value) =>
                        setParameters({
                            ...parameters,
                            additional_tdk: value,
                        })
                    }
                />
                <CheckboxParameter
                    label='ОДК'
                    value={Boolean(parameters.odk)}
                    setValue={(value) =>
                        setParameters({
                            ...parameters,
                            odk: value,
                        })
                    }
                />
                <InputParameter
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setParameters({
                            ...parameters,
                            chief_orb: e.target.value,
                        })
                    }
                    onClear={() =>
                        setParameters({ ...parameters, chief_orb: '' })
                    }
                    placeholder=''
                    label='Начальник ОРБ'
                    value={parameters.chief_orb}
                />
                <InputParameter
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setParameters({
                            ...parameters,
                            chief_lprk_orb: e.target.value,
                        })
                    }
                    onClear={() =>
                        setParameters({ ...parameters, chief_lprk_orb: '' })
                    }
                    placeholder=''
                    label='Начальник ЛРПК ОРБ'
                    value={parameters.chief_lprk_orb}
                />
            </div>
            <div className={`${cls.parameters__actions} ${darkModeClass}`}>
                <button
                    className={`${cls.parameters__actions__search} ${darkModeClass}`}
                    onClick={handleSearch}
                >
                    <span>Искать</span>
                    <HiOutlineSearch size={28} />
                </button>
                <button
                    className={`${cls.parameters__actions__clear} ${darkModeClass}`}
                    onClick={handleClear}
                >
                    <span>Очистить</span>
                    <AiOutlineClear size={28} />
                </button>
            </div>
        </div>
    )
}

export default ParametersCD
