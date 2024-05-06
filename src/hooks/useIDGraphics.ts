import { create } from 'zustand'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage } from '@/utils/notifications'
import { IParametersID } from '@/types/common'
import useCompanyStructure from '@/hooks/useCompanyStructure'

interface IGraphicID {
    bar: {
        labels: string[]
        datasets: {
            label: string
            data: number[]
            borderColor: string[]
            backgroundColor: string[]
            barThickness: number
        }[]
    }
    doughnut: {
        labels: string[]
        datasets: {
            label: string
            data: number[]
            backgroundColor: string[]
            borderColor: string[]
            borderWidth: number
        }[]
    }
}

interface IDGraphicStore {
    isLoading: boolean
    graphics: IGraphicID
    getGraphics: (parameters: IParametersID) => void
}

const useIDGraphic = create<IDGraphicStore>((set) => ({
    isLoading: false,
    graphics: {} as IGraphicID,
    getGraphics: async (parameters) => {
        try {
            set({ isLoading: true })
            const idStruct = useCompanyStructure
                .getState()
                .companyStructures?.find(
                    (p) => p.name === parameters.struct
                )?.id_uuid

            const { data } = await ResourceClient.post<IGraphicID>(
                '/reports/id-graphics',
                { ...parameters, struct: idStruct }
            )
            set({ graphics: data })
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
}))

export default useIDGraphic
