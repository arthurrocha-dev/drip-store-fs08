import React from "react";
import { ProductDetailProps } from "./ProductDetail.props";
import { ProductsList } from "..";

export const ProductDetail: React.FC<ProductDetailProps> = ({
    swiperImg,
    title,
    refModel,
    assessments,
    price,
    descriptionOfProduct,
    titleOfProductDescription,
}) => {
    return (
        <div>
            <ProductsList />
        </div>
    )
}