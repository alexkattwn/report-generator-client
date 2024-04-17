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
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    dateEnd: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    place: {
        width: '40%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    code: {
        width: '10%',
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

interface IRDAccidentProps {
    report: IIDC | undefined
}

const IRDBeforeWork: React.FC<IRDAccidentProps> = ({ report }) => {
    return (
        <>
            <Text style={styles.text}>
                3. Индивидуальные дозы облучения до начала работы в КП ТРО
                Курской АЭС
            </Text>
            <View style={styles.tableContainer}>
                <View style={styles.header}>
                    <Text style={styles.dateStart}>Дата начала</Text>
                    <Text style={styles.dateEnd}>Дата окончания</Text>
                    <Text style={styles.place}>Место получения</Text>
                    <Text style={styles.code}>
                        {report?.iRDBeforeWork.mv_name || '-'}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.dateStart}>
                        {formatDateAndTime(
                            `${report?.iRDBeforeWork.start_datetime}`
                        ) || '-'}
                    </Text>
                    <Text style={styles.dateEnd}>
                        {formatDateAndTime(
                            `${report?.iRDBeforeWork.end_datetime}`
                        ) || '-'}
                    </Text>
                    <Text style={styles.place}>
                        {report?.iRDBeforeWork.place || '-'}
                    </Text>
                    <Text style={styles.code}>
                        {report?.iRDBeforeWork.value || '-'}
                    </Text>
                </View>
            </View>
        </>
    )
}

export default IRDBeforeWork
