import axios from 'axios'

import config from '@/config'
import { getTokenFromLocalStorage } from '@/helpers/localStorage.helper'

export const AuthClient = axios.create({
    baseURL: `${config.API_URL}/auth`,
    withCredentials: true,
})

export const ResourceClient = axios.create({
    baseURL: `${config.API_URL}/`,
})

ResourceClient.interceptors.request.use(
    (config) => {
        const token: string | null = getTokenFromLocalStorage()

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
