import { Link } from 'react-router-dom'
import { CardProduct } from '../CardProduct/CardProduct'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { getProducts } from '../../api/api'
import { ProductsListResult } from '../../api/api.props'
import styles from './ProductsList.module.css'
import { ROUTES } from '../../routes'
import { ProductsListCardsProps } from './ProductsList.props'
import Skeleton from 'react-loading-skeleton'

export const ProductsList: React.FC<ProductsListCardsProps> = ({
  isTrending,
  itemsPerPage = 10,
  title,
  hasTitle,
}) => {
  const [productsList, setProductsList] = useState<ProductsListResult[]>([])

  let list = []

  useEffect(() => {
    getProducts().then((result) => setProductsList(result))
  }, [])

  if (isTrending) {
    const productsListList = productsList.filter((product) => product.trending)
    if (itemsPerPage > 0) {
      const currentPage = 1
      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      list = productsListList.slice(startIndex, endIndex)
    } else {
      list = productsListList
    }
  } else {
    const currentPage = 1
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedProductsList = productsList.slice(startIndex, endIndex)

    list = paginatedProductsList
  }

  return (
    <div className={styles.ProductsList}>
      {hasTitle && (
        <div className={styles.ProductsListHeader}>
          <h2 className={styles.ProductsListTitle}>{title}</h2>
          <Link className={styles.ProductsListSeeAll} to={ROUTES.Products}>
            Ver todos <FaArrowRightLong />{' '}
          </Link>
        </div>
      )}
      {productsList.length > 0 ? (
        <div className={styles.ProductsListContainer}>
          {list.map((product) => (
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
      ) : (
        <Skeleton
          width={'calc(25% - calc(2*var(--spacing-normal)))'}
          height={'200px'}
          count={4}
          inline
          className={styles.SkeletonProductList}
        />
      )}
    </div>
  )
}
