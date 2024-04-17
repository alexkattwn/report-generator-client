import { View, Text, StyleSheet } from '@react-pdf/renderer'

const borderColor = 'gray'
const backgroundColor = '#bff0fd'

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: borderColor,
        marginTop: 20,
    },
    header: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
    },
    headerWhite: {
        width: '40%',
        flexDirection: 'row',
    },
    headerBlue: {
        width: '60%',
        backgroundColor: backgroundColor,
        flexDirection: 'row',
    },
    headerStruct: {
        width: 184,
        textAlign: 'center',
        padding: 4,
        marginTop: 16,
    },
    headerWhiteFirst: {
        textAlign: 'center',
        height: 56,
        width: 64,
        padding: 4,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
    },
    headerWhiteSecond: {
        textAlign: 'center',
        height: 56,
        width: 64,
        paddingTop: 14,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
    },
    headerBlueContent: {
        width: '25%',
        textAlign: 'center',
        padding: 12,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        borderTopColor: borderColor,
        borderTopWidth: 1,
    },
    rowBlue: {
        flexDirection: 'row',
        width: '40%',
        backgroundColor: backgroundColor,
    },
    rowWhite: {
        flexDirection: 'row',
        width: '60%',
    },
    rowBlueStruct: {
        width: 184,
        padding: 6,
    },
    rowBlueContent: {
        width: 64,
        textAlign: 'center',
        padding: 8,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
    },
    rowWhiteContent: {
        width: '25%',
        padding: 10,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
        textAlign: 'center',
    },
})

const BodyReportCD: React.FC = () => {
    return (
        <View style={styles.tableContainer}>
            <View style={styles.header}>
                <View style={styles.headerWhite}>
                    <Text style={styles.headerStruct}>Структура</Text>
                    <Text style={styles.headerWhiteFirst}>
                        Состояло на доз. учете, чел.
                    </Text>
                    <Text style={styles.headerWhiteSecond}>Измерено, чел.</Text>
                </View>
                <View style={styles.headerBlue}>
                    <Text style={styles.headerBlueContent}>
                        E, мЗв колл/макс/сред
                    </Text>
                    <Text style={styles.headerBlueContent}>
                        H(extrim), мЗв колл/макс/сред
                    </Text>
                    <Text style={styles.headerBlueContent}>
                        H(lens), мЗв колл/макс/сред
                    </Text>
                    <Text style={styles.headerBlueContent}>
                        H(skin), мЗв колл/макс/сред
                    </Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.rowBlue}>
                    <Text style={styles.rowBlueStruct}>
                        Комплекс по переработке твердых радиоактивных отходов
                        Курской АЭС
                    </Text>
                    <Text style={styles.rowBlueContent}>33</Text>
                    <Text style={styles.rowBlueContent}>2</Text>
                </View>
                <View style={styles.rowWhite}>
                    <Text style={styles.rowWhiteContent}>
                        1,004/1,002/2,004
                    </Text>
                    <Text style={styles.rowWhiteContent}>
                        1,004/0,503/1,005
                    </Text>
                    <Text style={styles.rowWhiteContent}>
                        1,004/0,503/1,005
                    </Text>
                    <Text style={styles.rowWhiteContent}>
                        1,004/0,503/1,005
                    </Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.rowBlue}>
                    <Text style={styles.rowBlueStruct}>
                        ФГУП Приборостроительный завод им. К.А.Володина
                    </Text>
                    <Text style={styles.rowBlueContent}>1</Text>
                    <Text style={styles.rowBlueContent}>1</Text>
                </View>
                <View style={styles.rowWhite}>
                    <Text style={styles.rowWhiteContent}>
                        2,000/2,000/2,000
                    </Text>
                    <Text style={styles.rowWhiteContent}>
                        2,000/2,000/2,000
                    </Text>
                    <Text style={styles.rowWhiteContent}>
                        2,000/2,000/2,000
                    </Text>
                    <Text style={styles.rowWhiteContent}>
                        2,000/2,000/2,000
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default BodyReportCD
