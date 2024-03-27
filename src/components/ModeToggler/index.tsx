import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useEffect } from 'react'

import { useMode, useTheme } from '@/hooks/useMode'

const ModeToggler: React.FC = () => {
    const { toggleTheme } = useTheme()
    const { mode } = useMode()

    const handleToggleMode = () => {
        toggleTheme()
        document.body.classList.toggle('dark_mode')
    }

    useEffect(() => {
        document.body.classList.add(mode === 'dark' ? 'dark_mode' : 'body')
    }, [mode])

    return (
        <DarkModeSwitch
            checked={mode === 'dark'}
            onChange={handleToggleMode}
            size={30}
        />
    )
}

export default ModeToggler
