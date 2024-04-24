import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { REPORT_CD_ROUTE } from '@/constants'
import FiltersCD from '@/pages/reports/collective-doses/Filters'
import { IParametersCD } from '@/types/common'
import { useMode } from '@/hooks/useMode'

import cls from '@/pages/reports/collective-doses/index.module.scss'
import ParametersCD from './Parameters'

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
        date_end: searchParams.get('date_end') || '',
        struct: searchParams.get('struct') || '',
        age_from: searchParams.get('age_from') || '0',
        age_to: searchParams.get('age_to') || '100',
        sex: searchParams.get('sex') || '',
        chief_orb: searchParams.get('chief_orb') || 'М.Ю. Лузин',
        chief_lprk_orb: searchParams.get('chief_lprk_orb') || 'А.А. Воробьев',
        filter: searchParams.get('filter') || '',
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
            <button onClick={() => window.open(REPORT_CD_ROUTE, '_blank')}>
                view
            </button>
        </motion.div>
    )
}

export default CollectiveDosesPage
