import { create } from 'zustand'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage, showSuccessMessage } from '@/utils/notifications'
import {
    IFilter,
    IParametersCD,
    IParametersID,
    IParametersIDC,
} from '@/types/common'
import { isIParametersCD, isIParametersID } from '@/utils/common'

interface FiltersStore {
    isLoading: boolean
    filters: IFilter[]
    getFilters: (nameReport: string, value?: string) => Promise<void>
    createFilter: (
        nameReport: string,
        name: string,
        parameters: IParametersIDC | IParametersCD | IParametersID
    ) => Promise<void>
    removeFilter: (nameReport: string, idFilter: string) => Promise<void>
}

const useFilters = create<FiltersStore>((set) => ({
    isLoading: false,
    filters: [],
    getFilters: async (nameReport, value) => {
        try {
            set({ isLoading: true })
            let url = `/filters?name_report=${nameReport}`
            if (value) {
                url = `${url}&value=${value}`
            }
            const { data } = await ResourceClient.get<IFilter[]>(url)
            set({ filters: data })
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
    createFilter: async (nameReport, name, parameters) => {
        try {
            set({ isLoading: true })
            if (isIParametersCD(parameters) || isIParametersID(parameters)) {
                delete parameters.go
            }
            const { data } = await ResourceClient.post<IFilter[]>('/filters', {
                name_report: nameReport,
                name,
                parameters: JSON.stringify(parameters),
            })
            set({ filters: data })
            showSuccessMessage('Фильтр успешно сохранен')
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
    removeFilter: async (nameReport: string, idFilter: string) => {
        try {
            set({ isLoading: true })
            const { data } = await ResourceClient.delete<IFilter[]>(
                `/filters?name_report=${nameReport}&id_filter=${idFilter}`
            )
            set({ filters: data })
            showSuccessMessage('Фильтр успешно удален')
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
}))

export default useFilters
