import { LinkProps } from 'react-router-dom'

export interface TextLinkProps extends LinkProps {
  children?: React.ReactNode
  type?: 'secundary' | 'tertiary'
  onClick?: () => void
}
