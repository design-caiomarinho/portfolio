# Portfólio — Caio Marinho

Site estático em [Astro](https://astro.build), em inglês (`/`) e português (`/pt/`).

## Comandos

| Comando           | Ação                                       |
| :---------------- | :----------------------------------------- |
| `npm install`     | Instala as dependências                    |
| `npm run dev`     | Servidor local em `localhost:4321`         |
| `npm run build`   | Gera o site em `./dist/`                   |
| `npm run preview` | Abre o build local antes de publicar       |

Node 22.23.4 ou mais novo (`.node-version` aponta para o 24).

## Estrutura

- `src/pages/[...lang]/` — rotas (home, about, cases). Uma única página gera EN e PT.
- `src/i18n/` — textos: `index.ts` (compartilhados), `about.ts`, `praieros.ts` (um arquivo por case).
- `src/styles/tokens.css` — espelho das variáveis do Figma (mantenha os dois iguais).
- `src/components/`, `src/layouts/` — header, hero, footer, transição de página, layout de case.
- `public/` — imagens dos cases, ícones, fontes, `robots.txt` e `_headers` (cache do Cloudflare).

## Publicar no Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Variável opcional: `NODE_VERSION` (se não usar o `.node-version`)

## Pendências antes de publicar

- Link do currículo (`#resume` no menu, em `src/i18n/index.ts`).
- Links do app Praieros (`liveUrl` em `src/pages/[...lang]/projects/praieros.astro`).
- Definir `site` no `astro.config.mjs` com o domínio final (ativa `hreflang` e URLs absolutas).
