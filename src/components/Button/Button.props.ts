export interface ButtonProps {
  text: string
  disabled?: boolean
  type?: 'secondary' | 'shop'
  onClick?: () => void
  to?: string
}
