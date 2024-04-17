import { IoCloseOutline } from 'react-icons/io5'

import { useMode } from '@/hooks/useMode'

import cls from '@components/InputParameter/index.module.scss'

interface InputParameterProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClear: () => void
    value: string
    placeholder: string
    label: string
    type?: string
    disabled?: boolean
}

const InputParameter: React.FC<InputParameterProps> = ({
    onChange,
    onClear,
    value,
    placeholder,
    type,
    label,
    disabled,
}) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <div className={cls.block}>
            <label
                className={`${cls.block__label} ${darkModeClass}`}
                title={label}
            >
                {label}
            </label>
            <div className={cls.block__main}>
                <input
                    className={`${cls.block__main__input} ${darkModeClass}`}
                    type={type || 'text'}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                />
                {!!value && !disabled && (
                    <button
                        className={`${cls.block__main__btn} ${darkModeClass}`}
                        onClick={onClear}
                    >
                        <IoCloseOutline size={16} />
                    </button>
                )}
            </div>
        </div>
    )
}

export default InputParameter
