import styles from './Logo.module.css'
import LogoVetor from '../../img/logo.png'

export const Logo = ()=> {
    return (
        <div className={styles.Logo}>
            <img className={styles.LogoVetor} src={LogoVetor} alt='Vetor da logo' />
            <p className={styles.LogoTitle}>Digital College</p>
        </div>
    )
}