import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ProductApiModel } from '../api/api.props'
import { useProductFilterContext } from './useProductFilter'
import { getProducts, fetchProductByID } from '../api/api'

// interface ProductDetail {
//   product: ProductApiModel
//   comments: Comment[]
//   rate: number
//   relatedProducts: ProductApiModel[]
// }

interface ProductDataType {
  isProductLoading: boolean
  productsList: ProductApiModel[]
  getProductByID: (id: string) => void
  productDetail: ProductApiModel | undefined
  clearProductDetailState: () => void
}

const ProductDataContext = createContext<ProductDataType>({
  isProductLoading: false,
  productsList: [],
  getProductByID: () => {},
  productDetail: undefined,
  clearProductDetailState: () => {},
})

export const useProductDataContext = () => useContext(ProductDataContext)

export const ProductDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [productsList, setProductsList] = useState<ProductApiModel[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { filter } = useProductFilterContext()
  const [productDetail, setProductDetail] = useState<ProductApiModel>()

  const clearProductDetailState = useCallback(() => setProductDetail(undefined), [setProductDetail])

  const getProductByID = useCallback(
    (id: string) => {
      setIsLoading(true)
      fetchProductByID(id)
        .then((result) => {
          setProductDetail(result)
        })
        .finally(() => setIsLoading(false))
    },
    [setProductDetail]
  )

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

  return (
    <ProductDataContext.Provider
      value={{
        isProductLoading: isLoading,
        productsList,
        getProductByID,
        productDetail,
        clearProductDetailState,
      }}
    >
      {children}
    </ProductDataContext.Provider>
  )
}
