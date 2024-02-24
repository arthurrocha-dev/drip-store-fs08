import { TrendingProductsResult } from './api.props';
import { FEATURED_PRODUCTS_URL } from './api.urls';

export const getProducts = async (): Promise<TrendingProductsResult[]> => {
    return fetch(FEATURED_PRODUCTS_URL)
        .then(response => response.json())
        .then(result => result)
}