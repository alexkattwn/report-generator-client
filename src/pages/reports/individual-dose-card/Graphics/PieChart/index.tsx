import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import cls from '@/pages/reports/individual-dose-card/Graphics/PieChart/index.module.scss'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Облучение за последний год по типам, мЗв',
        },
        tooltip: {
            callbacks: {
                label: function (context: any) {
                    let label = context.dataset.label || ''

                    if (context.parsed !== null) {
                        label +=
                            ': ' + Number(context.parsed).toFixed(6) + ' мЗв'
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
            label: string
            data: number[]
            backgroundColor: string[]
            borderColor: string[]
            borderWidth: number
        }[]
    }
}

interface PieChartIDCProps {
    graphic: IGraphic
}

const PieChartIDC: React.FC<PieChartIDCProps> = ({ graphic }) => {
    return (
        <div className={cls.pie}>
            <Pie options={options} data={graphic.info} />
        </div>
    )
}

export default PieChartIDC
