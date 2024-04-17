import { create } from 'zustand'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage } from '@/utils/notifications'
import { ICompanyStructure } from '@/types/common'

interface CompanyStructureStore {
    isLoading: boolean
    companyStructures: ICompanyStructure[]
    getCompanyStructures: (value?: string) => void
}

const useCompanyStructure = create<CompanyStructureStore>((set) => ({
    isLoading: false,
    companyStructures: [],
    getCompanyStructures: async (value) => {
        try {
            set({ isLoading: true })
            let url = '/company-structure'
            if (value) {
                url = `${url}?value=${value}`
            }
            const { data } = await ResourceClient.get<ICompanyStructure[]>(url)
            set({ companyStructures: data })
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
}))

export default useCompanyStructure
