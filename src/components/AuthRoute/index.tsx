import { Navigate, useLocation } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'
import { REPORTS_ROUTE } from '@/constants'

interface AuthRouteProps {
    children: JSX.Element
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
    const { isAuthorized } = useAuth()
    const location = useLocation()

    if (isAuthorized) {
        return <Navigate to={REPORTS_ROUTE} state={{ from: location }} />
    }

    return children
}

export default AuthRoute
