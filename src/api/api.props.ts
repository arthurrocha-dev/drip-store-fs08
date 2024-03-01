export interface ProductsListResult {
  id: number
  urlImg: string
  name: string
  department: string
  price: number
  discountValue: number
  trending: boolean
}

export interface SalesResult {
  title: string
  subtitle: string
  description: string
}
