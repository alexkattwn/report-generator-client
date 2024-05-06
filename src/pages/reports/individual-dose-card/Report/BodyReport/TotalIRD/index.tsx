import { View, StyleSheet, Text } from '@react-pdf/renderer'

const borderColor = 'gray'
const backgroundColor = '#bff0fd'

const styles = StyleSheet.create({
    text: {
        marginTop: 8,
        marginBottom: 4,
        width: '100%',
        textAlign: 'center',
    },
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
    period: {
        width: '60%',
        textAlign: 'center',
        padding: 4,
    },
    first: {
        width: '10%',
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        borderTopColor: borderColor,
        borderTopWidth: 1,
        height: 46,
        textAlign: 'center',
        padding: 4,
        transform: 'rotate(-90deg)',
    },
    second: {
        width: '10%',
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        textAlign: 'center',
        padding: 4,
        transform: 'rotate(-90deg)',
    },
    third: {
        width: '10%',
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        textAlign: 'center',
        padding: 4,
        transform: 'rotate(-90deg)',
    },
    fourth: {
        width: '10%',
        textAlign: 'center',
        padding: 4,
        transform: 'rotate(-90deg)',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto',
        minHeight: 26,
        borderTopColor: borderColor,
        borderTopWidth: 1,
    },
    year: {
        padding: 6,
        width: '20%',
        textAlign: 'center',
        marginBottom: 'auto',
    },
    quarter: {
        width: '80%',
        flexDirection: 'column',
    },
    valuesFirst: {
        flexDirection: 'row',
        minHeight: 24,
        height: 'auto',
    },
    values: {
        borderTopColor: borderColor,
        borderTopWidth: 1,
        flexDirection: 'row',
        minHeight: 24,
        height: 'auto',
    },
    valuesRow: {
        flexDirection: 'row',
    },
    quarterItem: {
        width: 218,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
        borderRightColor: borderColor,
        borderRightWidth: 1,
        padding: 4,
    },
    valueItemFirst: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: 45,
        padding: 4,
        textAlign: 'center',
    },
    valueItemSecond: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: 57,
        padding: 4,
        textAlign: 'center',
    },
    valueItemThird: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: 46,
        padding: 4,
        textAlign: 'center',
    },
    valueItemFourth: {
        width: 60,
        padding: 4,
        textAlign: 'center',
    },
})

const TotalIRD: React.FC = () => (
    <>
        <Text style={styles.text}>
            2. Суммарные индивидуальные дозы облучения в условиях нормальной
            эксплуатации
        </Text>
        <View style={styles.tableContainer}>
            <View style={styles.header}>
                <Text style={styles.period}>Период</Text>
                <Text style={styles.first}>E, мЗв</Text>
                <Text style={styles.second}>H(extrim), мЗв</Text>
                <Text style={styles.third}>H(lens), мЗв</Text>
                <Text style={styles.fourth}>H(skin), мЗв</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.year}>2023</Text>
                <View style={styles.quarter}>
                    <View style={styles.valuesFirst}>
                        <Text style={styles.quarterItem}>1 квартал</Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.quarterItem}>2 квартал</Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.quarterItem}>3 квартал</Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.quarterItem}>4 квартал</Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.quarterItem}>итого</Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.row}>
                <Text style={styles.year}>2024</Text>
                <View style={styles.quarter}>
                    <View style={styles.valuesFirst}>
                        <Text style={styles.quarterItem}>1 квартал</Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.quarterItem}>2 квартал</Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.quarterItem}>3 квартал</Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.quarterItem}>4 квартал</Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.quarterItem}>итого</Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.row}>
                <Text style={styles.year}>2019-2023</Text>
                <View style={styles.quarter}>
                    <View style={styles.valuesFirst}>
                        <Text style={styles.quarterItem}>
                            5 последовательных лет
                        </Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>1,000</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.row}>
                <Text style={styles.year}>2020-2024</Text>
                <View style={styles.quarter}>
                    <View style={styles.valuesFirst}>
                        <Text style={styles.quarterItem}>
                            5 последовательных лет
                        </Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>1,000</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.row}>
                <Text style={styles.year}>ВСЕГО</Text>
                <View style={styles.quarter}>
                    <View style={styles.valuesFirst}>
                        <Text style={styles.quarterItem}>
                            до начала работы в КП ТРО Курской АЭС
                        </Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.quarterItem}>
                            за период работы в КП ТРО Курской АЭС (в
                            командировках во внешние организации)
                        </Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.quarterItem}>
                            за период работы в КП ТРО Курской АЭС (по основному
                            месту работы)
                        </Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                    <View style={styles.values}>
                        <Text style={styles.quarterItem}>ВСЕГО</Text>
                        <View style={styles.valuesRow}>
                            <Text style={styles.valueItemFirst}>-</Text>
                            <Text style={styles.valueItemSecond}>-</Text>
                            <Text style={styles.valueItemThird}>-</Text>
                            <Text style={styles.valueItemFourth}>-</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </>
)

export default TotalIRD
