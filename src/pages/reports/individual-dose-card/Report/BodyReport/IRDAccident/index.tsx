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
        height: 32,
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
    sumDoses: {
        width: '90%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'left',
        padding: 4,
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

const IRDAccident: React.FC<IRDAccidentProps> = ({ report }) => {
    return (
        <>
            <Text style={styles.text}>
                1. Индивидуальные дозы облучения в условиях аварии
            </Text>
            <View style={styles.tableContainer}>
                <View style={styles.header}>
                    <Text style={styles.dateStart}>Дата начала</Text>
                    <Text style={styles.dateEnd}>Дата окончания</Text>
                    <Text style={styles.place}>Место получения</Text>
                    <Text style={styles.code}>
                        {report?.iRDAccident.mv_name || '-'}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.dateStart}>
                        {formatDateAndTime(
                            `${report?.iRDAccident.start_datetime}`
                        ) || '-'}
                    </Text>
                    <Text style={styles.dateEnd}>
                        {formatDateAndTime(
                            `${report?.iRDAccident.end_datetime}`
                        ) || '-'}
                    </Text>
                    <Text style={styles.place}>
                        {report?.iRDAccident.place || '-'}
                    </Text>
                    <Text style={styles.code}>
                        {report?.iRDAccident.value || '-'}
                    </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.sumDoses}>Суммарные дозы</Text>
                    <Text style={styles.code}>
                        {report?.iRDAccident.value || '-'}
                    </Text>
                </View>
            </View>
        </>
    )
}

export default IRDAccident
