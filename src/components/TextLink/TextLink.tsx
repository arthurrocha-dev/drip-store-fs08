import { TextLinkProps } from './TextLink.props'
import { Link } from 'react-router-dom'
import styles from './TextLink.module.css'

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  type,
  ...props
}) => (
  <Link
    className={`
            ${
              type === 'secundary'
                ? styles.TextLinkSecondary
                : type === 'tertiary'
                ? styles.TextLinkTertiary
                : styles.TextLink
            }`}
    {...props}
  >
    {children}
  </Link>
)
