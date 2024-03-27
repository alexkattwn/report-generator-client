import config from '@/config'

const inMemoryJWTService = () => {
    let inMemoryJWT: string | null = localStorage.getItem('token')

    const getToken = () => inMemoryJWT

    const setToken = (token: string) => {
        inMemoryJWT = token
        localStorage.setItem(config.ACCESS_TOKEN_KEY, token)
    }

    const deleteToken = () => {
        inMemoryJWT = null
        localStorage.removeItem('token')
        localStorage.setItem(config.LOGOUT_STORAGE_KEY, Date.now() as any)
    }

    return { getToken, setToken, deleteToken }
}

export default inMemoryJWTService()
