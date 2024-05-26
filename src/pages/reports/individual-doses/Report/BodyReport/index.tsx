import SummaryDataTable from '@/pages/reports/individual-doses/Report/BodyReport/SummaryDataTable'
import IRDTable from '@/pages/reports/individual-doses/Report/BodyReport/IRDTable'
import { IID } from '@/types/reports'

interface BodyReportIDProps {
    report: IID
}

const BodyReportID: React.FC<BodyReportIDProps> = ({ report }) => (
    <>
        <SummaryDataTable />
        <IRDTable report={report} />
    </>
)

export default BodyReportID
