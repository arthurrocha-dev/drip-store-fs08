import { CardProductProps } from "./CardProduct.props"
import styles from './CardProduct.module.css'

export const CardProduct:React.FC<CardProductProps> = ({urlImg, name, price, discountValue, department}) => {
    return(
        <div className={styles.CardProduct}>
            <div className={styles.CardProductImgContainer}>
                <img className={styles.CardProductImg} src={urlImg} alt="" />
            </div>
            <p className={styles.CardProductDepartament}>{department}</p>
            <p className={styles.CardProductName}>{name}</p>
            <div className={styles.CardProductContainerBottom}>
                <p className={styles.CardProductPrice}>${price}</p>
                <p className={styles.CardProductDiscontValue}>${discountValue}</p>
            </div>

            <div className={styles.DiscountPercentage}>
                { discountValue && price ? (discountValue / price) * 100 : ''}% OFF
            </div>
        </div>
    )
}