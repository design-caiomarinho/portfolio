import type { Lang } from "./index";

/*
 * Textos do case Prysmo. Este é o único lugar para corrigir o texto:
 * cada chave traz o inglês (en) e o português (pt) lado a lado.
 * A página (src/pages/[...lang]/projects/prysmo.astro) só lê daqui.
 */
const copy = {
  // 1. Cabeçalho do case
  "case.back": {
    en: "Back",
    pt: "Voltar",
  },
  "case.title": {
    en: "Redesigning how speeches move between legislative intelligence teams",
    pt: "Redesenhando como os discursos circulam entre equipes de inteligência legislativa",
  },
  "case.support": {
    en: "Behind everything Prysmo delivers, teams follow political activity day after day. My challenge was to improve how their work flows.",
    pt: "Por trás de tudo o que o Prysmo entrega, equipes acompanham a atividade política todos os dias. Meu desafio foi melhorar como o trabalho delas flui.",
  },
  // Rótulo igual ao do case Praieros (não vem no arquivo de textos)
  "case.meta-type-label": {
    en: "Type",
    pt: "Tipo",
  },
  // Navbar do case e card da home
  "case.meta": {
    en: "Web App, 2026",
    pt: "Web App, 2026",
  },
  "case.meta-type": {
    en: "Web App",
    pt: "Web App",
  },
  "case.meta-type-2": {
    en: "B2B",
    pt: "B2B",
  },
  "case.meta-type-3": {
    en: "Internal System",
    pt: "Sistema interno",
  },
  "case.meta-role": {
    en: "Role: Product Designer, UX Researcher",
    pt: "Função: Product Designer, UX Researcher",
  },
  "case.meta-timeline": {
    en: "Timeline: Ongoing",
    pt: "Período: Em andamento",
  },
  "case.note-text": {
    en: "A quick heads-up: this case is about an 8-minute read. I would really like to show you how I made each decision, not just how the screens look. Thanks for taking the time.",
    pt: "Um aviso rápido: este case leva cerca de 8 minutos de leitura. Gostaria muito de mostrar como tomei cada decisão, e não só como as telas ficaram. Obrigado por dedicar esse tempo.",
  },
  "case.note-images": {
    en: "Names and data in the images are fictional.",
    pt: "Os nomes e dados nas imagens são fictícios.",
  },
  "case.note-shortcuts-label": {
    en: "Short on time?",
    pt: "Pouco tempo?",
  },
  "case.shortcut-highlights": {
    en: "UI highlights",
    pt: "Destaques de UI",
  },
  "case.shortcut-solution": {
    en: "Solution",
    pt: "Solução",
  },
  "case.shortcut-outcome": {
    en: "Outcome",
    pt: "Resultado",
  },

  // 2. Introduction
  "intro.title": {
    en: "Introduction",
    pt: "Introdução",
  },
  "intro.lead1": {
    en: "A speech is given in Congress. Before a client hears about it, three teams work on it. Who knows where it is?",
    pt: "Um discurso é feito no Congresso. Antes de um cliente saber dele, três equipes trabalham nele. Quem sabe onde ele está?",
  },
  "intro.text1": {
    en: "At Prysmo, a public affairs platform from Prospectiva, each speech passes through three teams, one after the other. The teams felt the difficulties in their daily work. When I looked closer, the trouble was not inside each team's screens. It was in the handoffs between them.",
    pt: "No Prysmo, plataforma de Public Affairs da Prospectiva, cada discurso passa por três equipes, uma depois da outra. As equipes sentiam as dificuldades no dia a dia. Ao olhar de perto, vi que o problema não estava dentro das telas de cada equipe. Estava nas passagens entre elas.",
  },
  "intro.text2": {
    en: "This work is the redesign of that flow, delivered to the team. Understanding the flow was essential for the delivery to have a positive effect on the team's own work process. The project is in progress: as planned, the first team is delivered, and the others are already in development.",
    pt: "Esta atividade é o redesenho entregue à equipe sobre esse fluxo. O entendimento do fluxo foi fundamental para que a entrega afetasse positivamente a equipe no seu respectivo processo de trabalho. O projeto está em andamento: conforme o planejamento, a primeira equipe está entregue e as demais já estão em desenvolvimento.",
  },

  // 3. Context
  "context.title": {
    en: "Context",
    pt: "Contexto",
  },
  "context.text1": {
    en: "Prysmo is a platform from Prospectiva Public Affairs LAT.AM that brings together curated information on stakeholders and issues to support public affairs strategies. Its monitoring ranges from social media to the floor of Congress, supported by AI and specialists. This case covers one part of that work: how teams follow what is said in the Brazilian Congress and bring that information to clients.",
    pt: "O Prysmo é uma plataforma da Prospectiva Public Affairs LAT.AM que reúne informação com curadoria sobre stakeholders e temas para apoiar estratégias de Public Affairs. O monitoramento vai das redes sociais ao plenário do Congresso, com apoio de IA e especialistas. Este case trata de uma parte desse trabalho: como as equipes acompanham o que é dito no Congresso Nacional e levam essa informação aos clientes.",
  },
  "context.text2": {
    en: "Three teams work on each speech. Each one has a different role in the validation process, with its own unit of work.",
    pt: "Três equipes trabalham em cada discurso. Cada uma tem um papel diferente no processo de validação, com sua própria unidade de trabalho.",
  },
  "context.step": {
    en: "Step",
    pt: "Etapa",
  },
  "context.team1.name": {
    en: "Content",
    pt: "Conteúdo",
  },
  "context.team1.text": {
    en: "Reads each official transcript and marks the passages that matter most.",
    pt: "Lê a nota taquigráfica de cada discurso e marca os trechos que mais importam.",
  },
  "context.team2.name": {
    en: "Issues Analyst",
    pt: "Analista de Issues",
  },
  "context.team2.text": {
    en: "Reviews the marked passages of each speech and sorts them all by issue.",
    pt: "Recebe os trechos marcados, analisa o conteúdo e classifica cada um por issue.",
  },
  "context.team3.name": {
    en: "Client Service",
    pt: "Atendimento",
  },
  "context.team3.text": {
    en: "Registers which clients care about it and how the speech affects each one.",
    pt: "Cadastra os clientes interessados e o impacto do discurso para cada um deles.",
  },
  "context.text3": {
    en: "The first version, built by the internal team, did not go through a design process. I was brought in to improve the experience and architecture of the screens and to make the teams' work more integrated. To do that, it only made sense to start by understanding the whole path of a speech.",
    pt: "A primeira versão, desenvolvida pela equipe interna, não passou por um processo de design. Fui acionado para melhorar a experiência e a arquitetura das telas e tornar o trabalho das equipes mais integrado. Para isso, nada mais justo do que começar entendendo o caminho inteiro de um discurso.",
  },
  "context.image-slot1": {
    en: "The three teams",
    pt: "As três equipes",
  },
  "context.caption1": {
    en: "Each speech passes through three teams, one after the other.",
    pt: "Cada discurso passa por três equipes, uma depois da outra.",
  },

  // 4. Problem
  "problem.title": {
    en: "Problem",
    pt: "Problema",
  },
  "problem.lead1": {
    en: "Each team worked well alone. The work got lost between teams",
    pt: "Cada equipe funcionava sozinha. O trabalho se perdia entre elas",
  },
  "problem.text1": {
    en: "To define the task architecture, I walked through the environment where the system was developed, the same one the teams were using, and recorded 162 findings. The signs of the problem kept showing up in the same place: where one team hands work to the next.",
    pt: "Para definir a arquitetura das tarefas, percorri o ambiente em que o sistema foi desenvolvido, o mesmo que as equipes estavam usando, e registrei 162 achados. Os sinais do problema apareciam sempre no mesmo lugar: onde uma equipe passa o trabalho para a próxima.",
  },
  "problem.card1.label": {
    en: "Naming",
    pt: "Nomenclatura",
  },
  "problem.card1.title": {
    en: "5 names for the same moment",
    pt: "5 nomes para o mesmo momento",
  },
  "problem.card1.text": {
    en: "A single moment of a speech showed up on screens under five different names.",
    pt: "Um único momento do discurso aparecia nas telas com cinco nomes diferentes.",
  },
  "problem.card2.label": {
    en: "Stalled queue",
    pt: "Fila parada",
  },
  "problem.card2.title": {
    en: "33 issues awaiting registration",
    pt: "33 issues à espera de cadastro",
  },
  "problem.card2.text": {
    en: "Already approved, they waited for client registration. The oldest, for 16 days.",
    pt: "Já aprovadas, aguardavam o cadastro de clientes. A mais antiga, havia 16 dias.",
  },
  "problem.card3.label": {
    en: "Status",
    pt: "Status",
  },
  "problem.card3.title": {
    en: "The trail missed the adjustment",
    pt: "O ajuste não aparecia na trilha",
  },
  "problem.card3.text": {
    en: "When Client Service asked for a change, the passage still showed as done.",
    pt: "Quando o Atendimento pedia um ajuste, o trecho ainda constava como concluído.",
  },
  "problem.card4.label": {
    en: "Critical risk",
    pt: "Risco crítico",
  },
  "problem.card4.title": {
    en: "One click could restart a case",
    pt: "Um clique podia reiniciar um caso",
  },
  "problem.card4.text": {
    en: "In Content, this undid the work of other teams, with no warning on the button.",
    pt: "No Conteúdo, isso desfazia o trabalho de outras equipes, sem aviso no botão.",
  },
  "problem.image-slot1": {
    en: "End-to-end flow with return paths",
    pt: "Fluxo ponta a ponta com os caminhos de volta",
  },
  "problem.caption1": {
    en: "Five return paths have no defined destination.",
    pt: "Cinco caminhos de volta não têm destino definido.",
  },
  "problem.text2": {
    en: "The problem, in short",
    pt: "O problema, em resumo",
  },
  "problem.text3": {
    en: "At every step, anyone working on a speech needs to know three things: where it is, who has it, and what happens if it comes back. Without those answers, work stalls in the handoff between teams, or one team undoes another's work without realizing it",
    pt: "Em cada etapa, quem trabalha em um discurso precisa saber três coisas: onde ele está, com quem está e o que acontece se ele voltar. Sem essas respostas, o trabalho trava na passagem entre as equipes, ou uma desfaz o que a outra fez sem perceber",
  },

  // 5. Solution
  "solution.title": {
    en: "Solution",
    pt: "Solução",
  },
  "solution.lead1": {
    en: "Well-defined connections as the foundation for a rebuild",
    pt: "Conexões bem definidas como base para uma reconstrução",
  },
  "solution.text1": {
    en: "The solution is a flow where every handoff is defined and where one team's actions are visible to the next. I designed the first team's work on top of it. Three decisions carry the project.",
    pt: "A solução é um fluxo em que cada passagem é definida e em que as ações de uma equipe são visíveis para a seguinte. Desenhei o trabalho da primeira equipe em cima dele. Três decisões sustentam o projeto.",
  },
  "solution.d1.label": {
    en: "Decision 1",
    pt: "Decisão 1",
  },
  "solution.d1.title": {
    en: "Look at the whole flow before fixing the first team",
    pt: "Olhar o fluxo inteiro antes de consertar a primeira equipe",
  },
  "solution.d1.text": {
    en: "I could have audited only the team I was assigned to. I mapped all three first. The map showed a clear main path and five return paths with no defined destination: a rejection in review, an adjustment request, an edit, a reopening and a revocation. Each one crosses a team boundary, so no single team's screens could solve it. Fixing the first team without this map would have meant redoing parts of it later.",
    pt: "Eu poderia ter auditado só a equipe da minha demanda. Mapeei as três primeiro. O mapa mostrou um caminho principal claro e cinco caminhos de volta sem destino definido: uma rejeição na revisão, um pedido de ajuste, uma edição, uma reabertura e uma revogação. Cada um atravessa a fronteira entre duas equipes, então nenhuma tela isolada resolveria. Consertar a primeira equipe sem esse mapa significaria refazer parte do trabalho depois.",
  },
  "solution.d2.label": {
    en: "Decision 2",
    pt: "Decisão 2",
  },
  "solution.d2.title": {
    en: "Make one team's actions visible to the others",
    pt: "Tornar visível o que uma equipe causa nas outras",
  },
  "solution.d2.text": {
    en: "The critical finding came from this idea. Editing a passage that was already classified restarted the case and sent it back to the analyst, and the only warning sat inside the edit window. In the Content path, I drew where each action lands in the next team. Then I wrote the rules the team needed to confirm, as assumptions built from the findings: fixing only a speaker's name does not restart the case, changing the passage or the teams does, and the button says so first. Revoking asks for a reason, notifies the teams that received the passage and keeps registered clients as history.",
    pt: "O achado crítico nasceu dessa ideia. Editar um trecho já classificado reiniciava o caso e o devolvia ao analista, e o único aviso ficava dentro da janela de edição. No caminho do Conteúdo, desenhei onde cada ação chega na equipe seguinte. Depois escrevi as regras que o time precisava confirmar, como hipóteses construídas a partir dos achados: corrigir só o nome do orador não reinicia o caso, mudar o trecho ou as equipes reinicia, e o botão avisa antes. Revogar pede um motivo, avisa as equipes que receberam o trecho e mantém os clientes cadastrados como histórico.",
  },
  "solution.d3.label": {
    en: "Decision 3",
    pt: "Decisão 3",
  },
  "solution.d3.title": {
    en: "Separate what needs the team from what does not",
    pt: "Separar o que depende do time do que não depende",
  },
  "solution.d3.text": {
    en: "Some findings depended on answers from specific teams to define the rules. Others became certainties in the weekly sprint conversations. The answers would start with an internal survey, but waiting for all of them would stall the delivery. So we moved forward, combining facts with assumptions based on the patterns we had identified. The idea was to reduce the impact of adjustments in case new feedback pointed in a different direction from the one we had been following.",
    pt: "Parte dos achados dependia de respostas de equipes específicas para definir as regras. Outra parte virou certeza nas conversas das sprints semanais. As respostas começariam por uma pesquisa interna, mas esperar por todas elas travaria a entrega. Por isso, avançamos combinando fatos com hipóteses baseadas nos padrões identificados. A ideia era reduzir o impacto dos ajustes caso um novo retorno apontasse um caminho diferente do que vínhamos seguindo.",
  },
  "solution.image-slot1": {
    en: "Content path",
    pt: "Caminho do Conteúdo",
  },
  "solution.caption1": {
    en: "The Content path shows what each action causes in the next team.",
    pt: "O caminho do Conteúdo mostra o que cada ação causa na equipe seguinte.",
  },

  // 6. UI Highlights
  "highlights.title": {
    en: "UI Highlights",
    pt: "Destaques de UI",
  },
  "highlights.intro1": {
    en: "The first team's work, up close",
    pt: "O trabalho da primeira equipe, de perto",
  },
  "highlights.intro2": {
    en: "Medium-fidelity screens from the Figma file, built on the flow map.",
    pt: "Telas de média fidelidade do arquivo no Figma, feitas sobre o mapa do fluxo.",
  },
  "highlights.contact-sheet.caption": {
    en: "16 desktop frames, including loading, empty and error states.",
    pt: "16 frames desktop, incluindo os estados de carregando, vazio e erro.",
  },
  "highlights.list.caption": {
    en: "The list opens on pending notes from any date.",
    pt: "A lista abre nas notas pendentes de qualquer data.",
  },
  "highlights.filters.caption": {
    en: "Filters stay behind one button, so the list comes first.",
    pt: "Os filtros ficam atrás de um botão, e a lista vem primeiro.",
  },
  "highlights.all-notes.caption": {
    en: "Each note shows its state, and its button follows it.",
    pt: "Cada nota mostra seu estado, e o botão acompanha.",
  },
  "highlights.open-note.caption": {
    en: "An empty panel explains marking in three steps.",
    pt: "O painel vazio explica a marcação em três passos.",
  },
  "highlights.select.caption": {
    en: "The mark button appears beside the selected text.",
    pt: "O botão de marcar aparece ao lado do texto selecionado.",
  },
  "highlights.mark.caption": {
    en: "Marking asks for at least one team to receive it.",
    pt: "A marcação exige ao menos uma equipe de destino.",
  },
  "highlights.marked.caption": {
    en: "Each mark shows one state, its teams and one main action.",
    pt: "Cada marcação mostra um estado, suas equipes e uma ação principal.",
  },
  "highlights.trail.caption": {
    en: "The trail shows where a passage is and who did what.",
    pt: "A trilha mostra onde o trecho está e quem fez o quê.",
  },
  "highlights.error.caption": {
    en: "A load error says nothing changed and gives a code.",
    pt: "O erro de carregamento diz que nada mudou e traz um código.",
  },

  // 7. Process
  "process.title": {
    en: "Process",
    pt: "Processo",
  },
  "process.lead1": {
    en: "Clarity to decide the next step",
    pt: "Clareza para decidir o próximo passo",
  },
  // Rótulos das etapas, no mesmo formato do case Praieros
  "process.step1.label": {
    en: "01 / Audit",
    pt: "01 / Auditoria",
  },
  "process.step2.label": {
    en: "02 / Mapping",
    pt: "02 / Mapeamento",
  },
  "process.step3.label": {
    en: "03 / Analysis",
    pt: "03 / Análise",
  },
  "process.step4.label": {
    en: "04 / Synthesis",
    pt: "04 / Síntese",
  },
  "process.step5.label": {
    en: "05 / Triage",
    pt: "05 / Triagem",
  },
  "process.step6.label": {
    en: "06 / Assumptions",
    pt: "06 / Hipóteses",
  },
  "process.step7.label": {
    en: "07 / Delivery",
    pt: "07 / Entrega",
  },
  "process.item1": {
    en: "A system essential to the teams",
    pt: "Um sistema essencial para as equipes",
  },
  "process.item2": {
    en: "How I audited mattered as much as what I found. I worked in the environment where the system was developed, the same one the teams were using, taking care not to interfere with crucial actions. These points would be clarified through a survey sent to specialists, to understand expectations and the current situation. I read the system the way each role does, one after the other, before judging any single screen.",
    pt: "A forma de auditar importava tanto quanto o que eu encontraria. Trabalhei no ambiente em que o sistema foi desenvolvido, o mesmo que as equipes estavam usando, com o cuidado de não interferir em ações cruciais. Esses pontos seriam esclarecidos por uma pesquisa enviada a especialistas, para entender as expectativas e o cenário atual. Percorri o sistema como cada papel o enxerga, um por vez, antes de julgar qualquer tela isolada.",
  },
  "process.item3": {
    en: "What each team hands to the next",
    pt: "O que cada equipe entrega à próxima",
  },
  "process.item4": {
    en: "I mapped inputs, actions, handoffs and notifications to reveal the dependencies between roles. That way, each change could account for what the next team needs to carry on the work.",
    pt: "Mapeei entradas, ações, entregas e avisos para revelar as dependências entre os papéis. Assim, cada ajuste poderia considerar o que a equipe seguinte precisa para continuar o trabalho.",
  },
  "process.item5": {
    en: "Three lenses, one scale",
    pt: "Três lentes, uma escala",
  },
  "process.item6": {
    en: "I went deep one role at a time, through usability, interface and clarity of text. Each finding got a severity, an effort estimate and its evidence: seen on screen, said by the team, inferred, or a hypothesis.",
    pt: "Aprofundei um papel por vez, pelas lentes de usabilidade, interface e clareza dos textos. Cada achado recebeu uma severidade, uma estimativa de esforço e a origem da evidência: visto na tela, dito pela equipe, inferência ou hipótese.",
  },
  "process.image-slot1": {
    en: "Affinity map",
    pt: "Mapa de afinidade",
  },
  "process.caption1": {
    en: "162 findings organized into 14 themes.",
    pt: "162 achados organizados em 14 temas.",
  },
  "process.item7": {
    en: "The patterns went beyond the screens",
    pt: "Os padrões iam além das telas",
  },
  "process.item8": {
    en: "Severity varied across the findings:",
    pt: "A severidade variava entre os achados:",
  },
  "process.item8.b1": {
    en: "1 critical: risk of undoing other teams' work",
    pt: "1 crítico: risco de desfazer o trabalho de outras equipes",
  },
  "process.item8.b2": {
    en: "37 high: serious obstacles to completing tasks",
    pt: "37 altos: obstáculos sérios para concluir as tarefas",
  },
  "process.item8.b3": {
    en: "90 medium: friction that slows down the work",
    pt: "90 médios: atritos que atrasavam o trabalho",
  },
  "process.item8.b4": {
    en: "34 low: minor adjustments with limited impact",
    pt: "34 baixos: ajustes pontuais, de pouco impacto",
  },
  "process.item8.after": {
    en: "Ten themes appeared across all three teams, a sign that the problems lay in the product as a whole, not in a single screen.",
    pt: "Dez temas apareciam nas três equipes, um sinal de que os problemas estavam no produto como um todo, e não em uma tela isolada.",
  },
  "process.item9": {
    en: "From diagnosis to action priorities",
    pt: "Do diagnóstico às prioridades de ação",
  },
  "process.item10": {
    en: "I sorted the findings by the kind of response each one needed. After splitting the 57 mixed ones, the 162 broke down like this:",
    pt: "Separei os achados pelo tipo de resposta que pediam. Depois de dividir os 57 mistos, os 162 ficaram assim:",
  },
  "process.item10.b1": {
    en: "85 interface: changes to the screens",
    pt: "85 de interface: ajustes nas telas",
  },
  "process.item10.b2": {
    en: "61 flow and rules: points tied to how the work runs",
    pt: "61 de fluxo e regra: pontos ligados ao funcionamento do trabalho",
  },
  "process.item10.b3": {
    en: "13 both: screen and rule had to be handled together",
    pt: "13 dos dois tipos: tela e regra precisavam ser tratadas juntas",
  },
  "process.item10.b4": {
    en: "3 defects: failures to report",
    pt: "3 defeitos: falhas a reportar",
  },
  "process.image-slot2": {
    en: "Interface lens",
    pt: "Lente de interface",
  },
  "process.caption2": {
    en: "Each theme is flow, interface, both, or a defect.",
    pt: "Cada tema é de fluxo, de interface, dos dois ou um defeito.",
  },
  "process.item11": {
    en: "Assumptions made visible for validation",
    pt: "Hipóteses visíveis para validação",
  },
  "process.item12": {
    en: "Based on the findings, I formulated eight assumptions. In the flow map, I highlighted each one in yellow to show the team where the analysis ended and which points still needed confirmation.",
    pt: "A partir dos achados, formulei oito hipóteses. No mapa do fluxo, destaquei cada uma em amarelo para mostrar ao time onde terminava a análise e quais pontos ainda dependiam de confirmação.",
  },
  "process.image-slot3": {
    en: "Impact and effort",
    pt: "Impacto e esforço",
  },
  "process.caption3": {
    en: "Themes ranked by impact and effort.",
    pt: "Temas ordenados por impacto e esforço.",
  },
  "process.item13": {
    en: "Fidelity matched to the moment",
    pt: "Fidelidade na medida do momento",
  },
  "process.item14": {
    en: "I proposed a sequence of audit, synthesis, specification and wireframes, moving forward one team at a time. With the steps approved, we defined a medium-fidelity delivery. The priority was enough detail to settle structure, states and wording, while staying agile for adjustments as the rules were confirmed. With a short deadline, we avoided investing in details that could still change.",
    pt: "Propus uma sequência com auditoria, síntese, especificação e wireframes, avançando por uma equipe de cada vez. Com as etapas aprovadas, definimos uma entrega de média fidelidade. A prioridade era detalhar o suficiente para fechar estrutura, estados e textos, mantendo agilidade para ajustes enquanto as regras eram confirmadas. Com o prazo curto, evitamos investir em detalhes que ainda poderiam mudar.",
  },

  // 8. Outcome
  "outcome.title": {
    en: "Outcome",
    pt: "Resultado",
  },
  "outcome.lead1": {
    en: "The first delivery on a new foundation",
    pt: "A primeira entrega de uma nova base",
  },
  "outcome.text1": {
    en: "The first team's delivery brings together 16 screens and an annotated specification for each one, linking every requirement to the finding behind it. Since the system is used primarily in computer browsers, we designed the screens for desktop, the main work context. With the project in progress, this is the first result of work that will continue with the next teams.",
    pt: "A entrega da primeira equipe reúne 16 telas e uma especificação anotada para cada uma, ligando cada requisito ao achado que o originou. Como o sistema é usado prioritariamente em navegadores de computador, desenhamos as telas para desktop, o principal contexto de trabalho. Com o projeto em andamento, este é o primeiro resultado de uma construção que segue para as próximas equipes.",
  },
  "outcome.text2": {
    en: "The problem",
    pt: "O problema",
  },
  "outcome.text3": {
    en: "What I built",
    pt: "O que construí",
  },
  "outcome.item1": {
    en: "Each team worked well alone, and the work got lost between teams.",
    pt: "Cada equipe funcionava sozinha, e o trabalho se perdia entre elas.",
  },
  "outcome.item2": {
    en: "A map of the whole flow, with every return path named.",
    pt: "Um mapa do fluxo inteiro, com cada caminho de volta nomeado.",
  },
  "outcome.item3": {
    en: "One click in the Content team's environment could undo other teams' work.",
    pt: "Um clique no ambiente da equipe de Conteúdo podia desfazer o trabalho de outras equipes.",
  },
  "outcome.item4": {
    en: "Rules for edit and revoke, written so we could build a flow confirmed by the team.",
    pt: "Regras para editar e revogar, escritas para criarmos um fluxo com a confirmação do time.",
  },
  "outcome.item5": {
    en: "Some findings waited for decisions, and others did not.",
    pt: "Alguns achados esperavam decisões, e outros não.",
  },
  "outcome.item6": {
    en: "Findings sorted into rules, interface and defects, so design could proceed on what needed no decision.",
    pt: "Achados separados em regra, interface e defeitos, para o desenho prosseguir no que não precisava de decisão.",
  },
  "outcome.text4": {
    en: "What comes next",
    pt: "O que vem a seguir",
  },
  "outcome.item7": {
    en: "The screens for the Issues Analyst and Client Service teams are already in development, following the same map.",
    pt: "As telas das equipes de Analista de Issues e de Atendimento já estão em desenvolvimento, seguindo o mesmo mapa.",
  },
  "outcome.item8": {
    en: "The survey follow-up is active to identify answers that can guide scalable adjustments to the feature.",
    pt: "O acompanhamento da pesquisa está ativo para identificar respostas que orientem ajustes escaláveis no recurso.",
  },
  "outcome.item9": {
    en: "Usability testing will continue as the sprint wraps up, with the team brought in based on the input made available.",
    pt: "O teste de usabilidade seguirá no fechamento da sprint, com o acionamento da equipe a partir dos insumos disponibilizados.",
  },
  "outcome.text5": {
    en: "What I take from this",
    pt: "O que levo disso",
  },
  "outcome.text6": {
    en: "When many people share the same flow, you need to find the invisible thread connecting them before proposing the first pixel",
    pt: "Quando muitas pessoas dividem o mesmo fluxo, é preciso encontrar o fio invisível que as conecta antes de propor o primeiro pixel",
  },

  // 9. Menu lateral do case e rodapé
  "case.footer.rights": {
    en: "All rights reserved.",
    pt: "Todos os direitos reservados.",
  },
} satisfies Record<string, Record<Lang, string>>;

export type PrysmoKey = keyof typeof copy;

export const prysmo = (lang: Lang) => (key: PrysmoKey) => copy[key][lang];
