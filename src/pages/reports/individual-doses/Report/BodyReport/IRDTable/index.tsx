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
        fontSize: 9,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: borderColor,
    },
    header: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
    },
    headerWhite: {
        width: '65%',
        flexDirection: 'column',
    },
    headerBlue: {
        width: '35%',
        backgroundColor: backgroundColor,
        flexDirection: 'row',
    },
    headerWhiteBottom: {
        width: '100%',
        flexDirection: 'row',
    },
    headerWhiteTop: {
        width: '100%',
    },
    headerStaff: {
        width: '100%',
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        textAlign: 'center',
        padding: 4,
    },
    headerNumber: {
        width: '5%',
        textAlign: 'center',
        padding: 4,
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    headerFio: {
        width: '20%',
        textAlign: 'center',
        padding: 4,
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    headerSex: {
        width: '7%',
        textAlign: 'center',
        padding: 4,
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    headerAge: {
        width: '10%',
        textAlign: 'center',
        padding: 4,
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    headerStruct: {
        width: '18%',
        textAlign: 'center',
        padding: 4,
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    headerPost: {
        width: '20%',
        textAlign: 'center',
        padding: 4,
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    headerTabNum: {
        width: '10%',
        textAlign: 'center',
        padding: 4,
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    headerASIDC: {
        width: '10%',
        textAlign: 'center',
        padding: 4,
    },
    headerBlueContent: {
        width: '20%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        padding: 4,
    },
    headerBlueContentFirst: {
        width: '20%',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        borderLeftColor: borderColor,
        borderLeftWidth: 1,
        padding: 4,
    },
    headerBlueContentLast: {
        width: '20%',
        textAlign: 'center',
        paddingTop: 4,
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
        width: '65%',
        backgroundColor: backgroundColor,
    },
    rowWhite: {
        flexDirection: 'row',
        width: '35%',
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

const IRDTable: React.FC = () => (
    <>
        <Text style={styles.title}>Индивидуальные дозы облучения</Text>
        <View style={styles.tableContainer}>
            <View style={styles.header}>
                <View style={styles.headerWhite}>
                    <View style={styles.headerWhiteTop}>
                        <Text style={styles.headerStaff}>Сотрудник</Text>
                    </View>
                    <View style={styles.headerWhiteBottom}>
                        <Text style={styles.headerNumber}>№ п/п</Text>
                        <Text style={styles.headerFio}>Фамилия И.О</Text>
                        <Text style={styles.headerSex}>Пол</Text>
                        <Text style={styles.headerAge}>Возраст</Text>
                        <Text style={styles.headerStruct}>Структура</Text>
                        <Text style={styles.headerPost}>Должность</Text>
                        <Text style={styles.headerTabNum}>Таб. номер</Text>
                        <Text style={styles.headerASIDC}>
                            Учетный номер АСИДК
                        </Text>
                    </View>
                </View>
                <View style={styles.headerBlue}>
                    <Text style={styles.headerBlueContentFirst}>E, мЗв</Text>
                    <Text style={styles.headerBlueContent}>H кожи, мЗ</Text>
                    <Text style={styles.headerBlueContent}>
                        H стопы и кисти, мЗв
                    </Text>
                    <Text style={styles.headerBlueContent}>
                        H хрусталика, мЗв
                    </Text>
                    <Text style={styles.headerBlueContentLast}>Ознакомлен</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.rowBlue}>
                    <Text style={styles.headerNumber}>1</Text>
                    <Text style={styles.headerFio}>Агапов Т.В</Text>
                    <Text style={styles.headerSex}>Муж.</Text>
                    <Text style={styles.headerAge}>36</Text>
                    <Text style={styles.headerStruct}>КП ТРО / ОРБ</Text>
                    <Text style={styles.headerPost}>Инженер-дозиметрист</Text>
                    <Text style={styles.headerTabNum}>36601615</Text>
                    <Text style={styles.headerASIDC}>-</Text>
                </View>
                <View style={styles.rowWhite}>
                    <Text style={styles.headerBlueContentFirst}>-</Text>
                    <Text style={styles.headerBlueContent}>-</Text>
                    <Text style={styles.headerBlueContent}>-</Text>
                    <Text style={styles.headerBlueContent}>-</Text>
                    <Text style={styles.headerBlueContentLast}>-</Text>
                </View>
            </View>
        </View>
    </>
)

export default IRDTable
