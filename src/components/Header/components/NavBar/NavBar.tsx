import { TextLink } from '../../../TextLink/TextLink'
import styles from './NavBar.module.css'

export const NavBar = () => {
    return(
        <>
            <p className={styles.NavBarTitle}>Páginas</p>
            <div className={styles.NavBar}>
                <TextLink text='Home' />
                <TextLink text='Produtos' />
                <TextLink text='Categorias' />
                <TextLink text='Meus Produtos' />
            </div>
        </>
    )
}