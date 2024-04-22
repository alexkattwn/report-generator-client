import { create } from 'zustand'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage } from '@/utils/notifications'

interface IGraphicIDC {
    area: {
        id_uuid: string
        info: {
            labels: string[]
            datasets: {
                fill: boolean
                label: string
                data: number[]
                borderColor: string
                backgroundColor: string
            }[]
        }
    }
    bar: {
        id_uuid: string
        info: {
            labels: number[]
            datasets: {
                label: string
                data: number[]
                backgroundColor: string
            }[]
        }
    }
}

interface IDCGraphicStore {
    isLoading: boolean
    graphics: IGraphicIDC
    getGraphics: (idPersonal: string) => void
}

const useIDCGraphic = create<IDCGraphicStore>((set) => ({
    isLoading: false,
    graphics: {} as IGraphicIDC,
    getGraphics: async (idPersonal) => {
        try {
            set({ isLoading: true })
            let url = '/reports/idc-graphics'
            if (idPersonal) {
                url = `${url}?id_personal=${idPersonal}`
            }
            const { data } = await ResourceClient.get<IGraphicIDC>(url)
            console.log(data)
            set({ graphics: data })
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
}))

export default useIDCGraphic
