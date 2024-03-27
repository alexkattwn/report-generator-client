import { Outlet } from 'react-router-dom'

import Header from '@components/Header'
import PageLoader from '@components/PageLoader'

const Layout: React.FC = () => {
    return (
        <>
            <PageLoader />

            <Header />

            <Outlet />
        </>
    )
}

export default Layout
