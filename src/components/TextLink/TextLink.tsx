import { TextLinkProps } from "./TextLink.props"
import styles from './TextLink.module.css'

export const TextLink: React.FC<TextLinkProps> = ({text}) => {
    return(
        <p className={styles.TextLink}>{text}</p>
    )
}