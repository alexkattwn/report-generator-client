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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
}

const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Dataset 2',
            data: [12, 45, 132, 455, 34, 120, 400, 600, 256, 999],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
}

const AreaChartIDC = () => {
    return (
        <div className={cls.area}>
            <Line options={options} data={data} />
        </div>
    )
}

export default AreaChartIDC
