import { CheckBoxFilter } from '../CheckboxFilter/CheckboxFilter'
import styles from './CheckboxFilterGroup.module.css'

type CheckBoxFilterGroupProps = {
  children: React.ReactNode
}

export const CheckBoxFilterGroup: React.FC<CheckBoxFilterGroupProps> = ({
  children,
}) => {
  // TODO: Implementar chamada para a api com os grupos de filtros

  return (
    <div className={styles.CheckBoxFilterGroup}>
      <p className={styles.CheckBoxFilterGroupTitle}>lorem ipsum</p>
      <div className={styles.CheckBoxFilterGroupContainer}>{children}</div>
    </div>
  )
}
