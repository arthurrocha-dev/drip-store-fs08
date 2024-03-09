import styles from './CheckboxFilterGroup.module.css'

type CheckBoxFilterGroupProps = {
  children: React.ReactNode
  groupName: string
}

export const CheckBoxFilterGroup: React.FC<CheckBoxFilterGroupProps> = ({
  children,
  groupName,
}) => {
  return (
    <div className={styles.CheckBoxFilterGroup}>
      <p className={styles.CheckBoxFilterGroupTitle}>{groupName}</p>
      <div className={styles.CheckBoxFilterGroupContainer}>{children}</div>
    </div>
  )
}
