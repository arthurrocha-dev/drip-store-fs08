import { SlGhost } from "react-icons/sl";
import styles from './ErrorPage.module.css'

export const ErrorPage = () => {
  return (
    <div className={styles.ErrorContainer}>
      <SlGhost className={styles.Ghost}/>
      <h2>Ops...</h2>
      <p>Nada por aqui</p>
    </div>
  )
}
