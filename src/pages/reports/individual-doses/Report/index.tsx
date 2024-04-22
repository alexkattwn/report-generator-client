import { PDFViewer, Document, Page, StyleSheet } from '@react-pdf/renderer'
import { AnimatePresence, motion } from 'framer-motion'
import { RingLoader } from 'react-spinners'

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
        bottom: 30,
        left: 0,
        right: 30,
        textAlign: 'right',
        color: 'black',
    },
})

const ReportID = () => {
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
                            <Page size='A4' style={pageStyles.page}></Page>
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

export default ReportID
