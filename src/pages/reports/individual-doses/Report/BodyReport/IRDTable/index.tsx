import { View, Text, StyleSheet } from '@react-pdf/renderer'

import { IID } from '@/types/reports'

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
})

interface IRDTableProps {
    report: IID
}

const IRDTable: React.FC<IRDTableProps> = ({ report }) => {
    console.log(report.personalDoses[0].surname)
    return (
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
                        <Text style={styles.headerBlueContentFirst}>
                            E, мЗв
                        </Text>
                        <Text style={styles.headerBlueContent}>H кожи, мЗ</Text>
                        <Text style={styles.headerBlueContent}>
                            H стопы и кисти, мЗв
                        </Text>
                        <Text style={styles.headerBlueContent}>
                            H хрусталика, мЗв
                        </Text>
                        <Text style={styles.headerBlueContentLast}>
                            Ознакомлен
                        </Text>
                    </View>
                </View>

                {report.personalDoses.map((person, index) => (
                    <View style={styles.row} key={index}>
                        <View style={styles.rowBlue}>
                            <Text style={styles.headerNumber}>{index + 1}</Text>
                            <Text
                                style={styles.headerFio}
                            >{`${person.surname} ${person.name[0]}.${person.patronymic[0]}.`}</Text>
                            <Text style={styles.headerSex}>
                                {person.sex || '-'}
                            </Text>
                            <Text style={styles.headerAge}>
                                {person.age || '-'}
                            </Text>
                            <Text style={styles.headerStruct}>
                                {person.struct_code || '-'}
                            </Text>
                            <Text style={styles.headerPost}>
                                {person.code_post || '-'}
                            </Text>
                            <Text style={styles.headerTabNum}>
                                {person.personnel_number || '-'}
                            </Text>
                            <Text style={styles.headerASIDC}>-</Text>
                        </View>
                        <View style={styles.rowWhite}>
                            <Text style={styles.headerBlueContentFirst}>
                                {person.dose_e || '-'}
                            </Text>
                            <Text style={styles.headerBlueContent}>
                                {person.dose_hk || '-'}
                            </Text>
                            <Text style={styles.headerBlueContent}>
                                {person.dose_hs || '-'}
                            </Text>
                            <Text style={styles.headerBlueContent}>
                                {person.dose_hk || '-'}
                            </Text>
                            <Text style={styles.headerBlueContentLast}>-</Text>
                        </View>
                    </View>
                ))}
            </View>
        </>
    )
}
export default IRDTable
