import { create } from 'zustand'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage } from '@/utils/notifications'
import { IID } from '@/types/reports'
import { IParametersID } from '@/types/common'
import useCompanyStructure from '@/hooks/useCompanyStructure'

interface ReportIDStore {
    isLoading: boolean
    report: IID | undefined
    getReport: (parameters: IParametersID) => Promise<void>
}

const useReportID = create<ReportIDStore>((set) => ({
    isLoading: false,
    report: undefined,
    getReport: async (parameters) => {
        try {
            set({ isLoading: true })

            const idStruct = useCompanyStructure
                .getState()
                .companyStructures?.find(
                    (p) => p.name === parameters.struct
                )?.id_uuid

            const { data } = await ResourceClient.post<IID>(
                '/reports/individual-doses',
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

export default useReportID
