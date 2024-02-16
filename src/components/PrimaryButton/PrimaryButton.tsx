import { PrimaryButtonProps } from './PrimaryButton.props'
import styles from './PrimaryButton.module.css'

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
    
    const isDesabled = false
    
    return(
        <button className={`${styles.PrimaryButton} ${isDesabled ? styles.disabled : ''}`}>{text}</button>
    )
}   