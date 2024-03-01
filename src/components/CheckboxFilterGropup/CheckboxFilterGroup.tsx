import { CheckBoxFilter } from '../CheckboxFilter/CheckboxFilter'
import styles from './CheckboxFilterGroup.module.css'
export const CheckBoxFilterGroup = () => {
  // to do - Implementar chamada para a api com os grupos de filtros
  return (
    <div className={styles.CheckBoxFilterGroup}>
      <p className={styles.CheckBoxFilterGroupTitle}>lorem ipsum</p>
      <div className={styles.CheckBoxFilterGroupContainer}>
        <CheckBoxFilter inputId={1} textLabel="lorem" />
        <CheckBoxFilter inputId={2} textLabel="lorem" />
        <CheckBoxFilter inputId={3} textLabel="lorem" />
        <CheckBoxFilter inputId={4} textLabel="lorem" />
      </div>
    </div>
  )
}
