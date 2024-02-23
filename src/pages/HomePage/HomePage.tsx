import { FeaturesCollections, TrendingProducts } from "../../components"
import { Banner } from "../../components/Banner/Banner"

export const HomePage = () => {
    return(
        <>
            <FeaturesCollections />
            <TrendingProducts />
            <Banner />
        </>
    )
}