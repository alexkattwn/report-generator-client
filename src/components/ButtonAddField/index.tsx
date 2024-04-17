import { IoAddOutline, IoCheckmark, IoCloseOutline } from 'react-icons/io5'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { useMode } from '@/hooks/useMode'

import cls from '@components/ButtonAddField/index.module.scss'

interface ButtonAddFieldProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClear: () => void
    value: string
    placeholder: string
    create: () => void
}

const ButtonAddField: React.FC<ButtonAddFieldProps> = ({
    onChange,
    onClear,
    value,
    placeholder,
    create,
}) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null)

    const inputRef = useRef<HTMLInputElement>(null)

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

    const toggleField = () => {
        setIsOpen(!isOpen)
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus()
            }
        }, 0)
    }

    const handleClose = () => {
        onClear()
        setIsOpen(false)
    }

    const handleCreate = () => {
        create()
        setIsOpen(false)
        onClear()
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleCreate()
        }
        if (event.key === 'Escape') {
            handleClose()
        }
    }

    return (
        <div className={cls.block} ref={ref}>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={{ transformOrigin: 'bottom right' }}
                        className={`${cls.block__field} ${darkModeClass}`}
                    >
                        <input
                            ref={inputRef}
                            type='text'
                            className={`${cls.block__field__input} ${darkModeClass}`}
                            onChange={onChange}
                            placeholder={placeholder}
                            onKeyDown={handleKeyDown}
                            value={value}
                        />
                        <button
                            onClick={handleCreate}
                            className={`${cls.block__field__add} ${darkModeClass}`}
                        >
                            <IoCheckmark size={22} />
                        </button>
                        <button
                            onClick={handleClose}
                            className={`${cls.block__field__close} ${darkModeClass}`}
                        >
                            <IoCloseOutline size={22} />
                        </button>
                    </motion.div>
                </>
            )}
            <button
                onClick={toggleField}
                className={`${cls.block__btn} ${darkModeClass}`}
            >
                <IoAddOutline
                    data-tooltip-id='tooltip'
                    data-tooltip-content='Добавить'
                    data-tooltip-delay-hide={100}
                    data-tooltip-place='top'
                    data-tooltip-variant='info'
                    size={26}
                />
            </button>
        </div>
    )
}

export default ButtonAddField
