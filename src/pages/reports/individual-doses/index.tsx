import { REPORT_ID_ROUTE } from '@/constants'

import cls from '@/pages/reports/individual-doses/index.module.scss'

const IndividualDosesPage: React.FC = () => {
    return (
        <div className={cls.page}>
            IndividualDosesPage
            <button
                onClick={() =>
                    window.open(
                        REPORT_ID_ROUTE,
                        '_blank'
                        //'rel=noopener noreferrer'
                    )
                }
            >
                view
            </button>
        </div>
    )
}

export default IndividualDosesPage
