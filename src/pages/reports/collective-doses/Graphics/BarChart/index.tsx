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

import cls from '@/pages/reports/collective-doses/Graphics/BarChart/index.module.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    elements: {
        bar: {
            borderWidth: 1,
            borderRadius: 4,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Суммарные дозы персонала, входящего в структуру',
        },
        tooltip: {
            callbacks: {
                label: function (context: any) {
                    let label = context.dataset.label || ''
                    if (context.parsed !== null) {
                        label +=
                            ': ' + Number(context.parsed.x).toFixed(5) + ' мЗв'
                    }
                    return label
                },
            },
        },
    },
}

interface IGraphic {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        borderColor: string[]
        backgroundColor: string[]
    }[]
}

interface BarChartCDProps {
    graphic: IGraphic
}

const BarChartCD: React.FC<BarChartCDProps> = ({ graphic }) => {
    const minChartHeight = 200
    const chartHeight = Math.max(graphic.labels.length * 30, minChartHeight)

    return (
        <div className={cls.bar}>
            <Bar
                options={{
                    ...options,
                    aspectRatio: graphic.labels.length > 5 ? 2 : 1,
                }}
                data={graphic}
                height={chartHeight}
            />
        </div>
    )
}

export default BarChartCD
