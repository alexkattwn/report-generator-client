import { StyleSheet, Text, View } from '@react-pdf/renderer'

import { IParametersID } from '@/types/common'
import { formatDateAndTime, reverseDate } from '@/utils/common'

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

interface HeaderReportIDProps {
    state: IParametersID
}

const HeaderReportID: React.FC<HeaderReportIDProps> = ({ state }) => (
    <>
        <View style={styles.block}>
            <Text style={styles.title}>
                Отчет об индивидуальных дозах облучения персонала
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
                    {`${reverseDate(state.date_start)} - ${reverseDate(
                        state.date_end
                    )}`}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.nameRow}>Структура</Text>
                <Text style={styles.contentRow}>{state.struct}</Text>
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
export default HeaderReportID
