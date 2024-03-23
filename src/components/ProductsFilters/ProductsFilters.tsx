import {
  ProductsFilter,
  useProductDataContext,
} from '../../hooks/useProductData'
import { CheckBoxFilter } from '../CheckboxFilter/CheckboxFilter'
import { CheckBoxFilterGroup } from '../CheckboxFilterGropup/CheckboxFilterGroup'
import { DpInputRadio } from '../InputRadio/InputRadio'
import { InputRadioGropu } from '../InputRadioGroup/InputRadioGroup'
import styles from './ProductsFilters.module.css'

export interface ProductsFiltersProps {
  onClick: () => void
}

//TODO - Implementar filtro de input radio.
export const ProductsFilters: React.FC<ProductsFiltersProps> = ({
  onClick,
}) => {
  const { addFilter, removeFilter } = useProductDataContext()

  const toggleFilter = (
    filter: keyof ProductsFilter,
    value: string,
    isAdd: boolean
  ) => (isAdd ? addFilter(filter, value) : removeFilter(filter, value))

  const handleCheckBoxClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation()
  }

  return (
    <div className={styles.ProductsFilters} onClick={onClick}>
      <div
        className={styles.ProductsFiltersContainer}
        onClick={handleCheckBoxClick}
      >
        <p className={styles.ProductsFiltersTitle}>Filtrar por</p>
        <CheckBoxFilterGroup groupName="Marka">
          <CheckBoxFilter
            inputId="checkbox-filter-marka-1"
            textLabel="Adiddas"
            onChange={(isChecked: boolean) =>
              toggleFilter('brand', 'adiddas', isChecked)
            }
          />
          <CheckBoxFilter
            inputId="checkbox-filter-marka-2"
            textLabel="Calenciaga"
            onChange={(isChecked: boolean) =>
              toggleFilter('brand', 'calenciaga', isChecked)
            }
          />
          <CheckBoxFilter
            inputId="checkbox-filter-marka-3"
            textLabel="K-Swiss"
            onChange={(isChecked: boolean) =>
              toggleFilter('brand', 'k-swiss', isChecked)
            }
          />
          <CheckBoxFilter
            inputId="checkbox-filter-marka-4"
            textLabel="Puma"
            onChange={(isChecked: boolean) =>
              toggleFilter('brand', 'puma', isChecked)
            }
          />
        </CheckBoxFilterGroup>

        <CheckBoxFilterGroup groupName="Categoria">
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-1"
            textLabel="Esporte e lazer"
            onChange={(isChecked) =>
              toggleFilter('category', 'esporte e lazer', isChecked)
            }
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-2"
            textLabel="Casual"
            onChange={(isChecked: boolean) =>
              toggleFilter('category', 'casual', isChecked)
            }
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-3"
            textLabel="Utilitário"
            onChange={(isChecked) =>
              toggleFilter('category', 'utilitario', isChecked)
            }
          />
          <CheckBoxFilter
            inputId="checkbox-filter-categoris-4"
            textLabel="Corrida"
            onChange={(isChecked) =>
              toggleFilter('category', 'corrida', isChecked)
            }
          />
        </CheckBoxFilterGroup>
  
        <CheckBoxFilterGroup groupName="Gênero">
          <CheckBoxFilter
            inputId="checkbox-filter-genero-1"
            textLabel="Maculino"
            onChange={(isChecked) =>
              toggleFilter('gender', 'masculino', isChecked)
            }
          />
          <CheckBoxFilter
            inputId="checkbox-filter-genero-2"
            textLabel="Feminino"
            onChange={(isChecked) =>
              toggleFilter('gender', 'feminino', isChecked)
            }
          />
          <CheckBoxFilter
            inputId="checkbox-filter-genero-3"
            textLabel="Unisex"
            onChange={(isChecked) =>
              toggleFilter('gender', 'unisex', isChecked)
            }
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
