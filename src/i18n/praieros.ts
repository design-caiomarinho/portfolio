import type { Lang } from "./index";

/*
 * Conteúdo do case Praieros nos dois idiomas. A estrutura é a mesma; a página
 * (src/pages/[...lang]/projects/praieros.astro) só escolhe `praieros[lang]`.
 * Ids de seção (overview, context…) ficam fixos: são âncoras, não texto.
 */
const en = {
  title: "Praieros — Caio Marinho",
  description:
    "Case: Praieros, a web app that makes the water quality of Salvador's beaches readable in seconds.",
  meta: "Web App, 2026",
  sections: {
    overview: "Overview",
    context: "Context",
    problem: "Problem",
    solution: "Solution",
    uiHighlights: "UI Highlights",
    process: "Process",
    outcome: "Outcome",
  },
  hero: {
    // Linhas do h1: quebra manual onde o texto pede (cada linha ainda quebra se faltar espaço)
    title: ["Beach water quality, readable in seconds"],
    alt: "The Praieros map with the water status of each beach in Salvador",
    meta: [
      { label: "Role", lines: ["Product Designer,", "UX Researcher"] },
      { label: "Timeline", lines: ["2026"] },
      { label: "Type", lines: ["Public Health", "B2C", "Web App"] },
    ],
    notice: {
      text: "A quick heads-up: this case is about a 6-minute read. I would really like to show you how I made each decision, not just how the screens look. Thanks for taking the time.",
      hint: "Short on time?",
      links: ["UI highlights", "Solution", "Outcome"],
    },
  },
  overview: {
    title: "You are about to leave for the beach. Is the water okay today?",
    paragraphs: [
      "Inema answers this every week, for 38 points in Salvador. But the answer is a PDF with 38 lines and the date the bulletin was issued, not the date of collection. I could not tell how recent a result was.",
      "Praieros is my answer: check a beach in seconds, with the gaps in the data in plain sight. It is an independent project that uses only public data. AI supported the development, but only after careful research and human-made rules and decisions.",
    ],
  },
  context: {
    intro: [
      "Inema is the environment institute of Bahia. Every week, it collects water at 38 points in Salvador and publishes the result as a PDF. I am not part of Inema, and this project has no link with it.",
      "The method is serious. Each point is classified using five weeks in a row of samples, based on a national rule (CONAMA 274/2000). But the bulletin reduces all of that to one word: Suitable or Unsuitable.",
    ],
    bulletinAlt:
      "Excerpt of Inema's Water Quality Bulletin: a table of collection points with a Suitable or Unsuitable status",
    bulletinCaption:
      "Source: Inema, Water Quality Bulletin no. 35/2026, Salvador, Oct 23, 2026. Excerpt.",
    after: [
      "What the reader finds is a table. Each line has a point, a code, a short description of the place and a status. There is no collection date, no measurement and no reason why a point is unsuitable.",
      "There is also an official app, Vai Dar Praia. It makes finding a beach easier, but in the screens I reviewed, the status comes without a date.",
    ],
    statement:
      "The information is out there. But if you are not an expert, it is hard to reach and even harder to understand.",
  },
  problem: {
    title: "Some people never find the bulletin. Those who do can misread it",
    text: "I looked at what was already public: 44 notes from local press, reviews of the official app, access data and studies from other places. I grouped them into six themes and labeled how strong each one is. This is what they showed.",
    mapAlt: "Affinity map: 44 research notes clustered into 13 groups and six themes",
    mapCaption: "44 notes in 13 groups and six themes; 2 stayed ungrouped.",
    cards: [
      {
        label: "Partial",
        title: "Many do not know the day’s status",
        text: "Nothing at the beach tells people the result.",
        sources: 5,
      },
      {
        label: "Supported",
        title: "The result is easy to misread",
        text: "No collection date. Press explained “Unsuitable”.",
        sources: 5,
      },
      {
        label: "Supported",
        title: "Access fails, and the data has gaps",
        text: "Reports of outages and interrupted monitoring.",
        sources: 7,
      },
    ],
    cardsCaption: "Partial: few sources. Supported: many sources that agree.",
    quoteLabel: "The problem, in one sentence",
    quote:
      "People who decide to go to a beach in Salvador need to know, before leaving home, if the point they plan to visit is good and how recent that information is. Without it, they go without knowing what they should, or give up a beach because of a label they misunderstood.",
    closing:
      "I do not know how many people this affects. The impact is not measured, and a few beliefs that started from my own experience stay labeled as assumptions.",
  },
  solution: {
    title: "One page per beach. The answer first, its limits beside it.",
    text: "Praieros is a web app. It opens on a map, and each beach has its own page with the status, the point it refers to, the date of the bulletin and where the data comes from.",
    pageAlt:
      "A Praieros beach page: status, collection point, bulletin date, rain warning and source in one panel",
    pageCaption: "Status, collection point, bulletin date, rain warning and source, in one panel.",
    cards: [
      {
        label: "Decision 1",
        title: "Point and date sit beside the status",
        text: "A result is from one point, not the beach.",
      },
      {
        label: "Decision 2",
        title: "What is missing is said out loud",
        text: "No collection date? The page says so.",
      },
      {
        label: "Decision 3",
        title: "Rain warning sits with the status",
        text: "Not buried at the end of the bulletin.",
      },
    ],
    cardsCaption:
      "Every screen says Praieros is not an official channel and shows where the data comes from.",
  },
  ui: {
    title: "A closer look at the decisions",
    text: "A selection of screens from the Figma file and the live app.",
    mapAlt: "The map is the first screen, showing the status of each beach",
    mapCaption: "The map is the first screen, with the status of each beach.",
    markerAlt: "Mobile map where a single marker cycles through each status",
    markerCaption: "One marker shows each status in turn.",
    searchAlt: "Mobile search by neighborhood listing its beaches",
    searchCaption: "Search by neighborhood lists its beaches.",
    termsAlt:
      "The “How to read” screen with official terms explained in plain words and a “not official” notice",
    termsCaption: "Terms explained in plain words, with a clear “not official” notice.",
    noResultAlt: "A beach missing from the bulletin showing “No result”",
    noResultCaption: "A beach missing from the bulletin shows “No result”, never “Suitable”.",
    kitAlt: "The Praieros UI kit, documented in eight sections",
    kitCaption: "A complete UI kit, documented in eight sections.",
    live: "Try it live",
  },
  process: {
    title: "Four steps, and six rules that decided what stayed.",
    steps: [
      {
        label: "01 / Discovery",
        title: "The gaps are in the bulletin itself",
        text: "Evaluating the bulletin and the official app, I found 14 problems, from the missing collection date to a label that is hard to understand. Two other sites, CETESB and Beachwatch, already show when the sample was taken. The format was set here: a responsive web app.",
      },
      {
        label: "02 / Define",
        title: "The gaps are in the bulletin itself",
        text: "The themes became four needs and eight questions. Three questions moved on: the status of the day, date and point in plain language, and access that works. One was left out because it depends on Inema, and the source does not promise updates.",
      },
      {
        label: "03 / Ideate",
        title: "The gaps are in the bulletin itself",
        text: "Of 24 ideas, 10 passed the six rules, 11 passed with changes and 3 were cut. Two would weaken the “Unsuitable” alert, and a QR code at the beach would look like official signage. Eight of the 11 changes were about date, source or freshness.",
      },
      {
        label: "04 / Design",
        title: "Every path ends at the same beach page",
        text: "Through the map, the search or a shared link, people land on the beach page, so it had to be the most careful screen. Two system cases keep the task going without an error screen: an old bulletin and a point with no result. In total, 25 desktop screens, each with its mobile version.",
      },
    ],
    rulesIntro:
      "I wrote the rules before generating ideas. Every idea had to pass them before it was ranked.",
    rules: [
      "No official link with Inema, stated in the interface.",
      "Only public data. No new data.",
      "Every screen shows the source and the bulletin date.",
      "Never more current or complete than it is.",
      "The translation must not distort the technical meaning.",
      "No alarmism, no false safety.",
    ],
  },
  outcome: {
    title: "Same data, readable before you leave home",
    text: "Four decisions carry most of the project. Each one answers a finding from the research.",
    heads: ["The problem", "What I built"] as [string, string],
    rows: [
      {
        problem: "Most people never look for the bulletin",
        title: "A page for each beach, reachable by link",
        text: "The map is the home screen. Each beach has its own link, with a preview that shows status, point, date and “not official”.",
      },
      {
        problem: "The result is easy to misread",
        title: "Every result shows its own limits",
        text: "Status, point and bulletin date always appear together. What the source does not give, like the collection date, is stated on the page.",
      },
      {
        problem: "A label that is hard to understand",
        title: "Official terms, in plain language",
        text: "A “How to read” screen puts the official definition next to each term, so the translation does not distort it.",
      },
      {
        problem: "Access fails, and the data has gaps",
        title: "A system that does not break when the data does",
        text: "An old bulletin raises an alert, and a point with no result has its own state. The task never ends in an error screen.",
      },
    ],
    nextLabel: "What comes next",
    nextText:
      "Praieros is built to keep evolving, and the research continues with it. It already points to the next questions to answer with real people.",
    nextQuestions: [
      "Does the beach page work without opening the original bulletin?",
      "Does the card before the page help, or is it one more step?",
      "Who does the bulletin not reach, beyond visitors and crowded beaches?",
    ],
    takeawayLabel: "What I take from this",
    takeaway: "A good designer solves the problem, and prepares for the next ones.",
    closing:
      "The bulletin has no collection date, and I could not fix that. So the page says it. The same attitude guides what comes next: name what is unknown, then research it.",
    open: "Open Praieros",
  },
};

export type PraierosCopy = typeof en;

const pt: PraierosCopy = {
  title: "Praieros — Caio Marinho",
  description:
    "Case: Praieros, um web app que torna a qualidade da água das praias de Salvador legível em segundos.",
  meta: "Web App, 2026",
  sections: {
    overview: "Visão geral",
    context: "Contexto",
    problem: "Problema",
    solution: "Solução",
    uiHighlights: "Destaques de UI",
    process: "Processo",
    outcome: "Resultado",
  },
  hero: {
    title: ["A qualidade da água das praias,", "legível em segundos"],
    alt: "O mapa do Praieros com a situação da água de cada praia de Salvador",
    meta: [
      { label: "Função", lines: ["Product Designer,", "UX Researcher"] },
      { label: "Período", lines: ["2026"] },
      { label: "Tipo", lines: ["Saúde pública", "B2C", "Web App"] },
    ],
    notice: {
      text: "Um aviso rápido: este case leva cerca de 6 minutos para ler. Quero mostrar como tomei cada decisão, e não só como as telas ficaram. Obrigado pelo seu tempo.",
      hint: "Sem tempo?",
      links: ["Destaques de UI", "Solução", "Resultado"],
    },
  },
  overview: {
    title: "Você está saindo para a praia. A água está boa hoje?",
    paragraphs: [
      "O Inema responde isso toda semana, para 38 pontos em Salvador. Mas a resposta é um PDF com 38 linhas e a data em que o boletim foi emitido, não a data da coleta. Eu não conseguia saber quão recente era um resultado.",
      "O Praieros é a minha resposta: consultar uma praia em segundos, com as lacunas dos dados à vista. É um projeto independente que usa apenas dados públicos. A IA apoiou o desenvolvimento, mas só depois de uma pesquisa cuidadosa e de regras e decisões feitas por pessoas.",
    ],
  },
  context: {
    intro: [
      "O Inema é o instituto do meio ambiente da Bahia. Toda semana, ele coleta água em 38 pontos de Salvador e publica o resultado em PDF. Eu não faço parte do Inema, e este projeto não tem nenhum vínculo com ele.",
      "O método é sério. Cada ponto é classificado com cinco semanas seguidas de amostras, com base em uma norma nacional (CONAMA 274/2000). Mas o boletim reduz tudo isso a uma palavra: Própria ou Imprópria.",
    ],
    bulletinAlt:
      "Trecho do Boletim de Qualidade da Água do Inema: uma tabela de pontos de coleta com status Própria ou Imprópria",
    bulletinCaption:
      "Fonte: Inema, Boletim de Qualidade da Água nº 35/2026, Salvador, 23 de out. de 2026. Trecho.",
    after: [
      "O que o leitor encontra é uma tabela. Cada linha tem um ponto, um código, uma breve descrição do lugar e um status. Não há data de coleta, nem medição, nem o motivo de um ponto estar impróprio.",
      "Existe também um app oficial, o Vai Dar Praia. Ele facilita encontrar uma praia, mas, nas telas que analisei, o status vem sem data.",
    ],
    statement:
      "A informação está lá. Mas, se você não é especialista, ela é difícil de alcançar e ainda mais difícil de entender.",
  },
  problem: {
    title: "Algumas pessoas nunca encontram o boletim. Quem encontra pode interpretá-lo mal",
    text: "Analisei o que já era público: 44 notas da imprensa local, avaliações do app oficial, dados de acesso e estudos de outros lugares. Agrupei tudo em seis temas e indiquei o quanto cada um é consistente. Foi isso que apareceu.",
    mapAlt: "Mapa de afinidade: 44 notas de pesquisa agrupadas em 13 grupos e seis temas",
    mapCaption: "44 notas em 13 grupos e seis temas; 2 ficaram sem grupo.",
    cards: [
      {
        label: "Parcial",
        title: "Muitos não sabem o status do dia",
        text: "Nada na praia informa o resultado às pessoas.",
        sources: 5,
      },
      {
        label: "Confirmado",
        title: "O resultado é fácil de interpretar mal",
        text: "Sem data de coleta. A imprensa teve de explicar “Impróprio”.",
        sources: 5,
      },
      {
        label: "Confirmado",
        title: "O acesso falha e os dados têm lacunas",
        text: "Relatos de falhas e interrupção do monitoramento.",
        sources: 7,
      },
    ],
    cardsCaption: "Parcial: poucas fontes. Confirmado: muitas fontes que concordam.",
    quoteLabel: "O problema, em uma frase",
    quote:
      "Quem decide ir a uma praia em Salvador precisa saber, antes de sair de casa, se o ponto que pretende visitar está bom e quão recente é essa informação. Sem isso, a pessoa vai sem saber o que deveria, ou desiste de uma praia por causa de um rótulo que entendeu mal.",
    closing:
      "Não sei quantas pessoas isso afeta. O impacto não foi medido, e algumas crenças que nasceram da minha própria experiência continuam marcadas como suposições.",
  },
  solution: {
    title: "Uma página por praia. A resposta primeiro, seus limites ao lado.",
    text: "O Praieros é um web app. Ele abre em um mapa, e cada praia tem sua própria página com o status, o ponto a que se refere, a data do boletim e a origem dos dados.",
    pageAlt:
      "Uma página de praia do Praieros: status, ponto de coleta, data do boletim, aviso de chuva e fonte em um só painel",
    pageCaption:
      "Status, ponto de coleta, data do boletim, aviso de chuva e fonte, em um só painel.",
    cards: [
      {
        label: "Decisão 1",
        title: "Ponto e data ficam ao lado do status",
        text: "Um resultado é de um ponto, não da praia.",
      },
      {
        label: "Decisão 2",
        title: "O que falta é dito claramente",
        text: "Sem data de coleta? A página avisa.",
      },
      {
        label: "Decisão 3",
        title: "O aviso de chuva fica junto do status",
        text: "Não escondido no fim do boletim.",
      },
    ],
    cardsCaption:
      "Toda tela diz que o Praieros não é um canal oficial e mostra de onde vêm os dados.",
  },
  ui: {
    title: "Um olhar de perto sobre as decisões",
    text: "Uma seleção de telas do arquivo no Figma e do app no ar.",
    mapAlt: "O mapa é a primeira tela, mostrando o status de cada praia",
    mapCaption: "O mapa é a primeira tela, com o status de cada praia.",
    markerAlt: "Mapa mobile em que um único marcador percorre cada status",
    markerCaption: "Um marcador mostra cada status, um de cada vez.",
    searchAlt: "Busca mobile por bairro listando suas praias",
    searchCaption: "A busca por bairro lista suas praias.",
    termsAlt:
      "A tela “Como ler”, com os termos oficiais explicados em palavras simples e um aviso de “não oficial”",
    termsCaption: "Termos explicados em palavras simples, com um aviso claro de “não oficial”.",
    noResultAlt: "Uma praia ausente do boletim exibindo “Sem resultado”",
    noResultCaption: "Uma praia ausente do boletim mostra “Sem resultado”, nunca “Própria”.",
    kitAlt: "O UI kit do Praieros, documentado em oito seções",
    kitCaption: "Um UI kit completo, documentado em oito seções.",
    live: "Experimente ao vivo",
  },
  process: {
    title: "Quatro etapas e seis regras que decidiram o que ficou.",
    steps: [
      {
        label: "01 / Descoberta",
        title: "As lacunas estão no próprio boletim",
        text: "Avaliando o boletim e o app oficial, encontrei 14 problemas, desde a falta da data de coleta até um rótulo difícil de entender. Dois outros sites, CETESB e Beachwatch, já mostram quando a amostra foi coletada. O formato foi definido aqui: um web app responsivo.",
      },
      {
        label: "02 / Definição",
        title: "As lacunas estão no próprio boletim",
        text: "Os temas viraram quatro necessidades e oito perguntas. Três perguntas seguiram adiante: o status do dia, data e ponto em linguagem simples, e um acesso que funcione. Uma ficou de fora porque depende do Inema, e a fonte não promete atualizações.",
      },
      {
        label: "03 / Ideação",
        title: "As lacunas estão no próprio boletim",
        text: "De 24 ideias, 10 passaram pelas seis regras, 11 passaram com ajustes e 3 foram cortadas. Duas enfraqueceriam o alerta de “Impróprio”, e um QR code na praia pareceria sinalização oficial. Oito das 11 mudanças eram sobre data, fonte ou atualidade.",
      },
      {
        label: "04 / Design",
        title: "Todo caminho termina na mesma página de praia",
        text: "Pelo mapa, pela busca ou por um link compartilhado, as pessoas chegam à página da praia, então ela precisava ser a tela mais cuidadosa. Dois casos de sistema mantêm a tarefa em andamento sem uma tela de erro: um boletim antigo e um ponto sem resultado. No total, 25 telas desktop, cada uma com sua versão mobile.",
      },
    ],
    rulesIntro:
      "Escrevi as regras antes de gerar ideias. Toda ideia precisava passar por elas antes de ser priorizada.",
    rules: [
      "Nenhum vínculo oficial com o Inema, declarado na interface.",
      "Somente dados públicos. Nenhum dado novo.",
      "Toda tela mostra a fonte e a data do boletim.",
      "Nunca mais atual ou completo do que realmente é.",
      "A tradução não pode distorcer o sentido técnico.",
      "Sem alarmismo, sem falsa segurança.",
    ],
  },
  outcome: {
    title: "Os mesmos dados, legíveis antes de sair de casa",
    text: "Quatro decisões sustentam a maior parte do projeto. Cada uma responde a uma descoberta da pesquisa.",
    heads: ["O problema", "O que eu construí"],
    rows: [
      {
        problem: "A maioria das pessoas nunca procura o boletim",
        title: "Uma página para cada praia, acessível por link",
        text: "O mapa é a tela inicial. Cada praia tem seu próprio link, com uma prévia que mostra status, ponto, data e “não oficial”.",
      },
      {
        problem: "O resultado é fácil de interpretar mal",
        title: "Cada resultado mostra seus próprios limites",
        text: "Status, ponto e data do boletim aparecem sempre juntos. O que a fonte não informa, como a data da coleta, é dito na página.",
      },
      {
        problem: "Um rótulo difícil de entender",
        title: "Termos oficiais, em linguagem simples",
        text: "Uma tela “Como ler” coloca a definição oficial ao lado de cada termo, para que a tradução não a distorça.",
      },
      {
        problem: "O acesso falha e os dados têm lacunas",
        title: "Um sistema que não quebra quando os dados quebram",
        text: "Um boletim antigo dispara um alerta, e um ponto sem resultado tem seu próprio estado. A tarefa nunca termina em uma tela de erro.",
      },
    ],
    nextLabel: "O que vem a seguir",
    nextText:
      "O Praieros foi feito para continuar evoluindo, e a pesquisa continua com ele. Ele já aponta as próximas perguntas a responder com pessoas reais.",
    nextQuestions: [
      "A página da praia funciona sem abrir o boletim original?",
      "O card antes da página ajuda, ou é só mais um passo?",
      "Quem o boletim não alcança, além de visitantes e praias lotadas?",
    ],
    takeawayLabel: "O que levo disso",
    takeaway: "Um bom designer resolve o problema e se prepara para os próximos.",
    closing:
      "O boletim não tem data de coleta, e eu não pude corrigir isso. Então a página diz. A mesma atitude guia o que vem a seguir: nomear o que não se sabe e então pesquisar.",
    open: "Abrir o Praieros",
  },
};

export const praieros: Record<Lang, PraierosCopy> = { en, pt };
