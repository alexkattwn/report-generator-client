import { useEffect } from 'react'
import { create } from 'zustand'

interface ModeStore {
    mode: string
    setMode: (mode: string) => void
}

export const useMode = create<ModeStore>((set) => ({
    mode: JSON.parse(localStorage.getItem('mode') as string) || 'light',
    setMode: (mode) => set({ mode }),
}))

export const useTheme = () => {
    const { mode, setMode } = useMode()

    const toggleTheme = () => {
        if (mode === 'dark') {
            localStorage.setItem('mode', JSON.stringify('light'))
            setMode('light')
        } else {
            localStorage.setItem('mode', JSON.stringify('dark'))
            setMode('dark')
        }
    }

    useEffect(() => {
        const localTheme = JSON.parse(localStorage.getItem('mode') as string)

        if (localTheme) {
            setMode(localTheme)
        }
    }, [])

    return { toggleTheme }
}
