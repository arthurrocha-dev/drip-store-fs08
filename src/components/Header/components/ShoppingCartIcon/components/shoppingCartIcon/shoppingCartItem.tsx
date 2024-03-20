import React from 'react'
import styles from './shoppingCartItem.module.css'
import { CardProductProps } from '../../../../../CardProduct/CardProduct.props'

export const ShoppingCartItem: React.FC<CardProductProps> = ({
  urlImg,
  name,
  price,
  discountValue,
}) => {
  return (
    <div className={styles.ShoppingCartIten}>
      <img src={urlImg} alt="" />
      <div className={styles.ShoppingCartItenContainer}>
        <p>{name}</p>
        {discountValue ? (
          <div className={styles.ShoppingCartItenContainerFooter}>
            <p className={styles.ShoppingCartItenContainerFooterDiscontValue}>R$ {discountValue}</p>
            <p className={styles.ShoppingCartItenContainerFooterPrice}>R$ {price}</p>
          </div>
        ) : (
          <p className={styles.ShoppingCartItenContainerPrice}>R$ {price}</p>
        )}
      </div>
    </div>
  )
}
