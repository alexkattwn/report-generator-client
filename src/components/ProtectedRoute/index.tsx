import { Navigate, useLocation } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'
import { AUTH_ROUTE } from '@/constants'

interface ProtectedRouteProps {
    children: JSX.Element
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthorized } = useAuth()
    const location = useLocation()

    if (!isAuthorized) {
        return <Navigate to={AUTH_ROUTE} state={{ from: location }} />
    }

    return children
}
