import { useEffect, useState } from 'react'
import { PacmanLoader } from 'react-spinners'

import useAuth from '@/hooks/useAuth'
import config from '@/config'
import inMemoryJWT from '@/services/inMemoryJWT'

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAppReady, setIsAppReady] = useState<boolean>(false)
    const { setIsAuthorized, checkToken } = useAuth()

    useEffect(() => {
        ;(async () => {
            await checkToken()
            setIsAppReady(true)
        })()
    }, [])

    useEffect(() => {
        const handlePersistedLogOut = (event: StorageEvent) => {
            if (event.key === config.LOGOUT_STORAGE_KEY) {
                inMemoryJWT.deleteToken()
                setIsAuthorized(false)
            }
        }

        window.addEventListener('storage', handlePersistedLogOut)
    }, [])

    return (
        <>
            {isAppReady ? (
                children
            ) : (
                <div className='loader'>
                    <PacmanLoader color='var(--light-blue)' size={50} />
                </div>
            )}
        </>
    )
}

export default AuthProvider
