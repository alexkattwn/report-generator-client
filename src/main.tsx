import React from 'react'
import ReactDOM from 'react-dom/client'

import { HelmetProvider } from 'react-helmet-async'

import TooltipProvider from '@/providers/TooltipProvider'
import ToastProvider from '@/providers/ToastProvider'
import AuthProvider from '@/providers/AuthProvider'
import App from '@/App.tsx'

import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <TooltipProvider />
            <ToastProvider />
            <AuthProvider>
                <App />
            </AuthProvider>
        </HelmetProvider>
    </React.StrictMode>
)
