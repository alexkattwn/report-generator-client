import { create } from 'zustand'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage } from '@/utils/notifications'
import { ICD } from '@/types/reports'
import { IParametersCD } from '@/types/common'
import useCompanyStructure from '@/hooks/useCompanyStructure'

interface ReportCDStore {
    isLoading: boolean
    report: ICD
    getReport: (parameters: IParametersCD) => Promise<void>
}

const useReportCD = create<ReportCDStore>((set) => ({
    isLoading: false,
    report: {} as ICD,
    getReport: async (parameters) => {
        try {
            set({ isLoading: true })

            const idStruct = useCompanyStructure
                .getState()
                .companyStructures?.find(
                    (p) => p.name === parameters.struct
                )?.id_uuid

            const { data } = await ResourceClient.post<ICD>(
                '/reports/collective-doses',
                { ...parameters, id_struct: idStruct }
            )

            set({ report: data })
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
}))

export default useReportCD
