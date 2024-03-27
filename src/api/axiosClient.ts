import axios from 'axios'

import config from '@/config'

export const AuthClient = axios.create({
    baseURL: `${config.API_URL}/auth`,
    withCredentials: true,
})

export const ResourceClient = axios.create({
    baseURL: `${config.API_URL}/`,
})

ResourceClient.interceptors.request.use(
    (config) => {
        const token: string | null = localStorage.getItem('token')

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
