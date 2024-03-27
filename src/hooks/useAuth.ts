import { create } from 'zustand'

import { AuthClient, ResourceClient } from '@/api/axiosClient'
import { SignInResponse } from '@/types/auth'
import { showErrorMesssage, showSuccessMessage } from '@/utils/notifications'
import inMemoryJWT from '@/services/inMemoryJWT'
import { errorException } from '@/utils/errors'

interface AuthStore {
    isAuthorized: boolean
    setIsAuthorized: (state: boolean) => void
    signIn: (login: string, identifier: string) => void
    checkToken: () => void
}

const useAuth = create<AuthStore>((set) => ({
    isAuthorized: false,
    setIsAuthorized: (state) => set({ isAuthorized: state }),
    signIn: async (login, identifier) => {
        try {
            const response = await AuthClient.post<SignInResponse>('/sign-in', {
                login,
                identifier,
            })
            const { token } = response.data
            inMemoryJWT.setToken(token)
            set({ isAuthorized: true })
            showSuccessMessage('Вход выполнен')
        } catch (error) {
            showErrorMesssage(error)
        }
    },
    checkToken: async () => {
        try {
            const response = await ResourceClient.get<SignInResponse>(
                '/auth/check-token'
            )
            const { token } = response.data
            inMemoryJWT.setToken(token)
            set({ isAuthorized: true })
        } catch (error) {
            errorException(error)
        }
    },
}))

export default useAuth
