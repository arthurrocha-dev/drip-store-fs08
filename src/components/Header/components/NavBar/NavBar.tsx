import { ROUTES } from '../../../../routes'
import { TextLink } from '../../../TextLink/TextLink'
import styles from './NavBar.module.css'

export const NavBar = () => {
    return(
        <>
            <p className={styles.NavBarTitle}>Páginas</p>
            <div className={styles.NavBar}>
                <TextLink to={ROUTES.Home}>Home</TextLink>
                <TextLink to={ROUTES.Products}>Produtos</TextLink>
                <TextLink to={ROUTES.Categorys}>Categirias</TextLink>
                <TextLink to={ROUTES.MyProducts}>Meus Porodutos</TextLink>
            </div>
        </>
    )
}