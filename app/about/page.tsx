import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Target, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-black text-balance md:text-5xl">Sobre a BRZ FOODS</h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Levando o sabor do Brasil para os Estados Unidos
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 aspect-[21/9] w-full overflow-hidden rounded-lg">
          <Image src="/brazilian-grocery-store-colorful-products.jpg" alt="BRZ FOODS Store" fill className="object-cover" />
        </div>

        {/* Story */}
        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl font-bold text-balance">Nossa História</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              A BRZ FOODS nasceu em Everett, Massachusetts, com uma missão simples mas poderosa: trazer os sabores
              autênticos do Brasil para a comunidade brasileira e amantes da cultura brasileira nos Estados Unidos.
            </p>
            <p>
              O que começou como um pequeno mercado local cresceu para se tornar uma referência em produtos brasileiros
              de qualidade. Hoje, além de nossa loja física, oferecemos nossos produtos através da Amazon e de nosso
              próprio sistema de checkout online, facilitando o acesso aos sabores que você ama.
            </p>
            <p>
              Cada produto é cuidadosamente selecionado para garantir autenticidade e qualidade. De chocolates e
              temperos a laticínios e cereais, trazemos o melhor do Brasil diretamente para sua casa.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold">Nossa Jornada</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold">Mercado em Everett</h3>
                <p className="text-muted-foreground">
                  Começamos como um mercado local, servindo a comunidade brasileira em Massachusetts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                  <Target className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold">Loja Amazon</h3>
                <p className="text-muted-foreground">
                  Expandimos para a Amazon, alcançando clientes em todo os Estados Unidos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <TrendingUp className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold">Site Próprio</h3>
                <p className="text-muted-foreground">
                  Lançamos nosso site com checkout direto via Square para melhor servir você.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h2 className="mb-4 font-serif text-2xl font-bold">Nossa Missão</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Conectar brasileiros e amantes da cultura brasileira nos EUA com os produtos autênticos que trazem
              memórias e sabores de casa, oferecendo qualidade, conveniência e o melhor atendimento.
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-serif text-2xl font-bold">Nossa Visão</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ser a principal referência em produtos brasileiros nos Estados Unidos, expandindo nossa presença e levando
              a riqueza da cultura brasileira para cada vez mais pessoas ao redor do mundo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
