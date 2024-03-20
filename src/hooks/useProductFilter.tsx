import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ProductFilterType {
  filter: string
  setFilter: (value: string) => void
}

const ProductFilterContext = createContext<ProductFilterType>({
  filter: '',
  setFilter: () => {},
})

export const useProductFilterContext = () => useContext(ProductFilterContext)

export const ProductFilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState('')

  return (
    <ProductFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </ProductFilterContext.Provider>
  )
}
