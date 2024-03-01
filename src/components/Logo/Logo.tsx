import styles from './Logo.module.css'
import LogoVetor from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'
import { LogoPros } from './Logo.props'

export const Logo: React.FC<LogoPros> = ({ secondary }) => {
  return (
    <Link className={styles.Logo} to={ROUTES.Home}>
      <img className={styles.LogoVetor} src={LogoVetor} alt="Vetor da logo" />
      <p
        className={`${styles.LogoTitle}  ${secondary ? styles.Secondary : ''}`}
      >
        Digital College
      </p>
    </Link>
  )
}
