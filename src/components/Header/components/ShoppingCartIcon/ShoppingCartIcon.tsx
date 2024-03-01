import { FiShoppingCart } from 'react-icons/fi'
import { ShoppingCarProps } from './ShoppingCartIcon.props'
import styles from './ShoppingCartIcons.module.css'

export const ShoppingCarIcon: React.FC<ShoppingCarProps> = ({
  quantityOfItems = 0,
}) => {
  return (
    <div className={styles.ShoppingCarIcon}>
      <FiShoppingCart className={styles.ShoppingCarIconVetor} />
      <div className={styles.ContainerQuantityOfItems}>{quantityOfItems}</div>
    </div>
  )
}
