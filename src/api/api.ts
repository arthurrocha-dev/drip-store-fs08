import axiosLib from "axios";

import { SalesResult, ProductApiModel } from "./api.props";
import { FEATURED_PRODUCTS_URL, LOGIN_URL, SALES_URL } from "./api.urls";

const axios = axiosLib.create({});

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("jwtToken", token);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwtToken");
  }
};

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

export const login = async (
  username: string,
  password: string,
): Promise<any> => {
  console.log("LOGIN_URL", LOGIN_URL);
  return await axios
    .post(LOGIN_URL, { username, password })
    .then(async (response) => {
      const { token } = response.data;
      setAuthToken(token);
      return response.data;
    });
};

export const getAddressData = async (cep: string) => {
  return await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
};
