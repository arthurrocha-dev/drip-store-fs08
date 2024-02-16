import { TextLinkSecondaryProps } from "./TextLinkSecondary.props"
import styles from './TextLinkSecondary.module.css'

export const TextLinkSecondary: React.FC<TextLinkSecondaryProps> = ({text}) => {
    return(
        <p className={styles.TextLinkSecondary}>{text}</p>
    )
}