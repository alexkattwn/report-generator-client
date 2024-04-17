import { useEffect } from 'react'
import { AiOutlineClear } from 'react-icons/ai'
import { HiOutlineSearch } from 'react-icons/hi'
import { SetURLSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import InputParameter from '@/components/InputParameter'
import SelectParameter from '@/components/SelectParameter'
import { useMode } from '@/hooks/useMode'
import usePosts from '@/hooks/usePosts'
import useCompanyStructure from '@/hooks/useCompanyStructure'
import usePersonal from '@/hooks/usePersonal'
import { IParametersIDC } from '@/types/common'
import { delayValue, initialStateParametersIDC } from '@/constants'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import useDebounce from '@/hooks/useDebounce'

import cls from '@/pages/reports/individual-dose-card/Parameters/index.module.scss'

interface ParametersIDCProps {
    setSearchParams: SetURLSearchParams
    parameters: IParametersIDC
    setParameters: (obj: IParametersIDC) => void
}

const ParametersIDC: React.FC<ParametersIDCProps> = ({
    setSearchParams,
    parameters,
    setParameters,
}) => {
    const { posts, getPosts } = usePosts()
    const { companyStructures, getCompanyStructures } = useCompanyStructure()
    const { getPersonal } = usePersonal()

    const debouncedPost = useDebounce<string>(parameters.post, delayValue)
    const debouncedStruct = useDebounce<string>(parameters.struct, delayValue)

    useEffect(() => {
        getPosts()
        getCompanyStructures()
    }, [])

    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const isMedia746 = useMediaQuery(746)

    const handleClear = () => {
        setParameters(initialStateParametersIDC)
        setSearchParams({}, { replace: true })
        getPersonal(initialStateParametersIDC, 1)
    }

    const changeParameters = () => {
        let newParams = {} as IParametersIDC
        if (parameters.struct) newParams.struct = parameters.struct
        if (parameters.post) newParams.post = parameters.post
        if (parameters.pass_sfz) newParams.pass_sfz = parameters.pass_sfz
        if (parameters.personal_number)
            newParams.personal_number = parameters.personal_number
        if (parameters.physical_person)
            newParams.physical_person = parameters.physical_person
        if (parameters.doc_number) newParams.doc_number = parameters.doc_number
        if (parameters.contacts) newParams.contacts = parameters.contacts
        if (parameters.id_personal)
            newParams.id_personal = parameters.id_personal
        if (parameters.post_approver)
            newParams.post_approver = parameters.post_approver
        if (parameters.post_responsible_person)
            newParams.post_responsible_person =
                parameters.post_responsible_person
        if (parameters.filter) newParams.filter = parameters.filter

        setSearchParams({ ...newParams }, { replace: true })
    }

    const handleSearch = () => {
        changeParameters()
        getPersonal(parameters, 1)
    }

    const postSearch = (value: string) =>
        setParameters({ ...parameters, post: value })

    useEffect(() => {
        getPosts(debouncedPost)
    }, [debouncedPost])

    const structSearch = (value: string) =>
        setParameters({ ...parameters, struct: value })

    useEffect(() => {
        getCompanyStructures(debouncedStruct)
    }, [debouncedStruct])

    return (
        <div className={`${cls.parameters} ${darkModeClass}`}>
            <h2 className={`${cls.parameters__head} ${darkModeClass}`}>
                Параметры
            </h2>
            <div className={cls.parameters__fields}>
                <SelectParameter
                    selected={parameters.post}
                    onClear={() =>
                        setParameters({
                            ...parameters,
                            post: '',
                        })
                    }
                    label='Должность'
                    onChange={postSearch}
                >
                    {posts?.length > 0 ? (
                        <AnimatePresence>
                            {posts?.map((post) => (
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={post.id_uuid}
                                    className={`${cls.option_post} ${darkModeClass}`}
                                    onClick={() =>
                                        setParameters({
                                            ...parameters,
                                            post: post.name,
                                        })
                                    }
                                >
                                    <span>{post.code}</span>
                                    {!isMedia746 && (
                                        <>
                                            <div
                                                className={`${cls.line} ${darkModeClass}`}
                                            />
                                            <span>{post.name}</span>
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
            </div>
            <div className={cls.parameters__fields}>
                <InputParameter
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setParameters({
                            ...parameters,
                            pass_sfz: e.target.value,
                        })
                    }
                    onClear={() =>
                        setParameters({ ...parameters, pass_sfz: '' })
                    }
                    placeholder=''
                    label='Номер пропуска'
                    value={parameters.pass_sfz}
                />
                <InputParameter
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setParameters({
                            ...parameters,
                            personal_number: e.target.value,
                        })
                    }
                    onClear={() =>
                        setParameters({ ...parameters, personal_number: '' })
                    }
                    placeholder=''
                    label='Табельный номер'
                    value={parameters.personal_number}
                />
            </div>
            <div className={cls.parameters__fields}>
                <InputParameter
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setParameters({
                            ...parameters,
                            doc_number: e.target.value,
                        })
                    }
                    onClear={() =>
                        setParameters({ ...parameters, doc_number: '' })
                    }
                    placeholder=''
                    label='Номер документа'
                    value={parameters.doc_number}
                />
                <InputParameter
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setParameters({
                            ...parameters,
                            contacts: e.target.value,
                        })
                    }
                    onClear={() =>
                        setParameters({ ...parameters, contacts: '' })
                    }
                    placeholder=''
                    label='Контактные данные'
                    value={parameters.contacts}
                />
            </div>
            <div className={cls.parameters__fields}>
                <InputParameter
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setParameters({
                            ...parameters,
                            post_approver: e.target.value,
                        })
                    }
                    onClear={() =>
                        setParameters({ ...parameters, post_approver: '' })
                    }
                    placeholder=''
                    label='Должность утверждающего'
                    value={'Начальник ОРБ'}
                    disabled
                />
                <InputParameter
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setParameters({
                            ...parameters,
                            post_responsible_person: e.target.value,
                        })
                    }
                    onClear={() =>
                        setParameters({
                            ...parameters,
                            post_responsible_person: '',
                        })
                    }
                    placeholder=''
                    label='Должность ответственного'
                    value={'Руководитель группы ИДК'}
                    disabled
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

export default ParametersIDC
