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
  addFilter: (
    filter: keyof ProductsFilter,
    value: string,
    isChecked: boolean
  ) => void
  removeFilter: (filter: keyof ProductsFilter, value: string) => void
  sortingList: () => void
}

export interface ProductsFilter {
  brand: string[]
  category?: string[]
  gender?: string[]
  state?: string[]
}

const ProductFiltersDefault = {
  brand: [],
  category: [],
  gender: [],
  state: [],
}

const ProductDataContext = createContext<ProductDataType>({
  isProductLoading: false,
  productsList: [],
  getProductByID: () => {},
  productDetail: undefined,
  clearProductDetailState: () => {},
  addFilter: () => {},
  removeFilter: () => {},
  sortingList: () => {},
})

export const useProductDataContext = () => useContext(ProductDataContext)

export const ProductDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filterList, setFilterList] = useState<ProductsFilter>(
    ProductFiltersDefault
  )
  const [productsList, setProductsList] = useState<ProductApiModel[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { filter } = useProductFilterContext()
  const [productDetail, setProductDetail] = useState<ProductApiModel>()

  const clearProductDetailState = useCallback(
    () => setProductDetail(undefined),
    [setProductDetail]
  )

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

  const addFilter = useCallback(
    (filter: keyof ProductsFilter, value: string, isChecked: boolean) => {
      setFilterList((prevFilterList) => {
        const newFilterList: ProductsFilter = { ...prevFilterList }

        if (isChecked && filter in newFilterList) {
          const filterArray = newFilterList[filter]
          if (filterArray) {
            filterArray.push(value.toLowerCase())
          } else {
            newFilterList[filter] = [value.toLowerCase()]
          }
        }

        return newFilterList
      })
    },
    []
  )

  const removeFilter = (filter: keyof ProductsFilter, value: string) => {
    setFilterList((prevFilterList) => {
      const newFilterList: ProductsFilter = { ...prevFilterList }

      if (filter in newFilterList) {
        const filterArray = newFilterList[filter]
        if (filterArray) {
          newFilterList[filter] = filterArray.filter(
            (item) => item.toLowerCase() !== value.toLowerCase()
          )
        }
      }

      return newFilterList
    })
  }

  const sortingList = () => {
    productsList.sort
  }

  useEffect(() => {
    setIsLoading(true)
    getProducts()
      .then((result) => {
        let filteredProductList: ProductApiModel[] = result
        ;(Object.keys(filterList) as (keyof ProductsFilter)[]).forEach(
          (key) => {
            const filter = filterList[key]
            if (Array.isArray(filter) && filter.length > 0) {
              filteredProductList = filteredProductList.filter((item) => {
                return filter.some(
                  (value) => item[key].toLowerCase() === value.toLowerCase()
                )
              })
            }
          }
        )
        if (filter.trim() !== '') {
          filteredProductList = filteredProductList.filter((item) =>
            item.name.toLowerCase().includes(filter.toLocaleLowerCase())
          )
        }
        setProductsList(filteredProductList)
      })
      .finally(() => setIsLoading(false))
  }, [filter, filterList])

  return (
    <ProductDataContext.Provider
      value={{
        isProductLoading: isLoading,
        productsList,
        getProductByID,
        productDetail,
        clearProductDetailState,
        addFilter,
        removeFilter,
        sortingList,
      }}
    >
      {children}
    </ProductDataContext.Provider>
  )
}
