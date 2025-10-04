import Link from "next/link"
import Image from "next/image"

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 fill-current"
    >
      {/* moldura */}
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7z"/>
      {/* lente */}
      <path d="M12 7.5A4.5 4.5 0 1 1 7.5 12 4.51 4.51 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5z"/>
      {/* flash */}
      <circle cx="17.5" cy="6.5" r="1.2" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 stroke-current"
      fill="none"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <path d="M3 7l9 6 9-6"></path>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" aria-label="BRZ Foods — Início" className="flex items-center">
              <Image
                src="/logos/logo-brzfoods.svg"
                alt="BRZ Foods"
                width={200}
                height={60}
                priority
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Sabores autênticos do Brasil para os EUA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground transition-colors hover:text-primary">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contato
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-muted-foreground transition-colors hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#shipping" className="text-muted-foreground transition-colors hover:text-primary">
                  Envio
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold">Redes Sociais</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/brzfoods"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
                aria-label="Instagram da BRZ Foods"
                title="@brzfoods"
              >
                <InstagramIcon />
              </a>
              <a
                href="mailto:brzfoods@outlook.com"
                className="text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
                aria-label="Enviar e-mail para BRZ Foods"
                title="brzfoods@outlook.com"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BRZ FOODS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}