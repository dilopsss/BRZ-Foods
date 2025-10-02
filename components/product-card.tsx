"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import type { Product } from "@/lib/types"
import { formatPrice, openSquareCheckout } from "@/lib/utils/square"

function ShoppingCartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  )
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.badge && (
            <Badge className="absolute right-2 top-2 bg-secondary text-secondary-foreground">{product.badge}</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-serif text-lg text-balance">{product.name}</CardTitle>
        <CardDescription className="mt-2 text-pretty">{product.description}</CardDescription>
        {product.price && (
          <p className="mt-3 font-serif text-xl font-bold text-primary">{formatPrice(product.price)}</p>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-4 pt-0">
        <Button asChild className="w-full font-semibold" size="lg">
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Comprar ${product.name} na Amazon`}
          >
            <ShoppingCartIcon />
            <span className="ml-2">Comprar na Amazon</span>
          </a>
        </Button>
        {product.squareUrl && (
          <Button
            variant="outline"
            className="w-full font-semibold bg-transparent"
            size="lg"
            onClick={() => openSquareCheckout(product.squareUrl!)}
            aria-label={`Comprar ${product.name} direto via Square`}
          >
            <ExternalLinkIcon />
            <span className="ml-2">Comprar Direto</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
