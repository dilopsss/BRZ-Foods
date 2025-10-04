import Link from "next/link"
import Image from "next/image"

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
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
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
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
                <a
                  href="/#contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/#shipping"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Envio
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-bold">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/brzfoods/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Instagram da BRZ Foods"
              >
                <InstagramIcon />
              </a>
              <a
                href="mailto:brzfoods@outlook.com"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Enviar e-mail para BRZ Foods"
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