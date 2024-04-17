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

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [32, 45, 103, 500, 78, 890, 999],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [30, 35, 99, 280, 34, 124, 567],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
}

const BarChartIDC: React.FC = () => {
    return (
        <div className={cls.bar}>
            <Bar options={options} data={data} />
        </div>
    )
}

export default BarChartIDC
