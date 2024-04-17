import { create } from 'zustand'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage } from '@/utils/notifications'
import { IParametersIDC, IPersonal, IPersonalData } from '@/types/common'
import usePosts from '@/hooks/usePosts'
import useCompanyStructure from '@/hooks/useCompanyStructure'
import { removeEmptyFields } from '@/utils/common'

interface PersonalStore {
    isLoading: boolean
    totalPages: number
    personal: IPersonal[]
    getPersonal: (
        parameters: IParametersIDC,
        currentPage: number,
        fio?: string
    ) => void
}

const usePersonal = create<PersonalStore>((set) => ({
    isLoading: false,
    personal: [],
    totalPages: 0,
    getPersonal: async (parameters, currentPage, fio) => {
        try {
            set({ isLoading: true })
            const idPost = usePosts
                .getState()
                .posts?.find((p) => p.name === parameters.post)?.id_uuid

            const idStruct = useCompanyStructure
                .getState()
                .companyStructures?.find(
                    (p) => p.name === parameters.struct
                )?.id_uuid

            const obj = {
                ...parameters,
                struct: idStruct,
                post: idPost,
                page: currentPage,
            }

            const newObj: Record<string, any> = removeEmptyFields(obj)

            const { data } = await ResourceClient.post<IPersonalData>(
                `/personal${fio ? '?fio=' + fio : ''}`,
                { ...newObj }
            )
            set({ personal: data.data, totalPages: data.count })
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
}))

export default usePersonal
