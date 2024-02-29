import { Link } from 'react-router-dom'
import { CardProduct } from '../../../components/CardProduct/CardProduct'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { getProducts } from '../../../api/api'
import { TrendingProductsResult } from '../../../api/api.props'
import styles from './TrendingProductsCards.module.css'
import { ROUTES } from '../../../routes'
import { TrendingProductsCardsProps } from './TrendingProductsCards.props'

export const TrendingProductsCards: React.FC<TrendingProductsCardsProps> = ({
  itemsPerPage,
}) => {
  const [productsList, setProductsList] = useState<TrendingProductsResult[]>([])
  const currentPage = 1

  useEffect(() => {
    void getProducts().then((result) => {setProductsList(result)})
  }, [])

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProductsList = productsList.slice(startIndex, endIndex)

  return (
    <div className={styles.TrendingProducts}>
      <div className={styles.TrendingProductsHeader}>
        <h2 className={styles.TrendingProductsTitle}>Produtos em alta</h2>
        <Link className={styles.TrendingProductsSeeAll} to={ROUTES.Products}>
          Ver todos <FaArrowRightLong />
        </Link>
      </div>
      <div className={styles.TrendingProductsContainer}>
        {paginatedProductsList.map((product) => (
          <CardProduct
            key={product.id}
            urlImg={product.urlImg}
            name={product.name}
            department={product.department}
            price={product.price}
            discountValue={product.discountValue}
          />
        ))}
      </div>
    </div>
  )
}
