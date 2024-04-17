import { REPORT_CD_ROUTE } from '@/constants'

import cls from '@/pages/reports/collective-doses/index.module.scss'

const CollectiveDosesPage: React.FC = () => {
    return (
        <div className={cls.page}>
            CollectiveDosesPage
            <button
                onClick={() =>
                    window.open(
                        REPORT_CD_ROUTE,
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

export default CollectiveDosesPage
