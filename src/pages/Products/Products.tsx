import { Dropdown, ProductsFilters, ProductsList } from '../../components'
import styles from './Products.module.css'

export const Products = () => {
  return (
    <>
      <div className={styles.ProductsHeader}>
        <p>Total de resultados</p>
        <div className={styles.ProductsListOrdernation}>
          <p>Ordenar por:</p>
          <Dropdown name="Ordenar por:" dropdownId="Dropdown1">
            <option value="price">Valor</option>
            <option value="description">Descrição</option>
            <option value="relevante">Relevância</option>
          </Dropdown>
        </div>
      </div>

      <div className={styles.ProductsContainer}>
        <ProductsFilters />
        <ProductsList />
      </div>
    </>
  )
}
