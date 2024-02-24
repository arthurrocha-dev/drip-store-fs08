import { ProductsList } from '../../components'
import { Hero } from '../../components/Hero/Hero'

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ProductsList hasTitle isTrending title='Produtos em alta'/>
    </>
  )
}
