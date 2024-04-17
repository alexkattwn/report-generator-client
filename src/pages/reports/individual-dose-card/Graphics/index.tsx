import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { RingLoader } from 'react-spinners'

import PieChartIDC from '@/pages/reports/individual-dose-card/Graphics/PieChart'
import AreaChartIDC from '@/pages/reports/individual-dose-card/Graphics/AreaChart'
import BarChartIDC from '@/pages/reports/individual-dose-card/Graphics/BarChart'
import { IParametersIDC } from '@/types/common'
import useReportIDC from '@/hooks/useReportIDC'

import cls from '@/pages/reports/individual-dose-card/Graphics/index.module.scss'

interface GraphicsIDCProps {
    parameters: IParametersIDC
}

const GraphicsIDC: React.FC<GraphicsIDCProps> = ({ parameters }) => {
    const { getReport, isLoading } = useReportIDC()

    useEffect(() => {
        if (parameters.id_personal) {
            getReport(parameters.id_personal)
        }
    }, [parameters.id_personal])

    return (
        <>
            {!isLoading ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cls.main}
                >
                    <PieChartIDC />
                    <AreaChartIDC />
                    <BarChartIDC />
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='loader'
                >
                    <RingLoader color='#36d7b7' />
                </motion.div>
            )}
        </>
    )
}

export default GraphicsIDC
