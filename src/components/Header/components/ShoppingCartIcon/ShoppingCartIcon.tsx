import { FiShoppingCart } from 'react-icons/fi'
import { ShoppingCarProps } from './ShoppingCartIcon.props'
import styles from './ShoppingCartIcons.module.css'
import { useState } from 'react'
import { useShoppingCartContext } from '../../../../hooks/useShoppingCart'
import { Button } from '../../../Button/Button'
import { ShoppingCartItem } from './components/shoppingCartIcon/shoppingCartItem'
import { FaRegFaceSadCry } from 'react-icons/fa6'
import { PiMaskSadLight } from 'react-icons/pi'

export const ShoppingCarIcon: React.FC<ShoppingCarProps> = ({
  quantityOfItems = 0,
}) => {
  const { productsList, totalValue, clearCart } = useShoppingCartContext()

  const CartStates = {
    CLOSED: 'CLOSED',
    CLOSING: 'CLOSING',
    OPENED: 'OPENED',
    OPENING: 'OPENING',
  }

  const [isOpenModal, setIsOpenModal] = useState(false)

  const [cartState, setcartState] = useState(CartStates.CLOSED)
  const toggleCartState = () => {
    setcartState((state) =>
      state === CartStates.CLOSED ? CartStates.OPENING : CartStates.CLOSING
    )
    setTimeout(() => {
      setcartState((state) =>
        state === CartStates.OPENING ? CartStates.OPENED : CartStates.CLOSED
      )
    }, 900)
  }

  const handleCartClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }

  quantityOfItems = productsList.length

  return (
    <>
      <div className={styles.ShoppingCarIcon} onClick={() => toggleCartState()}>
        <FiShoppingCart className={styles.ShoppingCarIconVetor} />
        <div className={styles.ContainerQuantityOfItems}>{quantityOfItems}</div>

        {cartState !== CartStates.CLOSED && (
          <>
            <div
              className={`${styles.shoppingCartOverlay}`}
              onClick={() => toggleCartState()}
            />
            <div
              className={`${styles.shoppingCartPopover} ${
                cartState === CartStates.CLOSING ? styles.closingCart : ''
              }`}
              onClick={handleCartClick}
            >
              <p className={styles.setShowPopoverTitle}>Meu Carrinho</p>
              <div className={styles.shoppingCartPopoverListItens}>
                {productsList.length ? (
                  productsList.map((product) => (
                    <ShoppingCartItem
                      key={product.id}
                      urlImg={product.urlImg}
                      name={product.name}
                      price={product.price}
                      discountValue={product.discountValue}
                    />
                  ))
                ) : (
                  <div
                    className={styles.shoppingCartPopoverListItenMessageDefault}
                  >
                    <p>Carrinho Vazio</p>
                    <FaRegFaceSadCry
                      className={
                        styles.shoppingCartPopoverListItenMessageDefaultIcon
                      }
                    />
                  </div>
                )}
              </div>
              <div className={styles.shoppingCartPopoverTotal}>
                <p>Valor total:</p>
                <span>R$ {totalValue.toFixed(2)}</span>
              </div>
              <div className={styles.shoppingCartPopoverFooter}>
                <p
                  onClick={() => {
                    quantityOfItems > 0 ? setIsOpenModal(true) : ''
                  }}
                >
                  Esvaziar
                </p>
                <Button text="Ver Carrinho" />
              </div>
            </div>
          </>
        )}
      </div>

      {isOpenModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsOpenModal(false)}
        >
          <div className={styles.modalClearCart}>
            <p>
              Entendo... É difícil dizer adeus aos itens do carrinho, mas estou
              aqui para ajudar se precisar de algo mais.
            </p>
            <p>
              Mas antes de continuar, preciso saber, você quer mesmo fazer isso?
            </p>
            <PiMaskSadLight className={styles.modalClearCartIcon} />
            <Button
              text="Sim"
              onClick={() => {
                clearCart()
                setIsOpenModal(false)
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
