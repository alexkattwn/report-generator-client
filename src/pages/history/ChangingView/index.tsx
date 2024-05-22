import { VscListUnordered } from 'react-icons/vsc'
import { VscTable } from 'react-icons/vsc'

import { useMode } from '@/hooks/useMode'
import useViewHistory from '@/hooks/useViewHistory'

import cls from '@/pages/history/ChangingView/index.module.scss'

const ChangingView: React.FC = () => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const { setView } = useViewHistory()

    return (
        <div className={cls.view}>
            <button
                onClick={() => setView('plate')}
                className={`${cls.view__plate} ${darkModeClass}`}
            >
                <VscTable size={40} />
            </button>
            <button
                onClick={() => setView('list')}
                className={`${cls.view__list} ${darkModeClass}`}
            >
                <VscListUnordered size={42} />
            </button>
        </div>
    )
}

export default ChangingView
