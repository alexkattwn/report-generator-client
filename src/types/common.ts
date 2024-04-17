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
