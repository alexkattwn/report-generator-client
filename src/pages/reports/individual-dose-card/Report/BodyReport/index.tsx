import IRDAccident from '@/pages/reports/individual-dose-card/Report/BodyReport/IRDAccident'
import IRDBeforeWork from '@/pages/reports/individual-dose-card/Report/BodyReport/IRDBeforeWork'
import DosimetricRegistration from '@/pages/reports/individual-dose-card/Report/BodyReport/DosimetricRegistration'
import IRDBusinessTrips from '@/pages/reports/individual-dose-card/Report/BodyReport/IRDBusinessTrips'
import IRDMainPlaceWork from '@/pages/reports/individual-dose-card/Report/BodyReport/IRDMainPlaceWork'
import TotalIRD from '@/pages/reports/individual-dose-card/Report/BodyReport/TotalIRD'
import { IIDC } from '@/types/reports'

interface BodyReportIDCProps {
    report: IIDC | undefined
}

const BodyReportIDC: React.FC<BodyReportIDCProps> = ({ report }) => {
    return (
        <>
            <IRDAccident report={report} />
            <TotalIRD />
            <IRDBeforeWork report={report} />
            <DosimetricRegistration report={report} />
            <IRDBusinessTrips report={report} />
            <IRDMainPlaceWork report={report} />
        </>
    )
}

export default BodyReportIDC
