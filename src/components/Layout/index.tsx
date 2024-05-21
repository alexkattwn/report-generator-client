import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from '@components/Header'
import PageLoader from '@components/PageLoader'
import InteractiveGuide from '@components/InteractiveGuide'

const Layout: React.FC = () => (
    <>
        <InteractiveGuide />

        <PageLoader />

        <Header />

        <AnimatePresence>
            <Outlet />
        </AnimatePresence>

        <div className='overlay' />
    </>
)

export default Layout
