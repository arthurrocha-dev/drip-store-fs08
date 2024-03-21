import { useProductDataContext } from '../../hooks/useProductData'
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

//TODO - Implementar filtro de input radio.
export const ProductsFilters: React.FC<ProductsFiltersProps> = ({
  onClick,
}) => {
  const { addFilter, removeFilter } = useProductDataContext()

  return (
    <div className={styles.ProductsFilters} onClick={onClick}>
      {}
      <div
        className={styles.ProductsFiltersContainer}
        onClick={handleCheckBoxClick}
      >
        <p className={styles.ProductsFiltersTitle}>Filtrar por</p>
        <CheckBoxFilterGroup groupName="Marka">
          <CheckBoxFilter
            inputId="checkbox-filter-marka-1"
            textLabel="Adiddas"
            onChange={(isChecked: boolean) => {
              if (isChecked) {
                addFilter('brand', 'adidas', isChecked)
              } else {
                removeFilter('brand', 'adidas')
              }
            }}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-marka-2"
            textLabel="Calenciaga"
            onChange={(isChecked: boolean) => {
              if (isChecked) {
                addFilter('brand', 'calenciaga', isChecked)
              } else {
                removeFilter('brand', 'calenciaga')
              }
            }}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-marka-3"
            textLabel="K-Swiss"
            onChange={(isChecked: boolean) => {
              if (isChecked) {
                addFilter('brand', 'k-swiss', isChecked)
              } else {
                removeFilter('brand', 'k-swiss')
              }
            }}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-marka-4"
            textLabel="Puma"
            onChange={(isChecked: boolean) => {
              if (isChecked) {
                addFilter('brand', 'Puma', isChecked)
              } else {
                removeFilter('brand', 'Puma')
              }
            }}
          />
        </CheckBoxFilterGroup>

        <CheckBoxFilterGroup groupName="Categoria">
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-1"
            textLabel="Esporte e lazer"
            onChange={(isChecked) => {
              if (isChecked) {
                addFilter('category', 'esporte e lazer', isChecked)
              } else {
                removeFilter('category', 'esporte e lazer')
              }
            }}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-2"
            textLabel="Casual"
            onChange={(isChecked: boolean) => {
              if (isChecked) {
                addFilter('category', 'casual', isChecked)
              } else {
                removeFilter('category', 'casual')
              }
            }}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-3"
            textLabel="Utilitário"
            onChange={(isChecked) => {
              if (isChecked) {
                addFilter('category', 'utilitario', isChecked)
              } else {
                removeFilter('category', 'utilitario')
              }
            }}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-4"
            textLabel="Corrida"
            onChange={(isChecked) => {
              if (isChecked) {
                addFilter('category', 'corrida', isChecked)
              } else {
                removeFilter('category', 'corrida')
              }
            }}
          />
        </CheckBoxFilterGroup>
  
        <CheckBoxFilterGroup groupName="Gênero">
          <CheckBoxFilter
            inputId="checkbox-filter-genero-1"
            textLabel="Maculino"
            onChange={(isChecked) => {
              if (isChecked) {
                addFilter('gender', 'masculino', isChecked)
              } else {
                removeFilter('gender', 'masculino')
              }
            }}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-genero-2"
            textLabel="Feminino"
            onChange={(isChecked) => {
              if (isChecked) {
                addFilter('gender', 'feminino', isChecked)
              } else {
                removeFilter('gender', 'feminino')
              }
            }}
          />
          <CheckBoxFilter
            inputId="checkbox-filter-genero-3"
            textLabel="Unisex"
            onChange={(isChecked) => {
              if (isChecked) {
                addFilter('gender', 'unisex', isChecked)
              } else {
                removeFilter('gender', 'unisex')
              }
            }}
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
