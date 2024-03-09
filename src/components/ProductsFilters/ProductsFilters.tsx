import { CheckBoxFilter } from '../CheckboxFilter/CheckboxFilter'
import { CheckBoxFilterGroup } from '../CheckboxFilterGropup/CheckboxFilterGroup'
import { DpInputRadio } from '../InputRadio/InputRadio'
import styles from './ProductsFilters.module.css'
export const ProductsFilters = () => {
  return (
    <div className={styles.ProductsFilters}>
      <div className={styles.ProductsFiltersContainer}>
        <p className={styles.ProductsFiltersTitle}>Filtrar por</p>
        <CheckBoxFilterGroup>
          <CheckBoxFilter inputId="checkbox-filter-marca-1" textLabel="lorem" />
          <CheckBoxFilter inputId="checkbox-filter-marca-2" textLabel="lorem" />
          <CheckBoxFilter inputId="checkbox-filter-marca-3" textLabel="lorem" />
          <CheckBoxFilter inputId="checkbox-filter-marca-4" textLabel="lorem" />
        </CheckBoxFilterGroup>

        <CheckBoxFilterGroup>
          <CheckBoxFilter inputId="checkbox-filter-marca-5" textLabel="lorem" />
          <CheckBoxFilter inputId="checkbox-filter-marca-6" textLabel="lorem" />
          <CheckBoxFilter inputId="checkbox-filter-marca-7" textLabel="lorem" />
          <CheckBoxFilter inputId="checkbox-filter-marca-8" textLabel="lorem" />
        </CheckBoxFilterGroup>
        <CheckBoxFilterGroup>
          <CheckBoxFilter inputId="checkbox-filter-marca-9" textLabel="lorem" />
          <CheckBoxFilter inputId="checkbox-filter-marca-10" textLabel="lorem" />
          <CheckBoxFilter inputId="checkbox-filter-marca-11" textLabel="lorem" />
          <CheckBoxFilter inputId="checkbox-filter-marca-12" textLabel="lorem" />
        </CheckBoxFilterGroup>
      </div>

      <DpInputRadio id="rd1" name="teste" label="Novo" />
      <DpInputRadio id="rd2" name="teste" label="Usado" />
    </div>
  )
}
