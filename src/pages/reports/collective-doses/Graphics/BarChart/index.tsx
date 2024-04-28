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
    indexAxis: 'y' as const,
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset',
            data: [9324, 4524, 5324, 5246, 8834, 1245, 43524],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
}

const BarChartCD = () => {
    return (
        <div className={cls.bar}>
            <Bar options={options} data={data} />
        </div>
    )
}

export default BarChartCD
