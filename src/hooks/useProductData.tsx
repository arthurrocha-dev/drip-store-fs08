import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductApiModel } from "../api/api.props";
import { useProductFilterContext } from "./useProductFilter";
import { getProducts, fetchProductByID } from "../api/api";

interface ProductDataType {
  isProductLoading: boolean;
  productsList: ProductApiModel[];
  getProductByID: (id: string) => void;
  productDetail: ProductApiModel | undefined;
  clearProductDetailState: () => void;
  addFilter: (filter: keyof ProductsFilter, value: string) => void;
  removeFilter: (filter: keyof ProductsFilter, value: string) => void;
  sortingList: () => void;
  clearFilters: () => void;
}

export interface ProductsFilter {
  brand: string[];
  category: string[];
  gender: string[];
  state: string[];
}

const initialProductFilterState = {
  brand: [],
  category: [],
  gender: [],
  state: [],
};

const ProductDataContext = createContext<ProductDataType>({
  isProductLoading: false,
  productsList: [],
  getProductByID: () => {},
  productDetail: undefined,
  clearProductDetailState: () => {},
  addFilter: () => {},
  removeFilter: () => {},
  sortingList: () => {},
  clearFilters: () => {},
});

export const useProductDataContext = () => useContext(ProductDataContext);

export const ProductDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filterList, setFilterList] = useState<ProductsFilter>(
    initialProductFilterState,
  );
  const [_productsList, setProductsList] = useState<ProductApiModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { filter: searchText } = useProductFilterContext();
  const [productDetail, setProductDetail] = useState<ProductApiModel>();

  const productsList = _productsList.filter((product) => {
    if (
      searchText &&
      !product.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    ) {
      return false;
    }

    for (let key in filterList) {
      if (
        // @ts-ignore
        filterList[key].length > 0 &&
        // @ts-ignore
        !filterList[key].includes(product[key])
      ) {
        return false;
      }
    }

    return true;
  });

  const clearProductDetailState = useCallback(
    () => setProductDetail(undefined),
    [setProductDetail],
  );

  const getProductByID = useCallback(
    (id: string) => {
      setIsLoading(true);
      fetchProductByID(id)
        .then((result) => {
          setProductDetail(result);
        })
        .finally(() => setIsLoading(false));
    },
    [setProductDetail],
  );

  const addFilter = (filter: keyof ProductsFilter, value: string) => {
    filterList[filter].push(value);
    setFilterList({ ...filterList });
  };

  const removeFilter = (filter: keyof ProductsFilter, value: string) => {
    filterList[filter].splice(filterList[filter].indexOf(value), 1);
    setFilterList({ ...filterList });
  };

  const clearFilters = useCallback(() => {
    const initial = { brand: [], category: [], gender: [], state: [] };
    setFilterList(initial);
  }, []);

  const sortingList = () => {
    productsList.sort;
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(setProductsList)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ProductDataContext.Provider
      value={{
        isProductLoading: isLoading,
        productsList,
        getProductByID,
        productDetail,
        clearProductDetailState,
        addFilter,
        removeFilter,
        sortingList,
        clearFilters,
      }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};
