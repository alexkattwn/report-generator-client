export interface IIDC {
    personInfo: {
        id_uuid: string
        surname: string
        name: string
        patronymic: string
        sex: string
        birthday: string
        photo: string | null
        on_tda: string
    }
    document: {
        doc: string
    }
    iRDAccident: {
        start_datetime: string | null
        end_datetime: string | null
        place: string
        mv_name: string
        value: string | null
        mnv_precision: string | null
    }
    iRDBeforeWork: {
        start_datetime: string | null
        end_datetime: string | null
        place: string
        mv_name: string
        value: string | null
        mnv_precision: string | null
        uncertainty: string | null
    }
    listPeriods: {
        number: number
        year: string
        label: string
        mv_value: string | null
        value: string | null
        mnv_precision: string | null
    }
    iRDBusinessTrips: {
        start_datetime: string | null
        end_datetime: string | null
        place: string
        mv_name: string
        work: string
        value: string | null
        mnv_precision: string | null
        uncertainty: string | null
    }
    dosimetricRegistration: {
        set_datetime: string
        dismiss_datetime: string | null
        struct: string
        name: string
    }
    iRDMainPlaceWork: {
        start_datetime: string | null
        end_datetime: string | null
        additional: string
        model_name: string
        mv_name: string
        value: string | null
        uncertainty: string | null
        mnv_precision: string | null
    }
    littleObj: {
        mv_name: string
        t: string
        name: string | null
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
        max_datetime: string | null
        e_sertificate: string
    }
}
