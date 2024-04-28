import { create } from 'zustand'

//import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage } from '@/utils/notifications'

interface CDGraphicStore {
    isLoading: boolean
    graphics: string
    getGraphics: () => void
}

const useCDGraphic = create<CDGraphicStore>((set) => ({
    isLoading: false,
    graphics: 'kek',
    getGraphics: async () => {
        try {
            set({ isLoading: true })
            // let url = '/reports/idc-graphics'
            // if (idPersonal) {
            //     url = `${url}?id_personal=${idPersonal}`
            // }
            // const { data } = await ResourceClient.get<IGraphicIDC>(url)
            set({ graphics: 'test' })
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
}))

export default useCDGraphic
