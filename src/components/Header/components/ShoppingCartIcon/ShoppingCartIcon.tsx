import { FiShoppingCart } from 'react-icons/fi'
import { ShoppingCarProps } from './ShoppingCartIcon.props'
import styles from './ShoppingCartIcons.module.css'
import { useState } from 'react'
import { useShoppingCartContext } from '../../../../hooks/useShoppingCart'

export const ShoppingCarIcon: React.FC<ShoppingCarProps> = ({
  quantityOfItems = 0,
}) => {
  const [showPopover, setShowPopover] = useState(false)

  const { productsList, totalValue } = useShoppingCartContext()

  return (
    <div
      className={styles.ShoppingCarIcon}
      onClick={() => setShowPopover(true)}
    >
      <FiShoppingCart className={styles.ShoppingCarIconVetor} />
      <div className={styles.ContainerQuantityOfItems}>{quantityOfItems}</div>

      {showPopover && (
        <>
          <div
            className={styles.shoppingCartOverlay}
            onClick={(e) => {
              e.stopPropagation()
              setShowPopover(false)
            }}
          />
          <div className={styles.shoppingCartPopover}>
            {productsList.map((product) => (
              <div>{product.name}</div>
            ))}
            {totalValue}
          </div>
        </>
      )}
    </div>
  )
}
