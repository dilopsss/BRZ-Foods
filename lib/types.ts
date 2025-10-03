export type Product = {
  id: string
  name: string
  description: string

  // pode ter só uma imagem…
  image?: string

  // …ou várias imagens
  images?: string[]

  category: "Chocolates" | "Laticinios" | "Temperos" | "Cereais" | "Outros"

  amazonUrl?: string
  squareUrl?: string

  price: number
  rank?: number
  badge?: string
}