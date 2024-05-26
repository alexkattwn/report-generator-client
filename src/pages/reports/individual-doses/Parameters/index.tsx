import { SetURLSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClear } from 'react-icons/ai'
import { RiAiGenerate } from 'react-icons/ri'

import { IParametersID } from '@/types/common'
import { useMode } from '@/hooks/useMode'
import useDebounce from '@/hooks/useDebounce'
import { delayValue, initialStateParametersID } from '@/constants'
import useCompanyStructure from '@/hooks/useCompanyStructure'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import SelectParameter from '@/components/SelectParameter'
import DatepickerParameter from '@/components/DatepickerParameter'
import { showSimpleErrorMessage } from '@/utils/notifications'
import CheckboxParameter from '@/components/CheckboxParameter'
import InputParameter from '@/components/InputParameter'
import useIDGraphic from '@/hooks/useIDGraphics'
import {
    removeParametersIDFromSessionStorage,
    setParametersIDToSessionStorage,
} from '@/helpers/sessionStorage.helper'
import { removeEmptyFields } from '@/utils/common'
import useReportID from '@/hooks/useReportID'

import cls from '@/pages/reports/individual-doses/Parameters/index.module.scss'

interface ParametersIDProps {
    setSearchParams: SetURLSearchParams
    parameters: IParametersID
    setParameters: (obj: IParametersID) => void
    setParamsForInfographics: (obj: IParametersID) => void
}

const ParametersID: React.FC<ParametersIDProps> = ({
    setSearchParams,
    parameters,
    setParameters,
    setParamsForInfographics,
}) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const debouncedStruct = useDebounce<string>(parameters.struct, delayValue)

    const { companyStructures, getCompanyStructures } = useCompanyStructure()

    const { getGraphics } = useIDGraphic()
    const { getReport } = useReportID()

    const isMedia746 = useMediaQuery(746)

    useEffect(() => {
        getCompanyStructures()
    }, [])

    const handleClear = () => {
        setParameters(initialStateParametersID)
        setSearchParams({}, { replace: true })
        removeParametersIDFromSessionStorage()
    }

    const structSearch = (value: string) =>
        setParameters({ ...parameters, struct: value })

    useEffect(() => {
        getCompanyStructures(debouncedStruct)
    }, [debouncedStruct])

    const changeParameters = () => {
        let newParams = {} as IParametersID
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
        if (parameters.sex_man) newParams.sex_man = parameters.sex_man
        if (parameters.sex_woman) newParams.sex_woman = parameters.sex_woman
        if (parameters.all_child_structures)
            newParams.all_child_structures = parameters.all_child_structures
        if (parameters.chief_orb) newParams.chief_orb = parameters.chief_orb
        if (parameters.chief_group_idc)
            newParams.chief_group_idc = parameters.chief_group_idc
        if (parameters.filter) newParams.filter = parameters.filter
        newParams.go = '1'
        setSearchParams({ ...newParams }, { replace: true })
    }

    const handleSearch = async () => {
        changeParameters()
        if (parameters.date_start > parameters.date_end) {
            return showSimpleErrorMessage(
                'Дата начала не может быть позже даты окончания'
            )
        }

        if (parameters.struct && parameters.date_start && parameters.date_end) {
            setParametersIDToSessionStorage(parameters)
            setParameters({ ...parameters, go: '1' })
            setParamsForInfographics({ ...parameters })
            await getGraphics(parameters)
            await getReport(parameters)
            return
        }

        setParameters({ ...parameters, go: '' })
        const newParams = removeEmptyFields(parameters)
        setSearchParams({ ...newParams }, { replace: true })

        return showSimpleErrorMessage(
            'Обязательно нужно заполнить: дату начала, дату окончания и выбрать структуру'
        )
    }

    return (
        <div className={`${cls.parameters} ${darkModeClass}`}>
            <h2 className={`${cls.parameters__head} ${darkModeClass}`}>
                Параметры
            </h2>

            <div className={cls.parameters__blocks}>
                <span
                    className={`${cls.parameters__blocks__title} ${darkModeClass}`}
                >
                    Возраст
                </span>
                <div className={cls.parameters__blocks__block}>
                    <InputParameter
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setParameters({
                                ...parameters,
                                age_from: e.target.value,
                            })
                        }
                        onClear={() =>
                            setParameters({ ...parameters, age_from: '' })
                        }
                        type='number'
                        placeholder=''
                        label='От'
                        value={parameters.age_from}
                    />
                    <InputParameter
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setParameters({
                                ...parameters,
                                age_to: e.target.value,
                            })
                        }
                        onClear={() =>
                            setParameters({ ...parameters, age_to: '' })
                        }
                        type='number'
                        placeholder=''
                        label='До'
                        value={parameters.age_to}
                    />
                </div>
                <span
                    className={`${cls.parameters__blocks__title} ${darkModeClass}`}
                >
                    Сроки
                </span>
                <div className={cls.parameters__blocks__block}>
                    <DatepickerParameter
                        label='Дата начала'
                        value={parameters.date_start}
                        onChange={(e) =>
                            setParameters({
                                ...parameters,
                                date_start: e.target.value,
                            })
                        }
                    />
                    <DatepickerParameter
                        label='Дата окончания'
                        value={parameters.date_end}
                        onChange={(e) =>
                            setParameters({
                                ...parameters,
                                date_end: e.target.value,
                            })
                        }
                    />
                </div>

                <div className={cls.parameters__latest}>
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
                                chief_group_idc: e.target.value,
                            })
                        }
                        onClear={() =>
                            setParameters({
                                ...parameters,
                                chief_group_idc: '',
                            })
                        }
                        placeholder=''
                        label='Руководитель группы ИДК'
                        value={parameters.chief_group_idc}
                    />
                </div>
            </div>

            <div className={cls.parameters__blocks}>
                <span
                    className={`${cls.parameters__blocks__title} ${darkModeClass}`}
                >
                    Виды дозы
                </span>
                <div className={cls.parameters__blocks__block}>
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
                    <span
                        className={`${cls.parameters__blocks__title} ${darkModeClass}`}
                    >
                        Пол
                    </span>
                    <div className={cls.parameters__blocks__block}>
                        <CheckboxParameter
                            label='Мужской'
                            value={Boolean(parameters.sex_man)}
                            setValue={(value) =>
                                setParameters({
                                    ...parameters,
                                    sex_man: value,
                                })
                            }
                        />
                        <CheckboxParameter
                            label='Женский'
                            value={Boolean(parameters.sex_woman)}
                            setValue={(value) =>
                                setParameters({
                                    ...parameters,
                                    sex_woman: value,
                                })
                            }
                        />
                    </div>
                    <div className={cls.parameters__latest}>
                        <CheckboxParameter
                            label='Учитывать все дочерние структуры'
                            value={Boolean(parameters.all_child_structures)}
                            setValue={(value) =>
                                setParameters({
                                    ...parameters,
                                    all_child_structures: value,
                                })
                            }
                        />
                    </div>
                </div>
            </div>

            <div className={`${cls.parameters__actions} ${darkModeClass}`}>
                <button
                    className={`${cls.parameters__actions__generate} ${darkModeClass}`}
                    onClick={handleSearch}
                >
                    <span>Сформировать</span>
                    <RiAiGenerate size={28} />
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

export default ParametersID
