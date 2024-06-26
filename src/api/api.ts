import axios from "axios";

import { SalesResult, ProductApiModel } from "./api.props";
import { FEATURED_PRODUCTS_URL, SALES_URL, LOGIN_URL } from "./api.urls";

export const getProducts = async (): Promise<ProductApiModel[]> => {
  return await axios
    .get(FEATURED_PRODUCTS_URL)
    .then(async (response) => await response.data);
};

export const fetchProductByID = async (
  id: string,
): Promise<ProductApiModel> => {
  return await axios
    .get(FEATURED_PRODUCTS_URL + `/${id}`)
    .then(async (response) => await response.data);
};

export const getSales = async (): Promise<SalesResult[]> => {
  return await axios
    .get(SALES_URL)
    .then(async (response) => await response.data);
};

export const singin = async (username: string, password: string) => {
  return await axios
    .post(LOGIN_URL, {
      username: username,
      password: password,
    })
    .then(async (response) => await response.data);
};

export const getAddressData = async (cep: string) => {
  return await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
};
