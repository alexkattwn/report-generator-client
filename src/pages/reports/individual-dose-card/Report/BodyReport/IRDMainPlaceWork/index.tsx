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
        width: '22%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    dateEnd: {
        width: '22%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    tdk: {
        width: '14%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    model: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    value: {
        width: '24%',
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

interface IRDMainPlaceWorkProps {
    report: IIDC | undefined
}

const IRDMainPlaceWork: React.FC<IRDMainPlaceWorkProps> = ({ report }) => (
    <>
        <Text style={styles.text}>
            6. Индивидуальные дозы облучения за период работы в КП ТРО Курской
            АЭС (по основному месту работы)
        </Text>
        <View style={styles.tableContainer}>
            <View style={styles.header}>
                <Text style={styles.dateStart}>Дата начала</Text>
                <Text style={styles.dateEnd}>Дата окончания</Text>
                <Text style={styles.tdk}>Доп. ТДК</Text>
                <Text style={styles.model}>Модель контроля</Text>
                <Text style={styles.value}>E, мЗв (знач./неопр.)</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.dateStart}>
                    {formatDateAndTime(
                        `${report?.iRDMainPlaceWork.start_datetime}`
                    ) || '-'}
                </Text>
                <Text style={styles.dateEnd}>
                    {formatDateAndTime(
                        `${report?.iRDMainPlaceWork.end_datetime}`
                    ) || '-'}
                </Text>
                <Text style={styles.tdk}>
                    {report?.iRDMainPlaceWork.additional || '-'}
                </Text>
                <Text style={styles.model}>
                    {report?.iRDMainPlaceWork.model_name || '-'}
                </Text>
                <Text style={styles.value}>
                    {report?.iRDMainPlaceWork.value || '-'}
                </Text>
            </View>
        </View>
    </>
)

export default IRDMainPlaceWork
