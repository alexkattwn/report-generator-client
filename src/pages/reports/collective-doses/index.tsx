import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { TbReportSearch } from 'react-icons/tb'

import { REPORT_CD_ROUTE } from '@/constants'
import { IParametersCD } from '@/types/common'
import { dateToString, reverseDate } from '@/utils/common'
import { useMode } from '@/hooks/useMode'
import FiltersCD from '@/pages/reports/collective-doses/Filters'
import ParametersCD from '@/pages/reports/collective-doses/Parameters'
import GraphicsCD from '@/pages/reports/collective-doses/Graphics'

import cls from '@/pages/reports/collective-doses/index.module.scss'

const CollectiveDosesPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const params: IParametersCD = {
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
        chief_orb: searchParams.get('chief_orb') || 'М.Ю. Лузин',
        chief_lprk_orb: searchParams.get('chief_lprk_orb') || 'А.А. Воробьев',
        filter: searchParams.get('filter') || '',
        go: searchParams.get('go') || '',
    }

    const [parameters, setParameters] = useState<IParametersCD>(params)

    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.page}
        >
            <h2 className={`${cls.page__title} ${darkModeClass}`}>
                Коллективные дозы
            </h2>
            <FiltersCD
                setSearchParams={setSearchParams}
                parameters={parameters}
                setParameters={setParameters}
            />
            <ParametersCD
                setSearchParams={setSearchParams}
                parameters={parameters}
                setParameters={setParameters}
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
                                        parameters.date_start
                                    )} - ${reverseDate(parameters.date_end)}`}
                                </h3>
                                <button
                                    className={`${cls.page__infographic__head__block__btn} ${darkModeClass}`}
                                    onClick={() =>
                                        window.open(REPORT_CD_ROUTE, '_blank')
                                    }
                                >
                                    <span>Посмотреть отчет</span>
                                    <TbReportSearch size={26} />
                                </button>
                            </div>
                            <h3
                                className={`${cls.page__infographic__head__struct} ${darkModeClass}`}
                            >
                                {parameters.struct}
                            </h3>
                        </div>
                        <GraphicsCD parameters={parameters} />
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default CollectiveDosesPage
