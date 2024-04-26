import { useMode } from '@/hooks/useMode'

import cls from '@components/DatepickerParameter/index.module.scss'

interface DatepickerParameterProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    label: string
}

const DatepickerParameter: React.FC<DatepickerParameterProps> = ({
    value,
    onChange,
    label,
}) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <div className={cls.block}>
            <label className={`${cls.block__label} ${darkModeClass}`}>
                {label}
            </label>
            <input
                className={`${cls.block__input} ${darkModeClass}`}
                type='date'
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default DatepickerParameter
