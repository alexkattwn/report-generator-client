import * as Icon from 'react-icons/fi'
import Checkbox from 'react-custom-checkbox'

import { useMode } from '@/hooks/useMode'

interface CheckboxParameterProps {
    value: boolean
    setValue: (value: string) => void
    label: string
}

const CheckboxParameter: React.FC<CheckboxParameterProps> = ({
    value,
    setValue,
    label,
}) => {
    const { mode } = useMode()

    return (
        <Checkbox
            icon={
                <Icon.FiCheck
                    color={
                        mode === 'dark' ? 'var(--color-white)' : 'var(--blue)'
                    }
                    size={14}
                />
            }
            checked={value}
            onChange={(value: string) => setValue(value)}
            borderColor={mode === 'dark' ? 'var(--color-white)' : 'var(--blue)'}
            style={{ cursor: 'pointer', border: '1px solid gray' }}
            labelStyle={{
                marginLeft: 10,
                userSelect: 'none',
                fontSize: '14px',
                fontWeight: 300,
                color: mode === 'dark' ? 'var(--color-white)' : 'var(--blue)',
            }}
            label={label}
        />
    )
}

export default CheckboxParameter
