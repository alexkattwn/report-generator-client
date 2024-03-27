import { useMode } from '@/hooks/useMode'

import cls from '@components/Input/index.module.scss'

interface InputProps {
    id: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    label: string
    type?: string
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <div className={cls.block}>
            <input
                onChange={onChange}
                value={value}
                type={type}
                id={id}
                className={`${cls.block__input} ${darkModeClass}`}
                placeholder=' '
            />
            <label
                className={`${cls.block__label} ${darkModeClass}`}
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    )
}

export default Input
