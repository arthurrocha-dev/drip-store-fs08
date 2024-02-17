import { TextLinkProps } from "./TextLink.props"
import { Link } from "react-router-dom"
import styles from './TextLink.module.css'

export const TextLink: React.FC<TextLinkProps> = ({children, secondary, ...props}) => {
    return(
        <Link className={`${secondary ? styles.TextLinkSecondary : styles.TextLink}`} {...props}>
            {children}
        </Link>
    )
}