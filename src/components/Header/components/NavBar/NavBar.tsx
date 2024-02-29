import { ROUTES } from '../../../../routes'
import { TextLink } from '../../../TextLink/TextLink'
import styles from './NavBar.module.css'
import { NavBarProps } from './NavBar.props'

export const NavBar: React.FC<NavBarProps> = ({ onClick }) => {
  return (
    <>
      <p className={styles.NavBarTitle}>Páginas</p>
      <div className={styles.NavBar}>
        <TextLink to={ROUTES.Home} onClick={onClick}>
          Home
        </TextLink>
        <TextLink to={ROUTES.Products} onClick={onClick}>
          Produtos
        </TextLink>
        <TextLink to={ROUTES.Categorys} onClick={onClick}>
          Categorias
        </TextLink>
        <TextLink to={ROUTES.MyProducts} onClick={onClick}>
          Meus Produtos
        </TextLink>
      </div>
    </>
  )
}
