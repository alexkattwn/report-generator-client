import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from '@components/Header'
import PageLoader from '@components/PageLoader'

const Layout: React.FC = () => {
    return (
        <>
            <PageLoader />

            <Header />

            <AnimatePresence>
                <Outlet />
            </AnimatePresence>

            <div className='overlay' />
        </>
    )
}

export default Layout
