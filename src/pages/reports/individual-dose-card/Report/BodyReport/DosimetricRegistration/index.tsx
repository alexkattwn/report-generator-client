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
    division: {
        width: '24%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    post: {
        width: '40%',
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

interface DosimetricRegistrationProps {
    report: IIDC | undefined
}

const DosimetricRegistration: React.FC<DosimetricRegistrationProps> = ({
    report,
}) => {
    return (
        <>
            <Text style={styles.text}>
                4. Постановки на дозиметрический учет в КП ТРО Курской АЭС
            </Text>
            <View style={styles.tableContainer}>
                <View style={styles.header}>
                    <Text style={styles.dateStart}>Дата начала</Text>
                    <Text style={styles.dateEnd}>Дата окончания</Text>
                    <Text style={styles.division}>Подразделение</Text>
                    <Text style={styles.post}>Должность</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.dateStart}>
                        {formatDateAndTime(
                            `${report?.dosimetricRegistration.set_datetime}`
                        ) || '-'}
                    </Text>
                    <Text style={styles.dateEnd}>
                        {formatDateAndTime(
                            `${report?.dosimetricRegistration.dismiss_datetime}`
                        ) || '-'}
                    </Text>
                    <Text style={styles.division}>
                        {report?.dosimetricRegistration.struct || '-'}
                    </Text>
                    <Text style={styles.post}>
                        {report?.dosimetricRegistration.name || '-'}
                    </Text>
                </View>
            </View>
        </>
    )
}

export default DosimetricRegistration
