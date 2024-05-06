import { View, Text, StyleSheet } from '@react-pdf/renderer'

const borderColor = 'gray'
const backgroundColor = '#bff0fd'

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginBottom: 4,
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        fontStyle: 'bold',
    },
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: borderColor,
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
        width: '100%',
        textAlign: 'center',
        padding: 6,
    },
    headerBlueContent: {
        width: '25%',
        textAlign: 'center',
        padding: 6,
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
        width: '100%',
        padding: 6,
    },
    rowBlueContent: {
        width: 64,
        textAlign: 'center',
        padding: 6,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
    },
    rowWhiteContent: {
        width: '25%',
        padding: 6,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
        textAlign: 'center',
    },
})

const SummaryDataTable: React.FC = () => (
    <>
        <Text style={styles.title}>Сводные данные по отчетной группе</Text>
        <View style={styles.tableContainer}>
            <View style={styles.header}>
                <View style={styles.headerWhite}>
                    <Text style={styles.headerStruct}>Параметр</Text>
                </View>
                <View style={styles.headerBlue}>
                    <Text style={styles.headerBlueContent}>E, мЗв</Text>
                    <Text style={styles.headerBlueContent}>H кожи, мЗв</Text>
                    <Text style={styles.headerBlueContent}>
                        H стопы и кисти, мЗв
                    </Text>
                    <Text style={styles.headerBlueContent}>
                        H хрусталика, мЗв
                    </Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.rowBlue}>
                    <Text style={styles.rowBlueStruct}>Коллективная доза</Text>
                </View>
                <View style={styles.rowWhite}>
                    <Text style={styles.rowWhiteContent}>2,004</Text>
                    <Text style={styles.rowWhiteContent}>1,005</Text>
                    <Text style={styles.rowWhiteContent}>1,005</Text>
                    <Text style={styles.rowWhiteContent}>1,005</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.rowBlue}>
                    <Text style={styles.rowBlueStruct}>
                        Максимальная индивидуальная доза
                    </Text>
                </View>
                <View style={styles.rowWhite}>
                    <Text style={styles.rowWhiteContent}>1,004</Text>
                    <Text style={styles.rowWhiteContent}>1,004</Text>
                    <Text style={styles.rowWhiteContent}>1,004</Text>
                    <Text style={styles.rowWhiteContent}>1,004</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.rowBlue}>
                    <Text style={styles.rowBlueStruct}>
                        Средняя индивидуальная доза
                    </Text>
                </View>
                <View style={styles.rowWhite}>
                    <Text style={styles.rowWhiteContent}>1,002</Text>
                    <Text style={styles.rowWhiteContent}>0,503</Text>
                    <Text style={styles.rowWhiteContent}>0,503</Text>
                    <Text style={styles.rowWhiteContent}>0,503</Text>
                </View>
            </View>
        </View>
    </>
)

export default SummaryDataTable
