import { IParametersIDC } from '@/types/common'
import { IIDC, IIDCReport } from '@/types/reports'
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
