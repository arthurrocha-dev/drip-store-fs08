import styles from './Logo.module.css'
import LogoVetor from '../../img/logo.png'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'

export const Logo = ()=> {
    return (
        <Link className={styles.Logo} to={ROUTES.Home}>
            <img className={styles.LogoVetor} src={LogoVetor} alt='Vetor da logo' />
            <p className={styles.LogoTitle}>Digital College</p>
        </Link>
    )
}