import { create } from 'zustand'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage } from '@/utils/notifications'
import { IIDC } from '@/types/reports'

interface ReportIDCStore {
    isLoading: boolean
    report: IIDC | undefined
    getReport: (idPersonal: string) => Promise<void>
}

const useReportIDC = create<ReportIDCStore>((set) => ({
    isLoading: false,
    report: undefined,
    getReport: async (idPersonal) => {
        try {
            set({ isLoading: true })
            const { data } = await ResourceClient.get<IIDC>(
                `/reports/individual-dose-card?id_personal=${idPersonal}`
            )
            set({ report: data })
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
}))

export default useReportIDC
