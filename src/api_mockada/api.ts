import { SalesResult, TrendingProductsResult } from './api.props';
import { FEATURED_PRODUCTS_URL, SALES_URL } from './api.urls';

export const getProducts = async (): Promise<TrendingProductsResult[]> => {
    return fetch(FEATURED_PRODUCTS_URL)
        .then(response => response.json())
}

export const getSales = async (): Promise<SalesResult[]> => {
    return fetch(SALES_URL)
        .then(response => response.json())
}