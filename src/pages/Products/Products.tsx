import { Dropdown, ProductsFilters, ProductsList } from '../../components'
import { LuFilter } from 'react-icons/lu'
import styles from './Products.module.css'
import { useState } from 'react'

export const Products = () => {

  const [isOnened, setIsOpened] = useState(false)

  const toggleFilterMobile = () => {
    setIsOpened(!isOnened)
  }

  return (
    <>
      <div className={styles.ProductsHeader}>
        <p>Total de resultados</p>

        <div className={styles.ProductsHeaderContainer}>
          <div className={styles.ProductsListOrdernation}>
            <p>Ordenar por:</p>
            <Dropdown name="Ordenar por:" dropdownId="Dropdown1">
              <option value="price">Valor</option>
              <option value="description">Descrição</option>
              <option value="relevante">Relevância</option>
            </Dropdown>
          </div>
          <LuFilter className={styles.ProductsHeaderFilterIcon} onClick={toggleFilterMobile}/>
          {isOnened && (
            <ProductsFilters onClick={toggleFilterMobile}/>
          )
          }
        </div>

      </div>

      <div className={styles.ProductsContainer}>
        <div className={styles.ProductsListFilters}>
          <ProductsFilters onClick={()=>{}}/>
        </div>
        <ProductsList />
      </div>
    </>
  )
}
