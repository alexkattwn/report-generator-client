import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import cls from '@/pages/reports/collective-doses/Graphics/DoughnutChart/index.module.scss'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Коллективные дозы по структурам',
        },
        tooltip: {
            callbacks: {
                label: function (context: any) {
                    let label = context.dataset.label || ''
                    if (context.parsed !== null) {
                        label +=
                            ': ' + Number(context.parsed).toFixed(5) + ' мЗв'
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
        backgroundColor: string[]
        borderColor: string[]
        borderWidth: number
    }[]
}

interface DoughnutChartCDProps {
    graphic: IGraphic
}

const DoughnutChartCD: React.FC<DoughnutChartCDProps> = ({ graphic }) => {
    if (graphic.datasets[0].data.length === 0) {
        return
    }

    return (
        <div className={cls.doughnut}>
            <Doughnut options={options} data={graphic} />
        </div>
    )
}
export default DoughnutChartCD
