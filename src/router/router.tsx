import { Navigate, createBrowserRouter } from 'react-router-dom'

import {
    AUTH_ROUTE,
    INDIVIDUAL_DOSE_CARD_REPORT_ROUTE,
    HOME_ROUTE,
    REPORTS_ROUTE,
    REPORT_IDC_ROUTE,
    INDIVIDUAL_DOSES_REPORT_ROUTE,
    COLLECTIVE_DOSES_REPORT_ROUTE,
    REPORT_CD_ROUTE,
    REPORT_ID_ROUTE,
    USERS_GUIDE_ROUTE,
} from '@/constants'
import AuthPage from '@/pages/auth'
import Layout from '@/components/Layout'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import AuthRoute from '@/components/AuthRoute'
import IndividualDoseCardReportPage from '@/pages/reports/individual-dose-card'
import EmptyReportPage from '@/pages/reports/empty'
import ReportsLayout from '@/components/ReportsLayout'
import ReportIDC from '@/pages/reports/individual-dose-card/Report'
import IndividualDosesPage from '@/pages/reports/individual-doses'
import CollectiveDosesPage from '@/pages/reports/collective-doses'
import ReportCD from '@/pages/reports/collective-doses/Report'
import ReportID from '@/pages/reports/individual-doses/Report'
import GuidePage from '@/pages/guide'

const router = createBrowserRouter([
    {
        path: HOME_ROUTE,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to={REPORTS_ROUTE} />,
            },
            {
                path: AUTH_ROUTE,
                element: (
                    <AuthRoute>
                        <AuthPage />
                    </AuthRoute>
                ),
            },
            {
                path: USERS_GUIDE_ROUTE,
                element: (
                    <ProtectedRoute>
                        <GuidePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: REPORTS_ROUTE,
                element: (
                    <ProtectedRoute>
                        <ReportsLayout />
                    </ProtectedRoute>
                ),
                children: [
                    {
                        index: true,
                        element: <EmptyReportPage />,
                    },
                    {
                        path: INDIVIDUAL_DOSE_CARD_REPORT_ROUTE,
                        element: <IndividualDoseCardReportPage />,
                    },
                    {
                        path: INDIVIDUAL_DOSES_REPORT_ROUTE,
                        element: <IndividualDosesPage />,
                    },
                    {
                        path: COLLECTIVE_DOSES_REPORT_ROUTE,
                        element: <CollectiveDosesPage />,
                    },
                ],
            },
        ],
    },
    {
        path: REPORT_IDC_ROUTE,
        element: <ReportIDC />,
    },
    {
        path: REPORT_CD_ROUTE,
        element: <ReportCD />,
    },
    {
        path: REPORT_ID_ROUTE,
        element: <ReportID />,
    },
])

export default router
