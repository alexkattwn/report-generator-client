import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { IParametersID } from '@/types/common'
import { useMode } from '@/hooks/useMode'
import useIDGraphic from '@/hooks/useIDGraphics'
import BarChartID from '@/pages/reports/individual-doses/Graphics/BarChart'

import cls from '@/pages/reports/individual-doses/Graphics/index.module.scss'

interface GraphicsIDProps {
    parameters: IParametersID
}

const GraphicsID: React.FC<GraphicsIDProps> = ({ parameters }) => {
    const { mode } = useMode()

    const [isReady, setIsReady] = useState<boolean>(false)

    const { graphics, getGraphics, isLoading } = useIDGraphic()

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
                    <BarChartID graphic={graphics.bar} />
                </motion.div>
            ) : (
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cls.skeleton}
                >
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
                </motion.ul>
            )}
        </>
    )
}

export default GraphicsID
