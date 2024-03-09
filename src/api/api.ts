import axios from 'axios'

import { SalesResult, ProductsListResult } from './api.props'
import { FEATURED_PRODUCTS_URL, SALES_URL } from './api.urls'

export const getProducts = async (): Promise<ProductsListResult[]> => {
  return await axios
    .get(FEATURED_PRODUCTS_URL)
    .then(async (response) => await response.data)
}

export const getSales = async (): Promise<SalesResult[]> => {
  return await axios
    .get(SALES_URL)
    .then(async (response) => await response.data)
}
