export interface IIDC {
    personInfo: {
        id_uuid: string
        surname: string
        name: string
        patronymic: string
        sex: string
        birthday: string
        photo: string
        on_tda: string
    }
    document: {
        doc: string
    }
    iRDAccident: {
        start_datetime: string
        end_datetime: string
        place: string
        mv_name: string
        value: string
        mnv_precision: string
    }
    iRDBeforeWork: {
        start_datetime: string
        end_datetime: string
        place: string
        mv_name: string
        value: string
        mnv_precision: string
        uncertainty: string
    }
    listPeriods: {
        number: number
        year: string
        label: string
        mv_value: string
        value: string
        mnv_precision: string
    }
    iRDBusinessTrips: {
        start_datetime: string
        end_datetime: string
        place: string
        mv_name: string
        work: string
        value: string
        mnv_precision: string
        uncertainty: string
    }
    dosimetricRegistration: {
        set_datetime: string
        dismiss_datetime: string
        struct: string
        name: string
    }
    iRDMainPlaceWork: {
        start_datetime: string
        end_datetime: string
        additional: string
        model_name: string
        mv_name: string
        value: string
        uncertainty: string
        mnv_precision: string
    }
    littleObj: {
        mv_name: string
        t: string
        name: string
    }
    info: {
        model_code: string
        t: string
        name: string
    }
    headerInfo: {
        id_uuid: string
        fio: string
        birthday: string
        contacts: string
        min_datetime: string
        max_datetime: string
        e_sertificate: string
    }
}

export interface ICD {
    struct: string
    date_creation: string
    date_start: string
    date_end: string
    registered: string
    measured: string
    chief_orb: string
    chief_lprk_orb: string
    e_value: string
    he_value: string
    hl_value: string
    hs_value: string
}

export interface IIDCReport {
    fio: string
    birthday: string
    contacts: string
    doc: string
    min_datetime: string
    max_datetime: string
    iRDA_start: string
    iRDA_end: string
    iRDA_place: string
    iRDA_value: string
    iRDB_start: string
    iRDB_end: string
    iRDB_place: string
    iRDB_value: string
    dr_start: string
    dr_end: string
    dr_struct: string
    dr_post: string
    ibt_start: string
    ibt_end: string
    ibt_place: string
    ibt_value: string
    imp_start: string
    imp_end: string
    imp_model: string
    imp_add: string
    imp_value: string
    date_creation: string
    chief: string
    chief_group: string
}
