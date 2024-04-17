import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const ToastProvider: React.FC = () => {
    return <ToastContainer position='bottom-left' autoClose={2000} />
}

export default ToastProvider
