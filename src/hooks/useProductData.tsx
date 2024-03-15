import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ProductsListResult } from '../api/api.props'
import { useProductFilterContext } from './useProductFilter'
import { getProducts, getProductByID } from '../api/api'

interface ProductDataType {
  isProductLoading: boolean
  productsList: ProductsListResult[]
  getProduct: (id: string) => void
}

const ProductDataContext = createContext<ProductDataType>({
  isProductLoading: false,
  productsList: [],
  getProduct: () => {},
})

export const useProductDataContext = () => useContext(ProductDataContext)

export const ProductDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [productsList, setProductsList] = useState<ProductsListResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { filter } = useProductFilterContext()
  useEffect(() => {
    setIsLoading(true)
    getProducts()
      .then((result) =>
        setProductsList(
          result.filter((item) =>
            item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
        )
      )
      .finally(() => setIsLoading(false))
  }, [filter])

  const getProduct = (id: string) => {
    useEffect(()=>{
      getProducts()
        .then((result) => {
        result.map((e) => e.id.toString() === id)
      })
    },[id])
  }

  return (
    <ProductDataContext.Provider
      value={{ isProductLoading: isLoading, productsList, getProduct }}
    >
      {children}
    </ProductDataContext.Provider>
  )
}
