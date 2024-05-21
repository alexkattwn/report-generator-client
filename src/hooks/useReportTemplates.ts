import { create } from 'zustand'
import { AxiosResponse } from 'axios'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage, showSuccessMessage } from '@/utils/notifications'
import { ITemplate } from '@/types/common'

interface ReportTemplateStore {
    isLoading: boolean
    template: ITemplate
    getTemplate: (reportName: string) => Promise<void>
    createTemplate: (reportName: string, template: File) => Promise<void>
    downloadTemplate: (id: string) => Promise<void>
}

const useReportTemplate = create<ReportTemplateStore>((set) => ({
    isLoading: false,
    template: {} as ITemplate,
    getTemplate: async (reportName) => {
        try {
            set({ isLoading: true })
            const { data } = await ResourceClient.get<ITemplate>(
                `/report-templates?report_name=${reportName}`
            )
            set({ template: data })
        } catch (error) {
            console.log(error)
        } finally {
            set({ isLoading: false })
        }
    },
    createTemplate: async (reportName, template) => {
        try {
            set({ isLoading: true })

            const formData = new FormData()
            formData.append('template', template)
            formData.append('report_name', reportName)

            const { data } = await ResourceClient.post<ITemplate>(
                '/report-templates',
                formData
            )
            set({ template: data })
            showSuccessMessage('Шаблон сохранен!')
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
    downloadTemplate: async (id) => {
        try {
            const { data }: AxiosResponse<Blob> = await ResourceClient.get(
                `/report-templates/download/${id}`,
                {
                    responseType: 'blob',
                }
            )

            const { data: info } = await ResourceClient.get<ITemplate>(
                `/report-templates/${id}`
            )

            const url = window.URL.createObjectURL(new Blob([data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', `${info.title}.${info.type}`)
            document.body.appendChild(link)
            link.click()
        } catch (error) {
            showErrorMessage(error)
        }
    },
}))

export default useReportTemplate
