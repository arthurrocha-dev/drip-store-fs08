import { TextLink } from '../TextLink/TextLink'
import styles from './NavBar.module.css'

export const NavBar = () => {
    return(
        <div className={styles.NavBar}>
            <p className={styles.NavBarTitle}>Páginas</p>
            <TextLink text='Home' />
            <TextLink text='Produtos' />
            <TextLink text='Categorias' />
            <TextLink text='Meus Produtos' />
        </div>
    )
}