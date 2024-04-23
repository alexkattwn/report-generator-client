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
                    <PieChartIDC graphic={graphics.pie} />
                </motion.div>
            ) : (
                <ul className={cls.skeleton}>
                    <li className={cls.skeleton__main}>
                        <div className={cls.skeleton__main__hor}>
                            <div
                                className={`${cls.skeleton__main__hor__right} ${
                                    mode === 'dark' ? `${cls.dark_mode}` : ''
                                }`}
                            >
                                <div className={cls.skeleton__item__light} />
                            </div>
                            <div
                                className={`${cls.skeleton__main__hor__left} ${
                                    mode === 'dark' ? `${cls.dark_mode}` : ''
                                }`}
                            >
                                <div className={cls.skeleton__item__light} />
                            </div>
                        </div>
                        <div
                            className={`${cls.skeleton__main__ver} ${
                                mode === 'dark' ? `${cls.dark_mode}` : ''
                            }`}
                        >
                            <div className={cls.skeleton__item__light} />
                        </div>
                    </li>

                    <li className={cls.skeleton__main}>
                        <div className={cls.skeleton__main__hor}>
                            <div
                                className={`${cls.skeleton__main__hor__right} ${
                                    mode === 'dark' ? `${cls.dark_mode}` : ''
                                }`}
                            >
                                <div className={cls.skeleton__item__light} />
                            </div>
                            <div
                                className={`${cls.skeleton__main__hor__left} ${
                                    mode === 'dark' ? `${cls.dark_mode}` : ''
                                }`}
                            >
                                <div className={cls.skeleton__item__light} />
                            </div>
                        </div>
                        <div
                            className={`${cls.skeleton__main__ver} ${
                                mode === 'dark' ? `${cls.dark_mode}` : ''
                            }`}
                        >
                            <div className={cls.skeleton__item__light} />
                        </div>
                    </li>
                    <li
                        className={`${cls.skeleton__circle} ${
                            mode === 'dark' ? `${cls.dark_mode}` : ''
                        }`}
                    >
                        <div
                            className={`${cls.skeleton__circle__block} ${
                                mode === 'dark' ? `${cls.dark_mode}` : ''
                            }`}
                        >
                            <div className={cls.skeleton__item__light} />
                        </div>
                        <div
                            className={`${cls.skeleton__circle__obj} ${
                                mode === 'dark' ? `${cls.dark_mode}` : ''
                            }`}
                        >
                            <div className={cls.skeleton__item__light} />
                        </div>
                    </li>
                </ul>
            )}
        </>
    )
}

export default GraphicsIDC
