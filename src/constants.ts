export const AUTH_ROUTE = '/auth'
export const REPORTS_ROUTE = '/reports'
export const INDIVIDUAL_DOSE_CARD_REPORT_ROUTE = '/reports/individual-dose-card'
export const HOME_ROUTE = '/'
export const NOT_FOUND_ROUTE = '*'

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
                path: REPORTS_ROUTE,
            },
            {
                title: 'Карта учета индивидуальных доз',
                path: INDIVIDUAL_DOSE_CARD_REPORT_ROUTE,
            },
            {
                title: 'Коллективные дозы',
                path: REPORTS_ROUTE,
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
