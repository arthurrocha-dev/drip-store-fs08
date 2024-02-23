import { Link } from 'react-router-dom';
import { CardProduct } from '../../../components/CardProduct/CardProduct';
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { getProducts } from '../../../api_mockada/api';
import { TrendingProductsResult } from '../../../api_mockada/api.props';
import styles from './TrendingProductsCards.module.css';
import { ROUTES } from '../../../routes';

export const TrendingProductsCards = () => {
    const [productsList, setProductsList] = useState<TrendingProductsResult[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        getProducts().then((result) => setProductsList(result));
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProductsList = productsList.slice(startIndex, endIndex);

    const totalPages = Math.ceil(productsList.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className={styles.TrendingProducts}>
            <div className={styles.TrendingProductsHeader}>
                <h2 className={styles.TrendingProductsTitle}>Produtos em alta</h2>
                <Link className={styles.TrendingProductsSeeAll} to={ROUTES.Products}>
                    Ver todos <FaArrowRightLong />
                </Link>
            </div>
            <div className={styles.TrendingProductsContainer}>
                {paginatedProductsList.map((product) => (
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
