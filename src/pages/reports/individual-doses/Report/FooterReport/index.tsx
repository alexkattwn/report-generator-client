import { StyleSheet, View, Text } from '@react-pdf/renderer'

import { IParametersID } from '@/types/common'

const styles = StyleSheet.create({
    block: {
        marginTop: 24,
        flexDirection: 'column',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        gap: 15,
        textAlign: 'center',
    },
    painting: {
        width: 160,
        flexDirection: 'column',
        height: 40,
    },
    bottom: {
        fontStyle: 'italic',
        width: 160,
        borderBottom: '1px solid black',
        marginBottom: 18,
    },
    bottomText: {
        fontStyle: 'italic',
        width: 160,
        borderBottom: '1px solid black',
        paddingTop: '2px',
        height: 22,
    },
    elem: {
        width: '30%',
        fontSize: 8,
        paddingLeft: 60,
    },
    elemLong: {
        width: '100%',
        fontSize: 8,
    },
})

interface FooterReportIDProps {
    parameters: IParametersID
}

const FooterReportID: React.FC<FooterReportIDProps> = ({ parameters }) => (
    <View style={styles.block}>
        <View style={styles.row}>
            <Text style={styles.bottom}>Начальник ОРБ</Text>
            <View style={styles.painting}>
                <Text style={styles.bottomText}></Text>
                <Text style={styles.elem}>подпись</Text>
            </View>
            <View style={styles.painting}>
                <Text style={styles.bottomText}>{parameters.chief_orb}</Text>
                <Text style={styles.elem}>И.О.Фамилия</Text>
            </View>
        </View>
        <View style={styles.row}>
            <Text style={styles.bottom}>Руководитель группы ИДК</Text>
            <View style={styles.painting}>
                <Text style={styles.bottomText}></Text>
                <Text style={styles.elem}>подпись</Text>
            </View>
            <View style={styles.painting}>
                <Text style={styles.bottomText}>
                    {parameters.chief_group_idc}
                </Text>
                <Text style={styles.elem}>И.О.Фамилия</Text>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.painting}>
                <Text style={styles.bottomText}></Text>
                <Text style={styles.elemLong}>
                    должность сотрудника группы ИДК
                </Text>
            </View>
            <View style={styles.painting}>
                <Text style={styles.bottomText}></Text>
                <Text style={styles.elem}>подпись</Text>
            </View>
            <View style={styles.painting}>
                <Text style={styles.bottomText}></Text>
                <Text style={styles.elem}>И.О.Фамилия</Text>
            </View>
        </View>
    </View>
)

export default FooterReportID
