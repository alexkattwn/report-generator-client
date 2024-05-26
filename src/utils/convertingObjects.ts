import { IParametersIDC } from '@/types/common'
import { IID, IIDC, IIDCReport, IIDItems, IIDReport } from '@/types/reports'
import { formatDate, formatDateAndTime } from '@/utils/common'

export const convertingIDCForReport = (
    report: IIDC,
    params: IParametersIDC
): IIDCReport => {
    return {
        fio: report.headerInfo.fio || '-',
        birthday: report.headerInfo.birthday || '-',
        contacts: report.headerInfo.contacts || '-',
        doc: report.document.doc || '-',
        min_datetime: formatDateAndTime(report.headerInfo.min_datetime) || '-',
        max_datetime: formatDateAndTime(report.headerInfo.max_datetime) || '-',
        iRDA_start: formatDateAndTime(report.iRDAccident.start_datetime) || '-',
        iRDA_end: formatDateAndTime(report.iRDAccident.end_datetime) || '-',
        iRDA_place: report.iRDAccident.place || '-',
        iRDA_value: report.iRDAccident.value || '-',
        iRDB_start:
            formatDateAndTime(report.iRDBeforeWork.start_datetime) || '-',
        iRDB_end: formatDateAndTime(report.iRDBeforeWork.end_datetime) || '-',
        iRDB_place: report.iRDBeforeWork.place || '-',
        iRDB_value: report.iRDBeforeWork.value || '-',
        dr_start:
            formatDateAndTime(report.dosimetricRegistration.set_datetime) ||
            '-',
        dr_end:
            formatDateAndTime(report.dosimetricRegistration.dismiss_datetime) ||
            '-',
        dr_struct: report.dosimetricRegistration.struct || '-',
        dr_post: report.dosimetricRegistration.name || '-',
        ibt_start:
            formatDateAndTime(report.iRDBusinessTrips.start_datetime) || '-',
        ibt_end: formatDateAndTime(report.iRDBusinessTrips.end_datetime) || '-',
        ibt_place: report.iRDBusinessTrips.place || '-',
        ibt_value: report.iRDBusinessTrips.value || '-',
        imp_start:
            formatDateAndTime(report.iRDMainPlaceWork.start_datetime) || '-',
        imp_end: formatDateAndTime(report.iRDMainPlaceWork.end_datetime) || '-',
        imp_model: report.iRDMainPlaceWork.model_name || '-',
        imp_add: report.iRDMainPlaceWork.additional || '-',
        imp_value: report.iRDMainPlaceWork.value || '-',
        date_creation: formatDate(`${new Date()}`),
        chief: params.post_approver || '-',
        chief_group: params.post_responsible_person || '-',
    }
}

export const convertingIDForReport = (report: IID): IIDReport => {
    const count = report.personalDoses.length

    let items: IIDItems[] = []

    for (let i = 0; i < count; i++) {
        const elem = report.personalDoses[i]
        const obj: IIDItems = {
            i: `${i + 1}`,
            fio: `${elem.surname} ${elem.name[0]}.${elem.patronymic[0]}.`,
            sex: elem.sex || '-',
            age: elem.age || '-',
            code: elem.struct_code || '-',
            post: elem.code_post || '-',
            tab: elem.personnel_number || '-',
            asidc: '-',
            value_e: elem.dose_e || '-',
            value_hk: elem.dose_hk || '-',
            value_hs: elem.dose_hs || '-',
            value_hh: elem.dose_hh || '-',
            fam: '-',
        }

        items.push(obj)
    }

    return {
        date_creation: report.date_creation,
        date_start: report.date_start,
        date_end: report.date_end,
        struct: report.struct,
        registered: report.registered,
        measured: report.measured,
        chief_orb: report.chief_orb,
        chief_group_idc: report.chief_group_idc,
        items,
    }
}
