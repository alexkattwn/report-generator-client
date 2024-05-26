import {
    PDFViewer,
    Document,
    Page,
    StyleSheet,
    Text,
} from '@react-pdf/renderer'
import { AnimatePresence, motion } from 'framer-motion'
import { RingLoader } from 'react-spinners'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import {
    getCurrentReportFromSessionStorage,
    getParametersIDFromSessionStorage,
} from '@/helpers/sessionStorage.helper'
import HeaderReportID from '@/pages/reports/individual-doses/Report/HeaderReport'
import FooterReportID from '@/pages/reports/individual-doses/Report/FooterReport'
import BodyReportID from '@/pages/reports/individual-doses/Report/BodyReport'
import { reverseDate } from '@/utils/common'
import { IParametersID } from '@/types/common'
import useReportID from '@/hooks/useReportID'

import cls from '@/pages/reports/individual-doses/Report/index.module.scss'

const pageStyles = StyleSheet.create({
    page: {
        fontFamily: 'Inter',
        fontSize: 10,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 40,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 10,
        bottom: 20,
        left: 0,
        right: 30,
        textAlign: 'right',
    },
    bottomText: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        textAlign: 'left',
    },
})

const ReportID: React.FC = () => {
    const [state, _] = useState<IParametersID | undefined>(
        getParametersIDFromSessionStorage()
    )

    const { getReport, report, isLoading } = useReportID()

    useEffect(() => {
        ;(async () => {
            if (state) {
                await getReport(state)
            }
        })()
    }, [])

    return (
        <>
            <Helmet>
                <title>{getCurrentReportFromSessionStorage()}</title>
            </Helmet>
            <AnimatePresence>
                {state && report && !isLoading ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={cls.page}
                    >
                        <PDFViewer className='pdf'>
                            <Document>
                                <Page
                                    size='A4'
                                    orientation='landscape'
                                    style={pageStyles.page}
                                >
                                    <HeaderReportID
                                        state={state}
                                        report={report}
                                    />
                                    <BodyReportID report={report} />
                                    <FooterReportID parameters={state} />
                                    <Text style={pageStyles.bottomText} fixed>
                                        {`${reverseDate(
                                            state.date_start
                                        )} - ${reverseDate(state.date_end)} ${
                                            state.struct
                                        }`}
                                    </Text>
                                    <Text
                                        style={pageStyles.pageNumber}
                                        render={({ pageNumber, totalPages }) =>
                                            `${pageNumber} / ${totalPages}`
                                        }
                                        fixed
                                    />
                                </Page>
                            </Document>
                        </PDFViewer>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='loader'
                    >
                        <RingLoader color='#36d7b7' />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default ReportID
