import React from 'react'
import ReactDOM from 'react-dom/client'

import TooltipProvider from '@/providers/TooltipProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import AuthProvider from '@/providers/AuthProvider'
import App from '@/App.tsx'

import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TooltipProvider />
        <ToasterProvider />
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
)
