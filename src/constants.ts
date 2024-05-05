import { IParametersCD, IParametersID, IParametersIDC } from '@/types/common'
import { dateToString } from '@/utils/common'

export const AUTH_ROUTE = '/auth'
export const REPORTS_ROUTE = '/reports'
export const USERS_GUIDE_ROUTE = '/reports/users-guide'
export const INDIVIDUAL_DOSE_CARD_REPORT_ROUTE = '/reports/individual-dose-card'
export const INDIVIDUAL_DOSES_REPORT_ROUTE = '/reports/individual-doses'
export const COLLECTIVE_DOSES_REPORT_ROUTE = '/reports/collective-doses'
export const HOME_ROUTE = '/'
export const NOT_FOUND_ROUTE = '*'

export const REPORT_IDC_ROUTE = '/report-idc'
export const REPORT_CD_ROUTE = '/report-cd'
export const REPORT_ID_ROUTE = '/report-id'

export const delayValue = 500

export const dataAccordion = [
    {
        title: 'СИЧ',
        fields: [
            {
                title: 'Не прошли обследования СИЧ',
                path: REPORTS_ROUTE,
            },
        ],
    },
    {
        title: 'Величины',
        fields: [
            {
                title: 'Соблюдение КУ',
                path: REPORTS_ROUTE,
            },
            {
                title: 'Распределение индивидуальных доз',
                path: REPORTS_ROUTE,
            },
            {
                title: 'Непревышение уровня исследования',
                path: REPORTS_ROUTE,
            },
            {
                title: 'Индивидуальные дозы',
                path: INDIVIDUAL_DOSES_REPORT_ROUTE,
            },
            {
                title: 'Карты учета индивидуальных доз',
                path: INDIVIDUAL_DOSE_CARD_REPORT_ROUTE,
            },
            {
                title: 'Коллективные дозы',
                path: COLLECTIVE_DOSES_REPORT_ROUTE,
            },
        ],
    },
    {
        title: 'ТДК',
        fields: [
            {
                title: 'Периоды наборов доз ТДК',
                path: REPORTS_ROUTE,
            },
            {
                title: 'Итерации слайдов ТДК',
                path: REPORTS_ROUTE,
            },
            {
                title: 'Слайды ТДК',
                path: REPORTS_ROUTE,
            },
            {
                title: 'Протокол измерения дозиметров ТДК',
                path: REPORTS_ROUTE,
            },
        ],
    },
    {
        title: 'Персонал',
        fields: [
            {
                title: 'Персонал',
                path: REPORTS_ROUTE,
            },
        ],
    },
    {
        title: 'Оборудование',
        fields: [
            {
                title: 'Оборудование',
                path: REPORTS_ROUTE,
            },
        ],
    },
    {
        title: 'Деятельность',
        fields: [
            {
                title: 'Активность пользователей',
                path: REPORTS_ROUTE,
            },
        ],
    },
]

export const initialStateParametersIDC: IParametersIDC = {
    struct: '',
    post: '',
    pass_sfz: '',
    personal_number: '',
    physical_person: '',
    doc_number: '',
    contacts: '',
    id_personal: '',
    post_approver: 'Начальник ОРБ',
    post_responsible_person: 'Руководитель группы ИДК',
    filter: '',
}

export const initialStateParametersCD: IParametersCD = {
    on_business_trips: '',
    by_surveys: '',
    by_receipts: '',
    main_tdk: '',
    additional_tdk: '',
    odk: '',
    date_start: '',
    date_end: dateToString(new Date()),
    struct: '',
    age_from: '0',
    age_to: '100',
    sex_man: '',
    sex_woman: '',
    all_child_structures: 'true',
    chief_orb: 'М.Ю. Лузин',
    chief_lprk_orb: 'А.А. Воробьев',
    filter: '',
    go: '',
}

export const initialStateParametersID: IParametersID = {
    on_business_trips: '',
    by_surveys: '',
    by_receipts: '',
    main_tdk: '',
    additional_tdk: '',
    odk: '',
    date_start: '',
    date_end: dateToString(new Date()),
    struct: '',
    age_from: '0',
    age_to: '100',
    sex_man: '',
    sex_woman: '',
    all_child_structures: 'true',
    chief_orb: 'А.Л. Березницкий',
    chief_group_idc: 'Ю.С. Прыткова',
    filter: '',
    go: '',
}
