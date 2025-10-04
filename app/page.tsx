import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products } from "@/data/products"

function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  )
}

function PackageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  )
}

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.rank && p.rank <= 3).sort((a, b) => (a.rank || 0) - (b.rank || 0))

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
<section
  className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40"
  style={{
    backgroundImage: "url('/backgrounds/logo-watermark.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // faz a marca ficar grandona sem cortar: limita a 85vw ou 1000px
    backgroundSize: "min(1000px, 85vw)",
  }}
>
  <div className="container relative z-10 mx-auto px-4">
    <div className="mx-auto max-w-4xl">
      {/* Eyebrow text */}
      <div className="mb-6 flex items-center justify-center gap-2 md:justify-start">
        <div className="h-px w-12 bg-primary" />
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Autêntico • Saboroso • Brasileiro
        </span>
      </div>

      {/* Main headline */}
      <h1 className="font-serif text-5xl font-black leading-[1.1] text-balance text-gray-900 md:text-6xl lg:text-7xl">
        O sabor do Brasil
        <br />
        <span className="text-primary">na sua mesa.</span>
      </h1>

      {/* Subheadline */}
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-700 text-pretty md:text-xl">
        Descubra produtos brasileiros autênticos, cuidadosamente selecionados para trazer a essência da culinária
        brasileira direto para você. Da Amazônia à sua cozinha.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="group h-14 text-base font-bold shadow-lg transition-all hover:shadow-xl"
        >
          <Link href="/products" className="gap-2">
            Explorar Produtos
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-14 border-2 border-gray-300 bg-transparent text-base font-bold text-gray-900 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
        >
          <Link href="/about">Nossa História</Link>
        </Button>
      </div>

      {/* Social proof / stats */}
      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
        <div>
          <div className="font-serif text-3xl font-black text-primary md:text-4xl">100+</div>
          <div className="mt-1 text-sm font-medium text-gray-600">Produtos Únicos</div>
        </div>
        <div>
          <div className="font-serif text-3xl font-black text-primary md:text-4xl">5★</div>
          <div className="mt-1 text-sm font-medium text-gray-600">Avaliação Média</div>
        </div>
        <div>
          <div className="font-serif text-3xl font-black text-primary md:text-4xl">24h</div>
          <div className="mt-1 text-sm font-medium text-gray-600">Envio Rápido</div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Trust Badges */}
      <section className="border-b border-border bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center md:gap-12">
            <div className="flex items-center gap-3">
              <PackageIcon />
              <span className="font-medium">Disponível na Amazon</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldIcon />
              <span className="font-medium">Checkout Square Seguro</span>
            </div>
            <div className="flex items-center gap-3">
              <TruckIcon />
              <span className="font-medium">Envio para os EUA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-black text-balance md:text-4xl">Produtos em Destaque</h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">Os favoritos da nossa comunidade</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="font-semibold bg-transparent">
              <Link href="/products">
                Ver Todos os Produtos
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-black text-balance md:text-4xl">
            Quer receber os itens essenciais do Brasil todo mês?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90 text-pretty">
            Entre em contato conosco para saber mais sobre nossos planos de assinatura e ofertas especiais.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 text-base font-semibold">
            <a href="mailto:contato@brzfoods.com">Fale Conosco</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
