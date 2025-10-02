export type Product = {
  id: string
  name: string
  description: string
  image: string
  category: "Chocolates" | "Laticinios" | "Temperos" | "Cereais" | "Outros"
  amazonUrl: string
  squareUrl?: string
  price?: number
  rank?: number
  badge?: string
}
