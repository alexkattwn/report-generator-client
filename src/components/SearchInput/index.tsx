import { IoCloseOutline } from 'react-icons/io5'

import { useMode } from '@/hooks/useMode'

import cls from '@components/SearchInput/index.module.scss'

interface SearchInputProps {
    searchValue: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleClear: () => void
}

const SearchInput: React.FC<SearchInputProps> = ({
    searchValue,
    handleChange,
    handleClear,
}) => {
    const { mode } = useMode()
    const darkModeClass = mode === 'dark' ? `${cls.dark_mode}` : ''

    return (
        <div className={`${cls.main} sixth-step`}>
            <input
                className={`${cls.main__input} ${darkModeClass}`}
                type='text'
                value={searchValue}
                placeholder='Поиск по ФИО...'
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

export default SearchInput
