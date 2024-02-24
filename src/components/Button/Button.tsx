/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { ButtonProps } from './Button.props'
import styles from './Button.module.css'

export const Button: React.FC<ButtonProps> = ({ text, type, disabled }) => {
  return (
    <button
      className={`${
        type === 'secondary'
          ? styles.SecundaryButton
          : type === 'shop'
          ? styles.ShopButton
          : styles.PrimaryButton
      }
     
            ${disabled ? styles.disabled : ''}`}
    >
      {text}
    </button>
  )
}
