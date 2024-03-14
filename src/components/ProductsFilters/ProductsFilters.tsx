import { CheckBoxFilter } from '../CheckboxFilter/CheckboxFilter'
import { CheckBoxFilterGroup } from '../CheckboxFilterGropup/CheckboxFilterGroup'
import { DpInputRadio } from '../InputRadio/InputRadio'
import { InputRadioGropu } from '../InputRadioGroup/InputRadioGroup'
import styles from './ProductsFilters.module.css'

export interface ProductsFiltersProps {
  onClick: () => void
}

const handleCheckBoxClick = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  e.stopPropagation()
}

export const ProductsFilters: React.FC<ProductsFiltersProps> = ({
  onClick,
}) => {
  return (
    <div className={styles.ProductsFilters} onClick={onClick}>
      {}
      <div className={styles.ProductsFiltersContainer} onClick={handleCheckBoxClick}>
        <p className={styles.ProductsFiltersTitle}>Filtrar por</p>
        <CheckBoxFilterGroup groupName="Marka">
          <CheckBoxFilter
            inputId="checkbox-filter-marka-1"
            textLabel="Adiddas"
          />
          <CheckBoxFilter
            inputId="checkbox-filter-marka-2"
            textLabel="Calenciaga"
          />
          <CheckBoxFilter
            inputId="checkbox-filter-marka-3"
            textLabel="K-Swiss"
          />
          <CheckBoxFilter inputId="checkbox-filter-marka-4" textLabel="Puma" />
        </CheckBoxFilterGroup>

        <CheckBoxFilterGroup groupName="Categoria">
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-1"
            textLabel="Esporte e lazer"
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-2"
            textLabel="Casual"
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-3"
            textLabel="Utilitário"
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-4"
            textLabel="Corrida"
          />
        </CheckBoxFilterGroup>

        <CheckBoxFilterGroup groupName="Gênero">
          <CheckBoxFilter
            inputId="checkbox-filter-genero-1"
            textLabel="Maculino"
          />
          <CheckBoxFilter
            inputId="checkbox-filter-genero-2"
            textLabel="Feminino"
          />
          <CheckBoxFilter
            inputId="checkbox-filter-genero-3"
            textLabel="Unisex"
          />
        </CheckBoxFilterGroup>

        <InputRadioGropu groupName="Estado">
          <DpInputRadio id="estado1" name="estado" label="Novo" />
          <DpInputRadio id="estado2" name="estado" label="Usado" />
        </InputRadioGropu>
      </div>
    </div>
  )
}
