import { Tooltip } from 'react-tooltip'

import { useMode } from '@/hooks/useMode'

import 'react-tooltip/dist/react-tooltip.css'

const TooltipProvider: React.FC = () => {
    const { mode } = useMode()

    return (
        <Tooltip
            id='tooltip'
            style={{
                zIndex: 12,
                backgroundColor:
                    mode === 'dark' ? 'var(--color-gray)' : 'var(--light-blue)',
            }}
        />
    )
}

export default TooltipProvider
