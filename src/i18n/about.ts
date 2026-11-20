import type { Lang } from "./index";

/*
 * Conteúdo da página About nos dois idiomas. A página
 * (src/pages/[...lang]/about.astro) só escolhe `about[lang]`.
 * Links e e-mail ficam em `contact`, iguais nos dois idiomas.
 */
export const contact = {
  email: "design.caiomarinho@gmail.com",
  linkedin: "https://www.linkedin.com/in/caiovmss/",
  github: "https://github.com/design-caiomarinho/",
};

const en = {
  title: "About — Caio Marinho",
  description: "Caio Marinho is an end-to-end Product Designer with a soft spot for complicated products.",
  hero: {
    title: "I design the logic behind the screen",
    text: "End-to-end Product Designer with a soft spot for complicated products.",
    copyEmail: "Copy email",
    copied: "Copied!",
  },
  intro:
    "Four years in, my strength is still the space between UX and UI. I’m drawn to the beginning of a project, when the context is still unclear and the questions matter most. I choose the method to fit the problem, not the other way around, and carry what I learn all the way into the interface, down to the details that make it feel finished.",
  sections: [
    {
      title: "In my current role",
      text: "I currently work on B2B platforms for operations teams, in a company where UX is still taking shape. That means a lot of my work starts before the screen: asking what the problem really is, organizing how things connect, and making the reasoning behind each decision clear to the people who build it.",
    },
    {
      title: "My process",
      text: "I like mapping how things connect and finding where the flow breaks. Most of all, I like the moment when, somewhere in the research, I learn something new that changes how I see the problem. That’s usually when I know what’s worth building, what can wait, and what to leave out. Then I take it to the team with the reasoning behind it, so the decision doesn’t rest on taste. Overthinking comes in handy here.",
    },
    {
      title: "When I'm not designing",
      text: "Even after I log off, I’m usually watching movies, photographing places, or cooking something. Believe it or not, there’s still a designer in that scene: I notice the framing, the pacing, the plating.",
    },
  ],
  experienceLabel: "Experience",
  experience: [
    { period: "Now", company: "Ingenium Systems", role: "Product designer" },
    { period: "2024", company: "Adiante Studio", role: "Freelancer Product Designer" },
    { period: "2023", company: "TOliveira", role: "Product Designer" },
    { period: "2022", company: "Usina Digital", role: "Art Director" },
  ],
  links: { linkedin: "LinkedIn", email: "Email", github: "Github" },
};

const pt: typeof en = {
  title: "Sobre — Caio Marinho",
  description:
    "Caio Marinho é Product Designer end-to-end, com um fraco por produtos complicados.",
  hero: {
    title: "Eu desenho a lógica por trás da tela",
    text: "Product Designer end-to-end com um fraco por produtos complicados.",
    copyEmail: "Copiar email",
    copied: "Copiado!",
  },
  intro:
    "Depois de quatro anos, meu ponto forte ainda é o espaço entre UX e UI. Me atrai o começo de um projeto, quando o contexto ainda está confuso e as perguntas pesam mais. Escolho o método conforme o problema, e não o contrário, e levo o que aprendo até a interface, até os detalhes que fazem o produto parecer acabado.",
  sections: [
    {
      title: "No meu trabalho atual",
      text: "Hoje trabalho em plataformas B2B para times de operações, numa empresa onde o UX ainda está se formando. Isso significa que boa parte do meu trabalho começa antes da tela: perguntar qual é o problema de verdade, organizar como as coisas se conectam e deixar claro o raciocínio por trás de cada decisão para quem vai construir.",
    },
    {
      title: "Meu processo",
      text: "Gosto de mapear como as coisas se conectam e achar onde o fluxo quebra. Mais do que tudo, gosto do momento em que, no meio da pesquisa, aprendo algo novo que muda como enxergo o problema. É geralmente aí que sei o que vale construir, o que pode esperar e o que deixar de fora. Depois levo isso ao time com o raciocínio por trás, para que a decisão não dependa de gosto. Pensar demais ajuda aqui.",
    },
    {
      title: "Quando não estou desenhando",
      text: "Mesmo depois de desligar o computador, geralmente estou vendo filmes, fotografando lugares ou cozinhando. Acredite ou não, ainda há um designer nessa cena: reparo no enquadramento, no ritmo, no empratamento.",
    },
  ],
  experienceLabel: "Experiência",
  experience: [
    { period: "Agora", company: "Ingenium Systems", role: "Product Designer" },
    { period: "2024", company: "Adiante Studio", role: "Product Designer freelancer" },
    { period: "2023", company: "TOliveira", role: "Product Designer" },
    { period: "2022", company: "Usina Digital", role: "Diretor de Arte" },
  ],
  links: { linkedin: "LinkedIn", email: "Email", github: "Github" },
};

export const about: Record<Lang, typeof en> = { en, pt };
