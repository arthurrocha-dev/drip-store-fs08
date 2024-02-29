import { ProductsFilters, ProductsList } from '../../components'
import styles from './Products.module.css'

export const Products = () => {
  return (
    <div className={styles.ProductsContainer}>
      <ProductsFilters />
      <ProductsList/>
    </div>
  )
}
