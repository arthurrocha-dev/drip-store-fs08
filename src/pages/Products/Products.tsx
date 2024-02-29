import { TrendingProductsCards } from "./CardProducts/TrendingProductsCards"



export const Products = () => {
    return(
        <>
            <TrendingProductsCards itemsPerPage={20} />
        </>
    )
}