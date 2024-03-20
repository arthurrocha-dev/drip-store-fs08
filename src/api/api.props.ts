export interface ProductApiModel {
  id: number
  urlImg: string
  listUrlImg: string[]
  name: string
  department: string
  price: number
  assessment: number
  discountValue: number
  trending: boolean
  brand: string
  listOfSize: []
  category: string
  gender: string
  state: string
  description: string
}

export interface SalesResult {
  title: string
  subtitle: string
  description: string
}
