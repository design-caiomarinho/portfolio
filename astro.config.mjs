// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Inglês em / e português em /pt/ (as rotas vivem em src/pages/[...lang]/)
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
});
