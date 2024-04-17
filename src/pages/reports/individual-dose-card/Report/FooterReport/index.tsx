import { StyleSheet, View, Text } from '@react-pdf/renderer'

import { formatDate } from '@/utils/common'

const styles = StyleSheet.create({
    main: {
        margin: '12px 0px',
        gap: '4px',
    },
    text: {
        width: '100%',
        textAlign: 'left',
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '8px',
    },
    label: {
        width: '120px',
    },
    notes: {
        margin: '6px 0px',
        width: '100%',
        textAlign: 'left',
        fontSize: '9px',
    },
    dateIssue: {
        fontStyle: 'italic',
    },
    date: {},
    bottomBlock: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        gap: 15,
        textAlign: 'center',
    },
    painting: {
        paddingTop: 13,
        width: 160,
        flexDirection: 'column',
        height: 40,
    },
    bottom: {
        width: 160,
        borderBottom: '1px solid black',
        marginBottom: 26,
    },
    bottomText: {
        width: 160,
        borderBottom: '1px solid black',
        paddingTop: '2px',
    },
    elem: {
        width: '30%',
        fontSize: 8,
        paddingLeft: 60,
    },
})

const FooterReportIDC: React.FC = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>
                В настоящей Карте использованы следующие обозначения нормируемых
                величин:
            </Text>
            <View style={styles.block}>
                <Text style={styles.label}>H(extrim), [мЗв]</Text>
                <Text style={styles.text}>
                    - эквивалентная доза в кистях и стопах
                </Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.label}>E, [мЗв]</Text>
                <Text style={styles.text}>- эффективная доза</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.label}>H(skin), [мЗв]</Text>
                <Text style={styles.text}>- эквивалентная доза в коже</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.label}>H(lens), [мЗв]</Text>
                <Text style={styles.text}>
                    - эквивалентная доза в хрусталике глаза
                </Text>
            </View>
            <Text style={styles.text}>
                В настоящей Карте использованы следующие обозначения моделей
                текущего дозиметрического контроля:
            </Text>
            <View style={styles.block}>
                <Text style={styles.label}>standard</Text>
                <Text style={styles.text}>
                    - постоянный ТДК для всего персонала
                </Text>
            </View>
            <Text style={styles.notes}>
                Примечание - в таблице 2 приведены сводные суммарные
                индивидуальны дозы за календарные годовые и пятилетние периоды.
                При отсутствии данных об индивидуальных дозах за отдельный
                календарный год или его часть, соответствующее значение для
                вывода в таблице 2 принимается равным 0. За текущий календарный
                год приведены дозы на дату выдачи копии карты (см. ниже).
            </Text>
            <View style={styles.block}>
                <Text style={styles.dateIssue}>Дата выдачи копии</Text>
                <Text style={styles.date}>{formatDate(`${new Date()}`)}</Text>
            </View>
            <View style={styles.bottomBlock}>
                <View style={styles.row}>
                    <Text style={styles.bottom}>Начальник ОРБ</Text>
                    <View style={styles.painting}>
                        <Text style={styles.bottomText}></Text>
                        <Text style={styles.elem}>подпись</Text>
                    </View>
                    <View style={styles.painting}>
                        <Text style={styles.bottomText}></Text>
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
                        <Text style={styles.bottomText}></Text>
                        <Text style={styles.elem}>И.О.Фамилия</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FooterReportIDC
