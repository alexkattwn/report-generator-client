import { toast } from 'react-toastify'

export const showErrorMesssage = (error: any) =>
    toast.error(error.response.data.message)

export const showSuccessMessage = (message: string) => toast.success(message)
