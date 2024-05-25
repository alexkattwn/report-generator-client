import { StyleSheet, Text, View } from '@react-pdf/renderer'

import { formatDateAndTime } from '@/utils/common'
import { ICD } from '@/types/reports'

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontStyle: 'bold',
        marginBottom: 5,
    },
    block: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    nameRow: {
        width: 180,
        textAlign: 'left',
        marginTop: 4,
        fontSize: 11,
    },
    contentRow: {
        marginTop: 2,
        borderBottom: '1px solid black',
        fontSize: 11,
        width: 150,
    },
})

interface HeaderReportCDProps {
    report: ICD
}

const HeaderReportCD: React.FC<HeaderReportCDProps> = ({ report }) => (
    <>
        <View style={styles.block}>
            <Text style={styles.title}>
                Отчет о коллективных дозах облучения персонала ЗКД
            </Text>
            <View style={styles.row}>
                <Text style={styles.nameRow}>Дата составления отчета</Text>
                <Text style={styles.contentRow}>
                    {formatDateAndTime(`${new Date()}`)}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.nameRow}>Отчетный период</Text>
                <Text style={styles.contentRow}>
                    {`${report.date_start} - ${report.date_end}`}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.nameRow}>Структура</Text>
                <Text style={styles.contentRow}>{report.struct}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.nameRow}>Состояло на доз. учете, чел.</Text>
                <Text style={styles.contentRow}>1</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.nameRow}>Измерено, чел</Text>
                <Text style={styles.contentRow}>1</Text>
            </View>
        </View>
    </>
)

export default HeaderReportCD
