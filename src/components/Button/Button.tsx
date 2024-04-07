import { ButtonProps } from './Button.props'
import styles from './Button.module.css'
import { useNavigate } from 'react-router-dom'

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  disabled,
  onClick,
  to
}) => {

const navigate = useNavigate()
  const handleButton  = () => {
    if(to) {
      navigate(to)
    }
  }
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

      onClick={() => {
        onClick
        handleButton()
      }}
    >
      {text}
    </button>
  )
}
