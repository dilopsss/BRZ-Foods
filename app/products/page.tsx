"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"

const categories = ["Todos", "Chocolates", "Laticinios", "Temperos", "Cereais", "Outros"] as const

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")

  const filteredProducts =
    selectedCategory === "Todos" ? products : products.filter((p) => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => (a.rank || 999) - (b.rank || 999))

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-black text-balance md:text-5xl">Nossos Produtos</h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Explore nossa seleção de produtos brasileiros autênticos
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="font-semibold"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
