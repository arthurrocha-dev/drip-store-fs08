export interface CardProductProps {
  urlImg?: string
  name?: string
  price?: number
  discountValue?: number
  category?: string
  department?: string
  brand?: string
  gender?: string
  estate?: string
  highlighted?: boolean
  onClick?: () => void
}
