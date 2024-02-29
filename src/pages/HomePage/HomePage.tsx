import { ProductsList } from '../../components'
import { Hero } from '../../components/Hero/Hero'
import styles from './HomePage.module.css'
export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <Hero />
      <ProductsList hasTitle isTrending title='Produtos em alta'/>
    </div>
  )
}
