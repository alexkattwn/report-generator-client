import { AnimatePresence, motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TbReportSearch } from 'react-icons/tb'
import { Helmet } from 'react-helmet-async'
import { BsDownload } from 'react-icons/bs'

import { useMode } from '@/hooks/useMode'
import ParametersIDC from '@/pages/reports/individual-dose-card/Parameters'
import FiltersIDC from '@/pages/reports/individual-dose-card/Filters'
import TableIDC from '@/pages/reports/individual-dose-card/Table'
import GraphicsIDC from '@/pages/reports/individual-dose-card/Graphics'
import { IParametersIDC } from '@/types/common'
import useReportIDC from '@/hooks/useReportIDC'
import { REPORT_IDC_ROUTE } from '@/constants'
import useReportTemplate from '@/hooks/useReportTemplates'
import { getCurrentReportFromSessionStorage } from '@/helpers/sessionStorage.helper'
import { convertingIDCForReport } from '@/utils/convertingObjects'

import cls from '@/pages/reports/individual-dose-card/index.module.scss'

const IndividualDoseCardReportPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const params: IParametersIDC = {
        struct: searchParams.get('struct') || '',
        post: searchParams.get('post') || '',
        pass_sfz: searchParams.get('pass_sfz') || '',
        personal_number: searchParams.get('personal_number') || '',
        physical_person: searchParams.get('physical_person') || '',
        doc_number: searchParams.get('doc_number') || '',
        contacts: searchParams.get('contacts') || '',
        id_personal: searchParams.get('id_personal') || '',
        post_approver: searchParams.get('post_approver') || 'Начальник ОРБ',
        post_responsible_person:
            searchParams.get('post_responsible_person') ||
            'Руководитель группы ИДК',
        filter: searchParams.get('filter') || '',
    }

    const [parameters, setParameters] = useState<IParametersIDC>(params)

    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { getTemplate, template, downloadDocxReport } = useReportTemplate()
    const { report, isLoading, getReport } = useReportIDC()

    useEffect(() => {
        ;(async () => {
            await getTemplate(getCurrentReportFromSessionStorage())
            if (parameters.id_personal) {
                await getReport(parameters.id_personal)
            }
        })()
    }, [])

    const downloadReport = async () => {
        if (report && template.id_uuid && !isLoading) {
            const convertedReport = convertingIDCForReport(report, parameters)
            await downloadDocxReport(template.id_uuid, convertedReport)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cls.page}
        >
            <Helmet>
                <title>
                    {`NuclearIDM${
                        getCurrentReportFromSessionStorage()
                            ? ' | ' + getCurrentReportFromSessionStorage()
                            : ''
                    }`}
                </title>
            </Helmet>
            <h2 className={`${cls.page__title} ${darkModeClass}`}>
                Карта учета индивидуальных доз
            </h2>
            <FiltersIDC
                setSearchParams={setSearchParams}
                parameters={parameters}
                setParameters={setParameters}
            />
            <ParametersIDC
                setSearchParams={setSearchParams}
                parameters={parameters}
                setParameters={setParameters}
            />
            <AnimatePresence>
                <TableIDC
                    setSearchParams={setSearchParams}
                    parameters={parameters}
                    setParameters={setParameters}
                />
            </AnimatePresence>
            <AnimatePresence>
                {parameters.id_personal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={cls.page__infographic}
                    >
                        <div className={cls.page__infographic__head}>
                            <h3
                                className={`${cls.page__infographic__head__title} ${darkModeClass}`}
                            >
                                {`Отчет по сотруднику: ${report?.personInfo?.surname} ${report?.personInfo?.name} ${report?.personInfo?.patronymic}`}
                            </h3>
                            <button
                                className={`${cls.page__infographic__head__btn} ${darkModeClass} ninth-step`}
                                onClick={() =>
                                    window.open(REPORT_IDC_ROUTE, '_blank')
                                }
                            >
                                <span>Посмотреть отчет</span>
                                <TbReportSearch size={26} />
                            </button>
                            <button
                                className={`${cls.page__infographic__head__btn} ${darkModeClass}`}
                                onClick={downloadReport}
                            >
                                <span>Скачать отчет</span>
                                <BsDownload size={26} />
                            </button>
                        </div>
                        <GraphicsIDC parameters={parameters} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default IndividualDoseCardReportPage
