import { TextLinkProps } from "./TextLink.props"
import styles from './TextLink.module.css'

export const TextLink: React.FC<TextLinkProps> = ({text,secondary}) => {
    return(
        <p className={
            `${secondary ? styles.TextLinkSecondary 
                : styles.TextLink}
        `}>
            {text}
        </p>
    )
}