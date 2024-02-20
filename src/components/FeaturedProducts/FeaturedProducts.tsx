import { Link } from 'react-router-dom';
import { CardProduct } from '../CardProduct/CardProduct';
import styles from './FeaturedProducts.module.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { ROUTES } from '../../routes';
export const FeaturedProducts = () => {
    const products = [];

    for (let i = 0; i <= 9; i++) {
        products.push(
            <CardProduct
                key={i}
                urlImg="/src/img/Layer 1aa 2.png"
                name="K-Swiss V8 - Masculino"
                department='Tênis'
                price={200.00}
                discountValue={100.00}
            />
        );
    }

    return (
        <div className={styles.FeaturedProducts}>
            <div className={styles.FeaturedProductsHeder}>
                <h2 className={styles.FeaturedProductsTitle}>Produtos em alta</h2>
                <Link className={styles.FeaturedProductsSeeAll} to={ROUTES.Products}> Ver todos  <FaArrowRightLong/></Link >
            </div>
            <div className={styles.FeaturedProductsContainer}>
                {products}
            </div>
        </div>
    );
};
