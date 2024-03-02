import { FC, useRef } from 'react'
import styles from './SearchInput.module.css'
import { IoSearchOutline } from 'react-icons/io5'

type SearchInputProps = {
  onSearch?: (value: string) => void
}

export const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const value = useRef('')

  return (
    <div className={styles.Search}>
      <input
        className={styles.SearchInput}
        type="text"
        placeholder="Pesquisar produto..."
        onChange={(e) => {
          value.current = e.currentTarget.value
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearch && onSearch(e.currentTarget.value)
        }}
      />
      <IoSearchOutline
        className={styles.SearchIcon}
        onClick={() => onSearch && onSearch(value.current)}
      />
    </div>
  )
}
