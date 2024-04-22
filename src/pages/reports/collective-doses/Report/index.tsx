import {
    PDFViewer,
    Document,
    Page,
    StyleSheet,
    Text,
} from '@react-pdf/renderer'
import { AnimatePresence, motion } from 'framer-motion'
import { RingLoader } from 'react-spinners'

import HeaderReportCD from '@/pages/reports/collective-doses/Report/HeaderReport'
import BodyReportCD from '@/pages/reports/collective-doses/Report/BodyReport'
import FooterReportCD from '@/pages/reports/collective-doses/Report/FooterReport'

import cls from '@/pages/reports/collective-doses/Report/index.module.scss'

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

const ReportCD: React.FC = () => {
    return (
        <AnimatePresence>
            {true ? (
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
                                <HeaderReportCD />
                                <BodyReportCD />
                                <FooterReportCD />
                                <Text style={pageStyles.bottomText} fixed>
                                    23.03.2022 - 27.03.2024 Прочие организации
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
    )
}

export default ReportCD
