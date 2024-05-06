import { AnimatePresence, motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { TbReportSearch } from 'react-icons/tb'
import { useState } from 'react'

import { REPORT_ID_ROUTE } from '@/constants'
import { dateToString, reverseDate } from '@/utils/common'
import { IParametersID } from '@/types/common'
import { useMode } from '@/hooks/useMode'
import ParametersID from '@/pages/reports/individual-doses/Parameters'
import FiltersID from '@/pages/reports/individual-doses/Filters'
import GraphicsID from '@/pages/reports/individual-doses/Graphics'

import cls from '@/pages/reports/individual-doses/index.module.scss'

const IndividualDosesPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const params: IParametersID = {
        on_business_trips: searchParams.get('on_business_trips') || '',
        by_surveys: searchParams.get('by_surveys') || '',
        by_receipts: searchParams.get('by_receipts') || '',
        main_tdk: searchParams.get('main_tdk') || '',
        additional_tdk: searchParams.get('additional_tdk') || '',
        odk: searchParams.get('odk') || '',
        date_start: searchParams.get('date_start') || '',
        date_end: searchParams.get('date_end') || dateToString(new Date()),
        struct: searchParams.get('struct') || '',
        age_from: searchParams.get('age_from') || '0',
        age_to: searchParams.get('age_to') || '100',
        sex_man: searchParams.get('sex_man') || '',
        sex_woman: searchParams.get('sex_woman') || '',
        all_child_structures: searchParams.get('all_child_structures') || '',
        chief_orb: searchParams.get('chief_orb') || 'А.Л. Березницкий',
        chief_group_idc: searchParams.get('chief_group_idc') || 'Ю.С. Прыткова',
        filter: searchParams.get('filter') || '',
        go: searchParams.get('go') || '',
    }

    const [parameters, setParameters] = useState<IParametersID>(params)

    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const [paramsForInfographics, setParamsForInfographics] =
        useState<IParametersID>(params)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.page}
        >
            <h2 className={`${cls.page__title} ${darkModeClass}`}>
                Индивидуальные дозы
            </h2>
            <FiltersID
                setSearchParams={setSearchParams}
                parameters={parameters}
                setParameters={setParameters}
            />
            <ParametersID
                setSearchParams={setSearchParams}
                parameters={parameters}
                setParameters={setParameters}
                setParamsForInfographics={setParamsForInfographics}
            />
            <AnimatePresence>
                {parameters.go === '1' && (
                    <>
                        <div className={cls.page__infographic__head}>
                            <div className={cls.page__infographic__head__block}>
                                <h3
                                    className={`${cls.page__infographic__head__block__title} ${darkModeClass}`}
                                >
                                    {`${reverseDate(
                                        paramsForInfographics.date_start
                                    )} - ${reverseDate(
                                        paramsForInfographics.date_end
                                    )}`}
                                </h3>
                                <button
                                    className={`${cls.page__infographic__head__block__btn} ${darkModeClass}`}
                                    onClick={() =>
                                        window.open(REPORT_ID_ROUTE, '_blank')
                                    }
                                >
                                    <span>Посмотреть отчет</span>
                                    <TbReportSearch size={26} />
                                </button>
                            </div>
                            <h3
                                className={`${cls.page__infographic__head__struct} ${darkModeClass}`}
                            >
                                {paramsForInfographics.struct}
                            </h3>
                        </div>
                        <GraphicsID parameters={paramsForInfographics} />
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default IndividualDosesPage
