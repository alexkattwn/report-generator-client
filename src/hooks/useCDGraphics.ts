import { create } from 'zustand'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage } from '@/utils/notifications'
import { IParametersCD } from '@/types/common'
import useCompanyStructure from '@/hooks/useCompanyStructure'

interface IGraphicCD {
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

interface CDGraphicStore {
    isLoading: boolean
    graphics: IGraphicCD
    getGraphics: (parameters: IParametersCD) => void
}

const useCDGraphic = create<CDGraphicStore>((set) => ({
    isLoading: false,
    graphics: {} as IGraphicCD,
    getGraphics: async (parameters) => {
        try {
            set({ isLoading: true })
            const idStruct = useCompanyStructure
                .getState()
                .companyStructures?.find(
                    (p) => p.name === parameters.struct
                )?.id_uuid

            const { data } = await ResourceClient.post<IGraphicCD>(
                '/reports/cd-graphics',
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

export default useCDGraphic
