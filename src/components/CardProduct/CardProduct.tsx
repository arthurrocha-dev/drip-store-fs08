import { CardProductProps } from './CardProduct.props'
import styles from './CardProduct.module.css'

export const CardProduct: React.FC<CardProductProps> = ({
  urlImg,
  name,
  price,
  discountValue = 0,
  department,
}) => {
  return (
    <div className={styles.CardProduct}>
      <div className={styles.CardProductImgContainer}>
        {discountValue && price ? (
          <div className={styles.DiscountPercentage}>
            {Math.round((discountValue / price) * 100)}% OFF
          </div>
        ) : (
          ''
        )}
        <img className={styles.CardProductImg} src={urlImg} alt="" />
      </div>
      <p className={styles.CardProductDepartament}>{department}</p>
      <p className={styles.CardProductName}>{name}</p>

      {discountValue > 0 ? (
        <>
          <div className={styles.CardProductContainerBottom}>
            <p className={styles.CardProductPriceOff}>${price}</p>
            <p className={styles.CardProductDiscontValue}>${discountValue}</p>
          </div>
        </>
      ) : (
        <div className={styles.CardProductContainerBottom}>
          <p className={styles.CardProductPrice}>${price}</p>
        </div>
      )}
    </div>
  )
}
