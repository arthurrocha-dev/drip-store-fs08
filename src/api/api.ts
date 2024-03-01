import { SalesResult, ProductsListResult } from './api.props'
import { FEATURED_PRODUCTS_URL, SALES_URL } from './api.urls'

export const getProducts = async (): Promise<ProductsListResult[]> => {
  return await fetch(FEATURED_PRODUCTS_URL).then(
    async (response) => await response.json()
  )
}

export const getSales = async (): Promise<SalesResult[]> => {
  return await fetch(SALES_URL).then(async (response) => await response.json())
}
