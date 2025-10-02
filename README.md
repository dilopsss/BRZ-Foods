# BRZ FOODS

Sabores autênticos do Brasil para os Estados Unidos.

## 🚀 Como Rodar Localmente

\`\`\`bash
# Instalar dependências
npm install
# ou
pnpm install

# Rodar em desenvolvimento
npm run dev
# ou
pnpm dev
\`\`\`

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Comandos

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🛠️ Editar Produtos

Para adicionar, editar ou remover produtos, edite o arquivo:

\`\`\`
data/products.ts
\`\`\`

Cada produto segue esta estrutura:

\`\`\`typescript
{
  id: string,
  name: string,
  description: string,
  image: string,
  category: "Chocolates" | "Laticinios" | "Temperos" | "Cereais" | "Outros",
  amazonUrl: string,
  squareUrl?: string,
  price?: number,
  rank?: number,
  badge?: string
}
\`\`\`

## 🔗 Atualizar Links

### Links da Amazon
Edite o campo `amazonUrl` em cada produto no arquivo `data/products.ts`.

### Links do Square
Edite o campo `squareUrl` em cada produto no arquivo `data/products.ts`.

## 🎨 Personalizar Cores e Fontes

### Cores
As cores do tema estão definidas em `app/globals.css`. As cores principais são:

- `--primary`: Verde Brasil (#009739)
- `--secondary`: Amarelo Ouro (#FFCC29)
- `--accent`: Azul Bandeira (#002776)

### Fontes
As fontes são configuradas em `app/layout.tsx`:

- **Montserrat**: Títulos e logo (font-serif)
- **Poppins**: Textos do corpo (font-sans)

## 📱 Deploy

Este projeto está pronto para deploy na Vercel:

\`\`\`bash
vercel
\`\`\`

Ou conecte seu repositório GitHub à Vercel para deploys automáticos.

## 📄 Licença

© 2025 BRZ FOODS. Todos os direitos reservados.
