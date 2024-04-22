import { Tooltip } from 'react-tooltip'

import 'react-tooltip/dist/react-tooltip.css'

const TooltipProvider: React.FC = () => {
    return <Tooltip id='tooltip' style={{ zIndex: 10 }} />
}

export default TooltipProvider
