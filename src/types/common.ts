export interface IField {
    title: string
    path: string
}

export interface IPost {
    id_uuid: string
    code: string
    name: string
    create_date: string
    update_date: string | null
}

export interface ICompanyStructure {
    id_uuid: string
    parent_id_uuid: string | null
    name: string
    shortname: string
    code: string
}

export interface IParametersIDC {
    struct: string
    post: string
    pass_sfz: string
    personal_number: string
    physical_person: string
    doc_number: string
    contacts: string
    id_personal: string
    post_approver: string
    post_responsible_person: string
    filter: string
}

export interface IParametersCD {
    on_business_trips: string
    by_surveys: string
    by_receipts: string
    main_tdk: string
    additional_tdk: string
    odk: string
    date_start: string
    date_end: string
    struct: string
    age_from: string
    age_to: string
    sex_man: string
    sex_woman: string
    all_child_structures: string
    chief_orb: string
    chief_lprk_orb: string
    filter: string
}

export interface IPersonalData {
    count: number
    data: IPersonal[]
}

export interface IPersonal {
    id_uuid: string
    surname: string
    name: string
    patronymic: string
    sex: string
    birthday: string
    photo: string | null
    name_post: string
    code_post: string
    personnel_number: string
    pass_sfz: string
    on_tda: string
}

export interface IFilter {
    id_report: string
    name_report: string
    name_filter: string
    parameters: string
    id_filter: string
}
