import {
  Banner,
  FeaturesCollections,
  Hero,
  ProductsList,
} from '../../components'
import styles from './HomePage.module.css'
export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <Hero />
      <FeaturesCollections />
      <ProductsList hasTitle isTrending title="Produtos em alta" />
      <Banner />
    </div>
  )
}
