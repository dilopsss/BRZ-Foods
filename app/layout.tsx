import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "BRZ FOODS — Sabores autênticos do Brasil",
  description: "Produtos brasileiros selecionados. Compre na Amazon ou direto via Square. Envio para os EUA.",
  keywords: ["produtos brasileiros", "comida brasileira", "Brazilian food", "Brazilian products", "USA"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "BRZ FOODS — Sabores autênticos do Brasil",
    description: "Produtos brasileiros selecionados. Compre na Amazon ou direto via Square.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BRZ FOODS - Authentic Brazilian Products",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${montserrat.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
