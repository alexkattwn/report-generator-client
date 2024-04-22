import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import PieChartIDC from '@/pages/reports/individual-dose-card/Graphics/PieChart'
import AreaChartIDC from '@/pages/reports/individual-dose-card/Graphics/AreaChart'
import BarChartIDC from '@/pages/reports/individual-dose-card/Graphics/BarChart'
import { IParametersIDC } from '@/types/common'
import useReportIDC from '@/hooks/useReportIDC'
import { useMode } from '@/hooks/useMode'
import useIDCGraphic from '@/hooks/useIDCGraphics'

import cls from '@/pages/reports/individual-dose-card/Graphics/index.module.scss'

interface GraphicsIDCProps {
    parameters: IParametersIDC
}

const GraphicsIDC: React.FC<GraphicsIDCProps> = ({ parameters }) => {
    const { getReport, isLoading } = useReportIDC()
    const {
        getGraphics,
        graphics,
        isLoading: isLoadingGraphics,
    } = useIDCGraphic()

    const { mode } = useMode()

    const [isReady, setIsReady] = useState<boolean>(false)

    useEffect(() => {
        ;(async () => {
            if (parameters.id_personal) {
                await getReport(parameters.id_personal)
                await getGraphics(parameters.id_personal)
                setIsReady(true)
            }
        })()
    }, [parameters.id_personal])

    return (
        <>
            {!isLoading && !isLoadingGraphics && isReady ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cls.main}
                >
                    <AreaChartIDC graphic={graphics.area} />
                    <BarChartIDC graphic={graphics.bar} />
                    <PieChartIDC />
                </motion.div>
            ) : (
                <ul className={cls.skeleton}>
                    <li
                        className={`${cls.skeleton__area} ${
                            mode === 'dark' ? `${cls.dark_mode}` : ''
                        }`}
                    >
                        <div className={cls.skeleton__item__light} />
                    </li>
                    <li
                        className={`${cls.skeleton__bar} ${
                            mode === 'dark' ? `${cls.dark_mode}` : ''
                        }`}
                    >
                        <div className={cls.skeleton__item__light} />
                    </li>
                    <li
                        className={`${cls.skeleton__pie} ${
                            mode === 'dark' ? `${cls.dark_mode}` : ''
                        }`}
                    >
                        <div className={cls.skeleton__item__light} />
                    </li>
                </ul>
            )}
        </>
    )
}

export default GraphicsIDC
