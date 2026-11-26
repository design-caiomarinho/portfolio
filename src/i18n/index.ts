/*
 * i18n do site. Inglês é o idioma padrão (sem prefixo na URL); o português
 * vive em /pt/. Os textos compartilhados (header, hero, footer…) ficam em `ui`;
 * o conteúdo de cada case fica em seu próprio arquivo (ex.: ./praieros.ts).
 */
export const languages = ["en", "pt"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "en";

/** Valor do atributo `lang` do <html> e do hreflang. */
export const htmlLang: Record<Lang, string> = { en: "en", pt: "pt-BR" };

const ui = {
  en: {
    site: {
      description: "Caio Marinho's portfolio — design and development of digital products.",
    },
    header: {
      nav: [
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "Resume", href: "#resume" },
      ],
      navLabel: "Main",
      menuLabel: "Main menu",
      languageLabel: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      back: "Back to projects",
    },
    hero: {
      title: ["Beautiful design is easy.", "Hard is solving problems without making new ones"],
      // true: o bloco encolhe até a maior linha do título, aproximando a nota digitada
      fit: true,
      // A nota é "digitada" com um erro proposital: before + wrong, apaga wrong, digita after.
      note: { before: " I do bo", wrong: "ht", after: "th." },
    },
    project: {
      next: "Next case",
      preview: (title: string) => `Preview of the ${title} project`,
      sectionsLabel: "Sections",
      sources: (n: number) => `${n} ${n === 1 ? "source" : "sources"}`,
    },
    footer: ["All rights reserved."],
  },
  pt: {
    site: {
      description: "Portfólio de Caio Marinho — design e desenvolvimento de produtos digitais.",
    },
    header: {
      nav: [
        { label: "Projetos", href: "#projects" },
        { label: "Sobre", href: "#about" },
        { label: "Currículo", href: "#resume" },
      ],
      navLabel: "Principal",
      menuLabel: "Menu principal",
      languageLabel: "Idioma",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      back: "Voltar aos projetos",
    },
    hero: {
      title: ["Design bonito é fácil.", "O difícil é resolver problemas sem criar novos"],
      fit: true,
      note: { before: " Eu faço os do", wrong: "si", after: "is." },
    },
    project: {
      next: "Próximo case",
      preview: (title: string) => `Prévia do projeto ${title}`,
      sectionsLabel: "Seções",
      sources: (n: number) => `${n} ${n === 1 ? "fonte" : "fontes"}`,
    },
    footer: ["Todos os direitos reservados."],
  },
} satisfies Record<Lang, unknown>;

export type UI = (typeof ui)["en"];

export function useUI(lang: Lang): UI {
  return ui[lang];
}

/** Idioma da página a partir da URL (/pt/... → pt; o resto → padrão). */
export function getLang(url: URL): Lang {
  return /^\/pt(\/|$)/.test(url.pathname) ? "pt" : defaultLang;
}

/** Caminho no idioma pedido: localizedPath("pt", "/projects/x") → "/pt/projects/x". */
export function localizedPath(lang: Lang, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === "/" ? `/${lang}/` : `/${lang}${clean}`;
}

/** A mesma página da URL atual, no outro idioma (alvo do seletor de idioma). */
export function switchPath(url: URL, target: Lang): string {
  const rest = url.pathname.replace(/^\/pt(?=\/|$)/, "") || "/";
  return localizedPath(target, rest);
}

/** Para getStaticPaths das rotas `[...lang]`: en sem prefixo, pt em /pt/. */
export function langPaths() {
  return languages.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
  }));
}
