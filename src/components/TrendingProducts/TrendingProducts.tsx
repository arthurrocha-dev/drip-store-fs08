import { Link } from 'react-router-dom';
import { CardProduct } from '../CardProduct/CardProduct';
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { getProducts } from '../../api/api';
import { TrendingProductsResult } from '../../api/api.props';
import styles from './TrendingProducts.module.css';
import { ROUTES } from '../../routes';

export const TrendingProducts = () => {
    const [productsList, setProductsList] = useState<TrendingProductsResult[]>([]); 
    const trendingProductsList = productsList.filter((product) => product.trending);

    useEffect(() => {
        getProducts().then((result) => setProductsList(result));
    }, []);

    return (
        <div className={styles.TrendingProducts}>
            <div className={styles.TrendingProductsHeader}>
                <h2 className={styles.TrendingProductsTitle}>Produtos em alta</h2>
                <Link className={styles.TrendingProductsSeeAll} to={ROUTES.Products}> Ver todos <FaArrowRightLong /> </Link >
            </div>
            <div className={styles.TrendingProductsContainer}>
                {trendingProductsList.map((product) => (
                    <CardProduct
                        key={product.id}
                        urlImg={product.urlImg}
                        name={product.name}
                        department={product.department}
                        price={product.price}
                        discountValue={product.discountValue}
                    />
                ))}
            </div>
        </div>
    );
};
