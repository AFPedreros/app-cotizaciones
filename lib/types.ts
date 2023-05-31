export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export interface Product {
  name: string
  id: number
  price: number
  description: string
  url: string
}
