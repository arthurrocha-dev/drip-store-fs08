import { CheckBoxFilterGroup } from '../CheckboxFilterGropup/CheckboxFilterGroup'
import styles from './ProductsFilters.module.css'
export const ProductsFilters = () => {
  return (
    <div className={styles.ProductsFilters}>
      <div className={styles.ProductsFiltersContainer}>
        <p className={styles.ProductsFiltersTitle}>Filtrar por</p>
        <CheckBoxFilterGroup />
        <CheckBoxFilterGroup />
        <CheckBoxFilterGroup />
      </div>
    </div>
  )
}
