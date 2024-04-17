import { StyleSheet, View, Text } from '@react-pdf/renderer'

import { IIDC } from '@/types/reports'

const titleStyles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
    },
    reportTitle: {
        width: '100%',
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: '8px',
        fontStyle: 'bold',
    },
})

const headerStyles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '12px',
    },
    label: {
        paddingTop: '6px',
    },
    textTop: {
        width: '340px',
        borderBottom: '1px solid black',
        paddingTop: '2px',
    },
    textBottom: {
        width: '215px',
        borderBottom: '1px solid black',
        paddingTop: '2px',
    },
})

interface HeaderReportIDCProps {
    report: IIDC | undefined
}

const HeaderReportIDC: React.FC<HeaderReportIDCProps> = ({ report }) => {
    return (
        <>
            <View style={titleStyles.titleContainer}>
                <Text style={titleStyles.reportTitle}>
                    Карта учета индивидуальных доз облучения персонала КП ТРО
                    Курской АЭС
                </Text>
            </View>
            <View style={headerStyles.block}>
                <Text style={headerStyles.label}>Фамилия, имя, отчество</Text>
                <Text style={headerStyles.textTop}>
                    {report?.headerInfo.fio || '-'}
                </Text>
            </View>
            <View style={headerStyles.block}>
                <Text style={headerStyles.label}>Дата рождения</Text>
                <Text style={headerStyles.textTop}>
                    {report?.headerInfo.birthday || '-'}
                </Text>
            </View>
            <View style={headerStyles.block}>
                <Text style={headerStyles.label}>
                    Документ, удостоверяющий личность
                </Text>
                <Text style={headerStyles.textTop}>
                    {report?.document.doc || '-'}
                </Text>
            </View>
            <View style={headerStyles.block}>
                <Text style={headerStyles.label}>Контактные данные</Text>
                <Text style={headerStyles.textTop}>
                    {report?.headerInfo.contacts || '-'}
                </Text>
            </View>
            <View style={headerStyles.block}>
                <Text style={headerStyles.label}>
                    Дата поставки на дозиметрический учет в КП ТРО Курской АЭС
                </Text>
                <Text style={headerStyles.textBottom}>
                    {report?.headerInfo.min_datetime || '-'}
                </Text>
            </View>
            <View style={headerStyles.block}>
                <Text style={headerStyles.label}>
                    Дата снятия с дозиметрического учета в КП ТРО Курской АЭС
                </Text>
                <Text style={headerStyles.textBottom}>
                    {report?.headerInfo.max_datetime || '-'}
                </Text>
            </View>
        </>
    )
}

export default HeaderReportIDC
