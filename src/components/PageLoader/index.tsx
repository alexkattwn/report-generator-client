import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'

const PageLoader: React.FC = () => {
    const [progress, setProgress] = useState<boolean>(false)
    const [prevLoc, setPrevLoc] = useState<string>('')

    const location = useLocation()

    useEffect(() => {
        setPrevLoc(location.pathname)
        setProgress(true)
        if (location.pathname === prevLoc) {
            setPrevLoc('')
        }
    }, [location])

    useEffect(() => {
        setProgress(false)
    }, [prevLoc])

    return <>{progress && <TopBarProgress />}</>
}

export default PageLoader
