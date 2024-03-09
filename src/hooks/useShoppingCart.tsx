import { FC, ReactNode, createContext, useContext, useState } from 'react'
import { ProductsListResult } from '../api/api.props'

interface ShoppingCart {
  productsList: ProductsListResult[]
  totalValue: number
  addProduct: (product: ProductsListResult) => void
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
    }
  }

  return (
    <ShoppingCartContext.Provider
      value={{ productsList, totalValue, addProduct, clearCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}