import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ProductApiModel } from '../api/api.props'
import Cookies from 'js-cookie'

interface ShoppingCart {
  productsList: ProductApiModel[]
  totalValue: number
  addProduct: (product: ProductApiModel) => void
  clearCart: () => void
}

const ShoppingCartContext = createContext<ShoppingCart>({
  productsList: [],
  totalValue: 0,
  addProduct: () => {},
  clearCart: () => {},
})

export const useShoppingCartContext = () => useContext(ShoppingCartContext)

type ShoppingCartProviderProps = {
  children: ReactNode
}

export const ShoppingCartProvider: FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [productsList, setProductsList] = useState<ProductApiModel[]>([])
  const totalValue = productsList.reduce(
    (acc, el) => (acc += el.price - el.discountValue),
    0
  )

  const addProduct = (product: ProductApiModel) => {
    if (!productsList.map((product) => product.id).includes(product.id)) {
      const updatedProductsList = [...productsList, product]
      Cookies.set('shoppingCart', JSON.stringify(updatedProductsList))
      setProductsList(updatedProductsList)
    }
  }

  const clearCart = () => {
    if (productsList.length > 0) {
      setProductsList([])
      Cookies.set('shoppingCart', JSON.stringify([]))
    }
  }

  useEffect(() => {
    const cartFromCookies = Cookies.get('shoppingCart')
    if (cartFromCookies) {
      const parsedCart = JSON.parse(cartFromCookies)
      setProductsList(parsedCart)
    }
  }, [])

  return (
    <ShoppingCartContext.Provider
      value={{ productsList, totalValue, addProduct, clearCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
