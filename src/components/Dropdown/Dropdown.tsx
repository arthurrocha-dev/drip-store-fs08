import styles from './Dropdown.module.css'
import { DropdownProsp } from './Dropdown.props'

export const Dropdown: React.FC<DropdownProsp> = ({
  dropdownId,
  name,
  children,
}) => {
  return (
    <select className={styles.Dropdown} name={name} id={dropdownId}>
      {children}
    </select>
  )
}
