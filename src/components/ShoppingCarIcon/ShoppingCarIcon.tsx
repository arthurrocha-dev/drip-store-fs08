import { FiShoppingCart } from 'react-icons/fi'
import { ShoppingCarProps } from './ShoppingCarIcon.props'
import styles from './ShoppingCarIcons.module.css'

export const ShoppingCarIcon: React.FC<ShoppingCarProps> = ({ quantityOfItems }) => {

    quantityOfItems = 100
    
    return(
        <div className={styles.ShoppingCarIcon}>
            <FiShoppingCart className={styles.ShoppingCarIconVetor} />
            <div className={styles.ContainerQuantityOfItems}>{quantityOfItems}</div>
        </div>
    )
}