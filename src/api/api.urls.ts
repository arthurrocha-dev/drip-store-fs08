export const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_API_PREFIX = import.meta.env.VITE_BASE_API_PREFIX ?? "";

export const FEATURED_PRODUCTS_URL = `${BASE_URL}${BASE_API_PREFIX}/products`;
export const SALES_URL = `${BASE_URL}${BASE_API_PREFIX}/sales`;
export const LOGIN_URL = `${BASE_URL}/login`;
