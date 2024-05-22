import { IoCloseOutline } from 'react-icons/io5'

import { useMode } from '@/hooks/useMode'

import cls from '@/pages/history/SearchField/index.module.scss'

interface SearchFieldProps {
    searchValue: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleClear: () => void
}

const SearchField: React.FC<SearchFieldProps> = ({
    searchValue,
    handleChange,
    handleClear,
}) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <div className={cls.main}>
            <input
                className={`${cls.main__input} ${darkModeClass}`}
                type='text'
                value={searchValue}
                placeholder='Поиск по названию...'
                onChange={handleChange}
            />
            {!!searchValue && (
                <button
                    className={`${cls.main__btn} ${darkModeClass}`}
                    onClick={handleClear}
                >
                    <IoCloseOutline size={22} />
                </button>
            )}
        </div>
    )
}

export default SearchField
