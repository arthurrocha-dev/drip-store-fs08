import { ROUTES } from '../../../../routes'
import { TextLink } from '../../../TextLink/TextLink'
import styles from './NavBar.module.css'
import { NavBarProps } from './NavBar.props'

export const NavBar: React.FC<NavBarProps> = ({ onClick }) => {
  return (
    <>
      <p className={styles.NavBarTitle}>Páginas</p>
      <div className={styles.NavBar}>
        <TextLink
          to={ROUTES.Home}
          onClick={() => {
            onClick
            window.scroll(0, 0)
          }}
        >
          Home
        </TextLink>
        <TextLink
          to={ROUTES.Products}
          onClick={() => {
            onClick
            window.scroll(0, 0)
          }}
        >
          Produtos
        </TextLink>
        <TextLink
          to={ROUTES.Categorys}
          onClick={() => {
            onClick
            window.scroll(0, 0)
          }}
        >
          Categorias
        </TextLink>
        <TextLink
          to={ROUTES.MyProducts}
          onClick={() => {
            onClick
            window.scroll(0, 0)
          }}
        >
          Meus Produtos
        </TextLink>
      </div>
    </>
  )
}
