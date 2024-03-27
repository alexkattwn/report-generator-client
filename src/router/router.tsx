import { Navigate, createBrowserRouter } from 'react-router-dom'

import {
    AUTH_ROUTE,
    INDIVIDUAL_DOSE_CARD_REPORT_ROUTE,
    HOME_ROUTE,
    REPORTS_ROUTE,
} from '@/constants'
import AuthPage from '@/pages/auth'
import Layout from '@/components/Layout'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import AuthRoute from '@/components/AuthRoute'
import IndividualDoseCardReportPage from '@/pages/reports/individual-dose-card'
import EmptyReportPage from '@/pages/reports/empty'
import ReportsLayout from '@/components/ReportsLayout'
import TestReport from '@/pages/reports/test-report'

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
                ],
            },
        ],
    },
    {
        path: '/test',
        element: <TestReport />,
    },
])

export default router
