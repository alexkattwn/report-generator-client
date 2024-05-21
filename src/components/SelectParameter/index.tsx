import { useEffect, useRef, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion'

import { useMode } from '@/hooks/useMode'

import cls from '@components/SelectParameter/index.module.scss'

interface SelectParameterProps {
    label?: string
    selected: string
    onClear: () => void
    children: React.ReactNode
    onChange: (value: string) => void
    className?: string
}

const SelectParameter: React.FC<SelectParameterProps> = ({
    label,
    selected,
    onClear,
    children,
    onChange,
    className,
}) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const toggleDropdown = () => setIsOpen(!isOpen)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <div className={`${cls.block} ${className}`} ref={ref}>
            {label && (
                <label
                    className={`${cls.block__label} ${darkModeClass}`}
                    title={label}
                >
                    {label}
                </label>
            )}

            <div className={cls.block__main} onClick={toggleDropdown}>
                <input
                    className={`${cls.block__main__input} ${darkModeClass}`}
                    value={selected}
                    onChange={handleChange}
                    type='text'
                    title={selected}
                />
                {!!selected && (
                    <button
                        className={`${cls.block__main__btn} ${darkModeClass}`}
                        onClick={onClear}
                    >
                        <IoCloseOutline size={16} />
                    </button>
                )}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            className={`${cls.block__main__dropdown} ${darkModeClass}`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            style={{ transformOrigin: 'top' }}
                        >
                            {children}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default SelectParameter
