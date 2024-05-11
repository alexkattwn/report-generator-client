import { create } from 'zustand'

import { AuthClient, ResourceClient } from '@/api/axiosClient'
import { ICurrentUser, SignInResponse } from '@/types/auth'
import { showErrorMessage } from '@/utils/notifications'
import inMemoryJWT from '@/services/inMemoryJWT'
import { errorException } from '@/utils/errors'

interface AuthStore {
    isAuthorized: boolean
    setIsAuthorized: (state: boolean) => void
    currentUser: ICurrentUser | undefined
    signIn: (login: string, identifier: string) => void
    checkToken: () => void
}

const useAuth = create<AuthStore>((set) => ({
    isAuthorized: false,
    currentUser: undefined,
    setIsAuthorized: (state) => set({ isAuthorized: state }),
    signIn: async (login, identifier) => {
        try {
            const response = await AuthClient.post<SignInResponse>('/sign-in', {
                login,
                identifier,
            })
            const { token, showname, id } = response.data
            inMemoryJWT.setToken(token)
            set({ isAuthorized: true, currentUser: { showname, id } })
        } catch (error) {
            showErrorMessage(error)
        }
    },
    checkToken: async () => {
        try {
            const response = await ResourceClient.get<SignInResponse>(
                '/auth/check-token'
            )
            const { token, showname, id } = response.data
            inMemoryJWT.setToken(token)
            set({ isAuthorized: true, currentUser: { showname, id } })
        } catch (error) {
            errorException(error)
        }
    },
}))

export default useAuth
