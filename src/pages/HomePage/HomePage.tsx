import { FeaturesCollections, TrendingProducts } from "../../components"
import { Banner } from "../../components/Banner/Banner"
import { Hero } from "../../components/Hero/Hero"

export const HomePage = () => {
    return(
        <>
            <FeaturesCollections />
            <Hero />
            <TrendingProducts />
            <Banner />
        </>
    )
}