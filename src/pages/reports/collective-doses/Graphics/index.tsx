import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { useMode } from '@/hooks/useMode'
import { IParametersCD } from '@/types/common'
import DoughnutChartCD from '@/pages/reports/collective-doses/Graphics/DoughnutChart'
//import BarChartCD from '@/pages/reports/collective-doses/Graphics/BarChart'
import useCDGraphic from '@/hooks/useCDGraphics'

import cls from '@/pages/reports/collective-doses/Graphics/index.module.scss'

interface GraphicsCDProps {
    parameters: IParametersCD
}

const GraphicsCD: React.FC<GraphicsCDProps> = ({ parameters }) => {
    const { mode } = useMode()

    const [isReady, setIsReady] = useState<boolean>(false)

    const { graphics, getGraphics, isLoading } = useCDGraphic()

    useEffect(() => {
        ;(async () => {
            getGraphics(parameters)
            setIsReady(true)
        })()
    }, [])

    return (
        <>
            {isReady && !isLoading ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cls.graphics}
                >
                    {/* <BarChartCD graphic={graphics.bar} /> */}
                    <DoughnutChartCD graphic={graphics.doughnut} />
                </motion.div>
            ) : (
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cls.skeleton}
                >
                    {/* <li className={cls.skeleton__main}>
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
                    </li> */}
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
                </motion.ul>
            )}
        </>
    )
}

export default GraphicsCD
