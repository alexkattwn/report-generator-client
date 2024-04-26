import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import cls from '@/pages/reports/individual-dose-card/Graphics/BarChart/index.module.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

ChartJS.defaults.font.size = 14

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Облучение за последние 5 лет, мЗв',
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
        labels: number[]
        datasets: {
            label: string
            data: number[]
            backgroundColor: string
        }[]
    }
}

interface IBarChartIDCProps {
    graphic: IGraphic
}

const BarChartIDC: React.FC<IBarChartIDCProps> = ({ graphic }) => {
    return (
        <div className={cls.bar}>
            <Bar options={options} data={graphic.info} />
        </div>
    )
}

export default BarChartIDC
