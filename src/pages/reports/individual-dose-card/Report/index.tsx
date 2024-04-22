import {
    PDFViewer,
    Page,
    Document,
    StyleSheet,
    Font,
    Text,
} from '@react-pdf/renderer'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RingLoader } from 'react-spinners'

import HeaderReportIDC from '@/pages/reports/individual-dose-card/Report/HeaderReport'
import BodyReportIDC from '@/pages/reports/individual-dose-card/Report/BodyReport'
import FooterReportIDC from '@/pages/reports/individual-dose-card/Report/FooterReport'
import { getPersonFromSessionStorage } from '@/helpers/sessionStorage.helper'

import InterRegular from '@/assets/fonts/Inter-Regular.otf'
import InterBold from '@/assets/fonts/Inter-Bold.otf'
import InterItalic from '@/assets/fonts/Inter-Italic.otf'
import useReportIDC from '@/hooks/useReportIDC'

import cls from '@/pages/reports/individual-dose-card/Report/index.module.scss'

Font.register({
    family: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    src: InterRegular,
})

Font.register({
    family: 'Inter',
    fontStyle: 'bold',
    fontWeight: 700,
    src: InterBold,
})

Font.register({
    family: 'Inter',
    fontStyle: 'italic',
    fontWeight: 400,
    src: InterItalic,
})

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
        bottom: 30,
        left: 0,
        right: 30,
        textAlign: 'right',
        color: 'black',
    },
})

const ReportIDC: React.FC = () => {
    const { report, getReport, isLoading } = useReportIDC()

    useEffect(() => {
        getReport(getPersonFromSessionStorage())
    }, [])

    return (
        <AnimatePresence>
            {!isLoading ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cls.page}
                >
                    <PDFViewer className='pdf'>
                        <Document>
                            <Page size='A4' style={pageStyles.page}>
                                <HeaderReportIDC report={report} />
                                <BodyReportIDC report={report} />
                                <FooterReportIDC />
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
    )
}

export default ReportIDC
