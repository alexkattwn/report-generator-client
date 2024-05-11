import config from '@/config'
import {
    removeTokenFromLocalStorage,
    setTokenToLocalStorage,
} from '@/helpers/localStorage.helper'

const inMemoryJWTService = () => {
    let inMemoryJWT: string | null = localStorage.getItem('token')

    const getToken = () => inMemoryJWT

    const setToken = (token: string) => {
        inMemoryJWT = token
        setTokenToLocalStorage(token)
    }

    const deleteToken = () => {
        inMemoryJWT = null
        removeTokenFromLocalStorage()
        localStorage.setItem(config.LOGOUT_STORAGE_KEY, Date.now() as any)
    }

    return { getToken, setToken, deleteToken }
}

export default inMemoryJWTService()
