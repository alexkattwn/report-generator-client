import React from 'react'
import ReactDOM from 'react-dom/client'

import TooltipProvider from '@/providers/TooltipProvider'
import ToastProvider from '@/providers/ToastProvider'
import AuthProvider from '@/providers/AuthProvider'
import App from '@/App.tsx'

import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TooltipProvider />
        <ToastProvider />
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
)
