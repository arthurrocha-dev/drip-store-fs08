import { FC, ReactNode, createContext, useContext, useState } from 'react'
import { ProductsListResult } from '../api/api.props'
import Cookies from 'js-cookie'
interface ShoppingCart {
  productsList: ProductsListResult[]
  totalValue: number
  addProduct: (product: ProductsListResult) => void
  clearCart: () => void
  setCookiesSoppingCart: (shoppingCartCookie: ProductsListResult[]) => void
}

const ShoppingCartContext = createContext<ShoppingCart>({
  productsList: [],
  totalValue: 0,
  addProduct: () => {},
  clearCart: () => {},
  setCookiesSoppingCart: () => {},
})

export const useShoppingCartContext = () => useContext(ShoppingCartContext)

type ShoppingCartProviderProps = {
  children: ReactNode
}

export const ShoppingCartProvider: FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [productsList, setProductsList] = useState<ProductsListResult[]>([])
  const totalValue = productsList.reduce(
    (acc, el) => (acc += el.price - el.discountValue),
    0
  )

  const addProduct = (product: ProductsListResult) => {
    if (!productsList.map((product) => product.id).includes(product.id)) {
      setProductsList([...productsList, product])
    }
  }

  const clearCart = () => {
    if (productsList.length > 0) {
      setProductsList([])
      Cookies.set('shoppingCart', JSON.stringify([]))
    }
  }

  const setCookiesSoppingCart = (ShoppingCartCookie: ProductsListResult[]) => {
    if(ShoppingCartCookie) {
      ShoppingCartCookie.forEach((element)=> {
        if(!productsList.map((product)=> product.id).includes(element.id)) {
          setProductsList([...productsList, element])
        }
      })
    }
    else return
  }

  return (
    <ShoppingCartContext.Provider
      value={{ productsList, totalValue, addProduct, clearCart, setCookiesSoppingCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
