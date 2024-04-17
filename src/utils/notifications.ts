import { toast } from 'react-toastify'

export const showErrorMessage = (error: any) =>
    toast.error(error.response.data.message)

export const showSimpleErrorMessage = (error: string) => toast.error(error)

export const showSuccessMessage = (message: string) => toast.success(message)
