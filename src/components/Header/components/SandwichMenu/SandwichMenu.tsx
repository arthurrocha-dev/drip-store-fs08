import { IoMdMenu } from 'react-icons/io'
import styles from './SandwichMenu.module.css'
import { SandwichMenuProps } from './SandwichMenu.props'

export const SandwichMenu: React.FC<SandwichMenuProps> = ({ onClick }) => {
  return (
    <>
      <IoMdMenu className={styles.SandwichMenuIcon} onClick={onClick} />
    </>
  )
}
