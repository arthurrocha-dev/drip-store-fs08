import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ProductsListResult } from '../api/api.props'
import { useProductFilterContext } from './useProductFilter'
import { getProducts } from '../api/api'

interface ProductDataType {
  isProductLoading: boolean
  productsList: ProductsListResult[]
}

const ProductDataContext = createContext<ProductDataType>({
  isProductLoading: false,
  productsList: [],
})

export const useProductDataContext = () => useContext(ProductDataContext)

export const ProductDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [productsList, setProductsList] = useState<ProductsListResult[]>([])
  const [isLoadgin, setIsLoading] = useState(false)
  const { filter } = useProductFilterContext()
  useEffect(() => {
    setIsLoading(true)
    getProducts().then((result) =>
      setProductsList(
        result.filter((item) =>
          item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
      )
    )
    .finally(() => setIsLoading(false))
  }, [filter])

  return (
    <ProductDataContext.Provider value={{ isProductLoading: isLoadgin, productsList }}>
      {children}
    </ProductDataContext.Provider>
  )
}
