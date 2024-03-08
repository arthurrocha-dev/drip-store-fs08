import { CheckBoxFilterGroup } from '../CheckboxFilterGropup/CheckboxFilterGroup'
import { DpInputRadio } from '../InputRadio/InputRadio'
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

      <DpInputRadio id='rd1' name='teste' label='Novo'/>
      <DpInputRadio id='rd2' name='teste' label='Usado'/>
    </div>
  )
}
