import {
    getTokenFromLocalStorage,
    removeTokenFromLocalStorage,
    setTokenToLocalStorage,
} from '@/helpers/localStorage.helper'

const inMemoryJWTService = () => {
    let inMemoryJWT: string | null = getTokenFromLocalStorage()

    const getToken = () => inMemoryJWT

    const setToken = (token: string) => {
        inMemoryJWT = token
        setTokenToLocalStorage(token)
    }

    const deleteToken = () => {
        inMemoryJWT = null
        removeTokenFromLocalStorage()
        setTokenToLocalStorage(Date.now() as any)
    }

    return { getToken, setToken, deleteToken }
}

export default inMemoryJWTService()
