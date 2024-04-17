import { create } from 'zustand'

import { ResourceClient } from '@/api/axiosClient'
import { showErrorMessage } from '@/utils/notifications'
import { IPost } from '@/types/common'

interface PostsStore {
    isLoading: boolean
    posts: IPost[]
    getPosts: (value?: string) => void
}

const usePosts = create<PostsStore>((set) => ({
    isLoading: false,
    posts: [],
    getPosts: async (value) => {
        try {
            set({ isLoading: true })
            let url = '/posts'
            if (value) {
                url = `${url}?value=${value}`
            }
            const { data } = await ResourceClient.get<IPost[]>(url)
            set({ posts: data })
        } catch (error) {
            showErrorMessage(error)
        } finally {
            set({ isLoading: false })
        }
    },
}))

export default usePosts
