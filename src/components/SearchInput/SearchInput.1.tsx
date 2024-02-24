import styles from './SeachInput.module.css'
import { IoSearchOutline } from 'react-icons/io5'

export const SearchInput = () => {
  return (
    <div className={styles.Search}>
      <input
        className={styles.SearchInput}
        type="text"
        placeholder="Pesquisar produto..."
      />
      <IoSearchOutline className={styles.SearchIcon} />
    </div>
  )
}
