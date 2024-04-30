import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import cls from '@/pages/reports/individual-dose-card/Graphics/AreaChart/index.module.scss'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Облучение за последний год по месяцам, мЗв',
        },
        tooltip: {
            callbacks: {
                label: function (context: any) {
                    let label = context.dataset.label || ''

                    if (label) {
                        label += ': '
                    }

                    if (context.parsed.y !== null) {
                        label +=
                            context.parsed.y !== 0
                                ? Number(context.parsed.y).toFixed(6) + ' мЗв'
                                : 0
                    }

                    return label
                },
            },
        },
    },
}

interface IGraphic {
    id_uuid: string
    info: {
        labels: string[]
        datasets: {
            fill: boolean
            label: string
            data: number[]
            borderColor: string
            backgroundColor: string
        }[]
    }
}

interface IAreaChartIDCProps {
    graphic: IGraphic
}

const AreaChartIDC: React.FC<IAreaChartIDCProps> = ({ graphic }) => (
    <div className={cls.area}>
        <Line options={options} data={graphic.info} />
    </div>
)

export default AreaChartIDC
