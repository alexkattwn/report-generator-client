import { View, StyleSheet, Text } from '@react-pdf/renderer'

import { IIDC } from '@/types/reports'
import { formatDateAndTime } from '@/utils/common'

const borderColor = 'gray'
const backgroundColor = '#bff0fd'

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: borderColor,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: backgroundColor,
        alignItems: 'center',
        minHeight: 32,
        height: 'auto',
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    dateStart: {
        width: '18%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    dateEnd: {
        width: '18%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    place: {
        width: '22%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    work: {
        width: '22%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    code: {
        width: '20%',
        textAlign: 'center',
        padding: 4,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto',
        minHeight: 26,
        borderTopColor: borderColor,
        borderTopWidth: 1,
    },
    text: {
        marginTop: 8,
        marginBottom: 4,
        width: '100%',
        textAlign: 'center',
    },
})

interface IRDBusinessTripsProps {
    report: IIDC | undefined
}

const IRDBusinessTrips: React.FC<IRDBusinessTripsProps> = ({ report }) => (
    <>
        <Text style={styles.text}>
            5. Индивидуальные дозы облучения за период работы в КП ТРО Курской
            АЭС (в командировках во внешние организации)
        </Text>
        <View style={styles.tableContainer}>
            <View style={styles.header}>
                <Text style={styles.dateStart}>Дата начала</Text>
                <Text style={styles.dateEnd}>Дата окончания</Text>
                <Text style={styles.place}>Место получения</Text>
                <Text style={styles.work}>Работа</Text>
                <Text style={styles.code}>
                    {report?.iRDBusinessTrips.mv_name || '-'} (знач./неопр.)
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.dateStart}>
                    {formatDateAndTime(
                        `${report?.iRDBusinessTrips.start_datetime}`
                    ) || '-'}
                </Text>
                <Text style={styles.dateEnd}>
                    {formatDateAndTime(
                        `${report?.iRDBusinessTrips.end_datetime}`
                    ) || '-'}
                </Text>
                <Text style={styles.place}>
                    {report?.iRDBusinessTrips.place || '-'}
                </Text>
                <Text style={styles.work}>
                    {report?.iRDBusinessTrips.work || '-'}
                </Text>
                <Text style={styles.code}>
                    {report?.iRDBusinessTrips.value || '-'}
                </Text>
            </View>
        </View>
    </>
)

export default IRDBusinessTrips
