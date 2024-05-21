import { create } from 'zustand'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage } from '@/utils/notifications'
import { IGuide } from '@/types/common'

interface UsersGuideStore {
    isLoading: boolean
    guide: IGuide[]
    getGuide: (idReport: string) => Promise<void>
}

const useUsersGuide = create<UsersGuideStore>((set) => ({
    isLoading: false,
    guide: [],
    getGuide: async (idReport) => {
        try {
            set({ isLoading: true })
            const { data } = await ResourceClient.get<IGuide[]>(
                `/users-guide?report_id=${idReport}`
            )
            set({ guide: data })
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
}))

export default useUsersGuide
