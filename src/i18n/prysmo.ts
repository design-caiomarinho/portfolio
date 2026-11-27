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

  "case.hero-alt": {
    en: "Session reading screen in three columns: list of speakers, speeches with highlighted passages, and a panel of marks with teams, status and actions.",
    pt: "Tela de leitura de uma sessão em três colunas: lista de oradores, discursos com trechos destacados e painel de marcações com equipes, estado e ações.",
  },

  // 2. Introduction
  "intro.title": {
    en: "Introduction",
    pt: "Introdução",
  },
  "intro.lead1": {
    en: "A speech is given in Congress. Before a client hears about it, a team reads it and decides which passages matter. How does that team know what happens next?",
    pt: "Um discurso é feito no Congresso. Antes de um cliente saber dele, uma equipe o lê e decide quais trechos importam. Como essa equipe sabe o que acontece depois?",
  },
  "intro.text1": {
    en: "Prysmo is a legislative intelligence platform. The Content team reads each official transcript and marks the passages that matter, and two more teams take the work from there. The screens were built without design, and the team felt it. When I looked closer, the trouble was not only on the screen. It was in what happened to the work after the team sent it on.",
    pt: "O Prysmo é uma plataforma de inteligência legislativa. A equipe de Conteúdo lê cada nota taquigráfica e marca os trechos que importam, e outras duas equipes seguem o trabalho a partir dali. As telas foram feitas sem design, e a equipe sentia isso. Ao olhar de perto, vi que o problema não estava só na tela. Estava no que acontecia com o trabalho depois que a equipe o passava adiante.",
  },
  "intro.text2": {
    en: "This case is my redesign of the Content team's curation flow, the first of three in the project. I mapped the whole path of a speech first, then designed Content's screens on top of it. The Content flow is delivered. While the other two are being designed, here is how I got to it.",
    pt: "Este case é o meu redesenho do fluxo de curadoria da equipe de Conteúdo, o primeiro dos três do projeto. Mapeei primeiro o caminho inteiro de um discurso e depois desenhei as telas do Conteúdo em cima dele. O fluxo do Conteúdo está entregue. Enquanto os outros dois são desenhados, acompanhe como cheguei até ele.",
  },

  // 3. Context
  "context.title": {
    en: "Context",
    pt: "Contexto",
  },
  "context.text1": {
    en: "Prysmo is a platform from Prospectiva. Its teams use it to follow what is said in the Brazilian Congress and to serve their clients.",
    pt: "O Prysmo é uma plataforma da Prospectiva. As equipes a usam para acompanhar o que é dito no Congresso Nacional e atender seus clientes.",
  },
  "context.text2": {
    en: "Three teams work on each speech, one after the other. Each one sees a different application, with its own unit of work: note, case, issue, passage. This case follows the first team.",
    pt: "Três equipes trabalham em cada discurso, uma depois da outra. Cada uma enxerga um aplicativo diferente, com sua própria unidade de trabalho: nota, caso, issue, trecho. Este case acompanha a primeira equipe.",
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
    en: "The screens were built by the development team, with no design work. I was brought in to improve how the teams' work flows. I started with the whole path of a speech, so that Content's screens would fit what comes after them.",
    pt: "As telas foram feitas pela equipe de desenvolvimento, sem trabalho de design. Fui chamado para melhorar como o trabalho das equipes flui. Comecei pelo caminho inteiro de um discurso, para que as telas do Conteúdo se encaixassem no que vem depois delas.",
  },
  "context.compare-before-alt": {
    en: "Before: list of official transcripts with three counters at the top, collapsed filters and a \"View transcript\" button on each session.",
    pt: "Antes: lista de notas taquigráficas com três contadores no topo, filtros recolhidos e um botão “Ver nota taquigráfica” em cada sessão.",
  },
  "context.compare-after-alt": {
    en: "After: the list opens on pending transcripts, with status tabs, search and visible filters. Each session shows its status and a \"Mark passages\" button.",
    pt: "Depois: a lista abre nas notas pendentes, com abas por estado, busca e filtros visíveis. Cada sessão mostra seu estado e o botão “Marcar trechos”.",
  },
  "context.compare-value": {
    en: "{value}% of the previous screen visible",
    pt: "{value}% da tela anterior visível",
  },
  "context.compare-control": {
    en: "Drag to compare before and after",
    pt: "Arraste para comparar o antes e o depois",
  },
  "context.caption1": {
    en: "The Content team's note screen side by side: before the redesign and after it. Client names and critical data have been hidden.",
    pt: "A tela de nota da equipe de Conteúdo lado a lado: antes do redesenho e depois dele. Nomes de clientes e dados críticos foram ocultados.",
  },

  // 4. Problem
  "problem.title": {
    en: "Problem",
    pt: "Problema",
  },
  "problem.lead1": {
    en: "Content's work was clear on screen and confusing once it left it.",
    pt: "O trabalho do Conteúdo era claro na tela e confuso depois que saía dela.",
  },
  "problem.text1": {
    en: "I walked through the test environment in every role and recorded 162 findings, 69 of them in Content. The signs of the problem always showed up where the team's work leaves its hands and reaches the next one.",
    pt: "Percorri o ambiente de teste em todos os papéis e registrei 162 achados, 69 deles no Conteúdo. Os sinais do problema apareciam sempre onde o trabalho da equipe sai de suas mãos e chega à próxima.",
  },
  "problem.card1.label": {
    en: "Naming",
    pt: "Nomenclatura",
  },
  "problem.card1.title": {
    en: "Five names, one moment",
    pt: "Cinco nomes, um momento",
  },
  "problem.card1.text": {
    en: "Across the system's screens, a single moment of a speech was identified by five different names.",
    pt: "Nas telas do sistema, um único momento de um discurso aparecia identificado por cinco nomes diferentes.",
  },
  "problem.card2.label": {
    en: "Concentration",
    pt: "Concentração",
  },
  "problem.card2.title": {
    en: "69 findings in Content",
    pt: "69 achados no Conteúdo",
  },
  "problem.card2.text": {
    en: "It was the highest number among the three roles: 69 of the 162 findings recorded in the walkthrough.",
    pt: "Foi o maior número entre os três papéis: 69 dos 162 achados registrados em todo o percurso.",
  },
  "problem.card3.label": {
    en: "Status",
    pt: "Status",
  },
  "problem.card3.title": {
    en: "Missing from the trail",
    pt: "Ajuste fora da trilha",
  },
  "problem.card3.text": {
    en: "When Client Service asked for a change, a passage marked by Content still showed as done.",
    pt: "Quando o Atendimento pedia um ajuste, o trecho marcado pelo Conteúdo ainda constava como concluído.",
  },
  "problem.card4.label": {
    en: "Critical risk",
    pt: "Risco crítico",
  },
  "problem.card4.title": {
    en: "One-click restart",
    pt: "Reinício em um clique",
  },
  "problem.card4.text": {
    en: "In Content, one click could restart a case and undo other teams' work, with no warning on the button.",
    pt: "No Conteúdo, um clique podia reiniciar um caso e desfazer o trabalho de outras equipes, sem aviso.",
  },
  "problem.image-slot1": {
    en: "End-to-end flow with return paths",
    pt: "Fluxo ponta a ponta com os caminhos de volta",
  },
  "problem.caption1": {
    en: "Returns and edits cross teams: paths validated on screen, others assumed from analysis.",
    pt: "Retornos e edições cruzam equipes: caminhos validados na tela, outros assumidos a partir da análise.",
  },
  "problem.alt1": {
    en: "End-to-end flowchart in lanes: Content, Analyst, Review (next sprint) and Client Service. Revoking, editing, a review rejection and an adjustment request send work from one lane to another, while reopening stays in Client Service. Colors set apart what was seen on screen, assumptions to validate, passage states and decisions.",
    pt: "Fluxograma ponta a ponta em raias: Conteúdo, Analista, Revisão (próxima sprint) e Atendimento. Revogação, edição, rejeição na revisão e pedido de ajuste levam o trabalho de uma raia para outra, e a reabertura fica no Atendimento. As cores separam o que foi visto nas telas, as hipóteses a validar, os estados do trecho e as decisões.",
  },
  "problem.text2": {
    en: "The problem, in one sentence",
    pt: "O problema, em uma frase",
  },
  "problem.text3": {
    en: "Anyone working in Content needs to mark the right passages with confidence and then know where each one is, who has it, and what happens when they edit it or when it comes back. Without that, work stalls between teams, or Content undoes other teams' work without knowing.",
    pt: "Quem trabalha no Conteúdo precisa marcar os trechos certos com segurança e saber depois onde cada um está, com quem está e o que acontece quando o edita ou quando ele volta. Sem isso, o trabalho trava entre as equipes, ou o Conteúdo desfaz o trabalho de outras equipes sem saber.",
  },

  // 5. Solution
  "solution.title": {
    en: "Solution",
    pt: "Solução",
  },
  "solution.lead1": {
    en: "Designing Content's screens on top of the map of the whole flow.",
    pt: "Desenhar as telas do Conteúdo sobre o mapa do fluxo inteiro.",
  },
  "solution.text1": {
    en: "The solution is a curation flow where the team reads, selects, marks and tracks each passage, and where every handoff to the next team is defined. Three decisions support it.",
    pt: "A solução é um fluxo de curadoria em que a equipe lê, seleciona, marca e acompanha cada trecho, e em que cada passagem para a equipe seguinte é definida. Três decisões o sustentam.",
  },
  "solution.d1.label": {
    en: "Decision 1",
    pt: "Decisão 1",
  },
  "solution.d1.title": {
    en: "Look at the whole flow before fixing Content",
    pt: "Olhar o fluxo inteiro antes de consertar o Conteúdo",
  },
  "solution.d1.text": {
    en: "I could have audited only Content. I mapped all three teams first. The map showed a clear main path and five return paths with no defined destination: a rejection in review, an adjustment request, an edit, a reopening and a revocation. Each one crosses the boundary between two teams, so no single screen could solve it. Fixing Content without this map would have meant redoing part of the work later.",
    pt: "Eu poderia ter auditado só o Conteúdo. Mapeei as três equipes primeiro. O mapa mostrou um caminho principal claro e cinco caminhos de volta sem destino definido: uma rejeição na revisão, um pedido de ajuste, uma edição, uma reabertura e uma revogação. Cada um atravessa a fronteira entre duas equipes, então nenhuma tela isolada resolveria. Consertar o Conteúdo sem esse mapa significaria refazer parte do trabalho depois.",
  },
  "solution.d2.label": {
    en: "Decision 2",
    pt: "Decisão 2",
  },
  "solution.d2.title": {
    en: "Make visible what Content causes in the other teams",
    pt: "Tornar visível o que o Conteúdo causa nas outras equipes",
  },
  "solution.d2.text": {
    en: "The critical finding came from this idea. Editing a passage that was already classified restarted the case and sent it back to the analyst, and the only warning sat inside the edit window. On the flow map, I drew where each action lands in the next team. Then I wrote the rules the team needed to confirm, as assumptions built from the findings: fixing only a speaker's name does not restart the case, changing the passage or the teams does, and the button says so first. Revoking asks for a reason, notifies the teams that received the passage and keeps registered clients as history.",
    pt: "O achado crítico nasceu dessa ideia. Editar um trecho já classificado reiniciava o caso e o devolvia ao analista, e o único aviso ficava dentro da janela de edição. No mapa do fluxo, desenhei onde cada ação chega na equipe seguinte. Depois escrevi as regras que o time precisava confirmar, como suposições construídas a partir dos achados: corrigir só o nome do orador não reinicia o caso, mudar o trecho ou as equipes reinicia, e o botão avisa antes. Revogar pede um motivo, avisa as equipes que receberam o trecho e mantém os clientes cadastrados como histórico.",
  },
  "solution.d3.label": {
    en: "Decision 3",
    pt: "Decisão 3",
  },
  "solution.d3.title": {
    en: "Separate what depends on the team from what does not",
    pt: "Separar o que depende do time do que não depende",
  },
  "solution.d3.text": {
    en: "Some findings could not be designed until the team decided on a rule. Others were purely interface. Mixing the two would have stalled the design. 47 of the 162 findings did not depend on anyone's decision, so they went straight into design. For the rest, I wrote eight assumptions, each with what changes if it is wrong. A correction from the team changes one screen, not the whole flow.",
    pt: "Alguns achados não podiam ser desenhados até o time decidir uma regra. Outros eram só interface. Misturar os dois travaria o desenho. 47 dos 162 achados não dependiam da decisão de ninguém, então foram direto para o desenho. Para o restante, escrevi oito suposições, cada uma com o que muda se ela estiver errada. Uma correção do time muda uma tela, e não o fluxo inteiro.",
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
  "highlights.list.caption": {
    en: "The list opens on pending notes, with counters and filters above.",
    pt: "A lista abre nas notas pendentes, com contadores e filtros acima.",
  },
  "highlights.list.alt": {
    en: "Transcript list with status tabs (4 pending, 2 in progress, 7 completed, 13 total), search, and period, house, body and speaker filters. Each session card shows date, number of speeches and speakers, status, and the \"Original text\" and \"Mark passages\" buttons.",
    pt: "Lista de notas taquigráficas com abas por estado (4 pendentes, 2 em andamento, 7 concluídas, 13 no total), busca e filtros de período, casa, órgão e orador. Cada cartão mostra data, número de discursos e oradores, estado e os botões “Texto original” e “Marcar trechos”.",
  },
  "highlights.open-note.caption": {
    en: "The note opens with the speaker list beside the text.",
    pt: "A nota abre com a lista de oradores ao lado do texto.",
  },
  "highlights.open-note.alt": {
    en: "Close-up of an open session: on the left, a searchable list of speakers with the current one highlighted; on the right, the session details and the speech text, with a cited client underlined.",
    pt: "Detalhe de uma sessão aberta: à esquerda, a lista de oradores com busca e o orador atual destacado; à direita, os dados da sessão e o texto do discurso, com um cliente citado sublinhado.",
  },
  "highlights.select.caption": {
    en: "When text is selected, the mark button appears next to the passage.",
    pt: "Ao selecionar o texto, o botão de marcar aparece junto ao trecho.",
  },
  "highlights.select.alt": {
    en: "A sentence selected in blue inside a speech, with a floating \"Mark passage\" button just below the selection.",
    pt: "Uma frase selecionada em azul dentro de um discurso, com o botão flutuante “Marcar trecho” logo abaixo da seleção.",
  },
  "highlights.mark.caption": {
    en: "Marking requires at least one team, and the last choice comes preselected.",
    pt: "A marcação exige ao menos uma equipe, e a última escolha já vem selecionada.",
  },
  "highlights.mark.alt": {
    en: "\"Mark passage\" window with the speaker, the selected passage with an option to adjust it, buttons to choose the receiving teams (Energy and Industry selected), an optional comment and the \"Cancel\" and \"Validate mark\" buttons.",
    pt: "Janela “Marcar trecho” com o orador, o trecho selecionado com opção de ajuste, botões para escolher as equipes que recebem (Energia e Indústria marcadas), comentário opcional e os botões “Cancelar” e “Validar marcação”.",
  },
  "highlights.marked.caption": {
    en: "Each mark shows one state, its teams and one main action.",
    pt: "Cada marcação mostra um estado, suas equipes e uma ação principal.",
  },
  "highlights.marked.alt": {
    en: "Session screen in three columns: speakers, speeches with marked passages underlined, and a panel of marks with team and status filters. The open card shows status, passage, teams, author and the actions add team, edit, revoke and view trail.",
    pt: "Tela da sessão em três colunas: oradores, discursos com os trechos marcados sublinhados e um painel de marcações com filtros por equipe e estado. O cartão aberto mostra estado, trecho, equipes, autoria e as ações de adicionar equipe, editar, revogar e ver a trilha.",
  },
  "highlights.trail.caption": {
    en: "The trail shows where a passage is and who did what.",
    pt: "A trilha mostra onde o trecho está e quem fez o quê.",
  },
  "highlights.trail.alt": {
    en: "Mark trail panel open over the session: a notice that the passage is with Client Service, the steps from Content to Prysmo, and a dated history of who marked and edited it, with the teams before and after the change.",
    pt: "Painel da trilha da marcação aberto sobre a sessão: um aviso de que o trecho está com o Atendimento, as etapas de Conteúdo a Prysmo e o histórico com data de quem marcou e editou, com as equipes antes e depois da mudança.",
  },

  // 7. Process
  "process.title": {
    en: "Process",
    pt: "Processo",
  },
  "process.lead1": {
    en: "Audit the whole flow first. Then separate what the team decides from what is only screen.",
    pt: "Auditar o fluxo inteiro primeiro. Depois separar o que o time decide do que é só tela.",
  },
  // Rótulos das etapas, no mesmo formato do case Praieros
  "process.step1.label": {
    en: "01 / Care",
    pt: "01 / Cuidado",
  },
  "process.step2.label": {
    en: "02 / Overview",
    pt: "02 / Visão geral",
  },
  "process.step3.label": {
    en: "03 / Analysis",
    pt: "03 / Análise",
  },
  "process.step4.label": {
    en: "04 / Patterns",
    pt: "04 / Padrões",
  },
  "process.step5.label": {
    en: "05 / Triage",
    pt: "05 / Triagem",
  },
  "process.step6.label": {
    en: "06 / Validation",
    pt: "06 / Validação",
  },
  "process.step7.label": {
    en: "07 / Delivery",
    pt: "07 / Entrega",
  },
  "process.step8.label": {
    en: "08 / Scope",
    pt: "08 / Escopo",
  },
  "process.item1": {
    en: "Auditing without disrupting the work",
    pt: "Auditar sem interromper o trabalho",
  },
  "process.item2": {
    en: "Prysmo is a system the teams depend on every day. How I audited mattered as much as what I would find. I worked in the test environment and took care not to disrupt the teams' work or the analyses in progress. I went through the system the way each role sees it, one at a time, before judging any single screen.",
    pt: "O Prysmo é um sistema de que as equipes dependem todos os dias. A forma de auditar importava tanto quanto o que eu encontraria. Trabalhei no ambiente de teste e tomei cuidado para não atrapalhar o trabalho das equipes nem as análises em andamento. Percorri o sistema como cada papel o enxerga, um por vez, antes de julgar qualquer tela isolada.",
  },
  "process.item3": {
    en: "What each team receives and passes on",
    pt: "O que cada equipe recebe e entrega",
  },
  "process.item4": {
    en: "An overview of the three roles came before any deep dive. For each role, I recorded what it receives, what it does, what it passes on and who gets notified. Starting with the big picture avoids fixing one team without knowing what the next one expects to receive.",
    pt: "Uma visão geral dos três papéis veio antes de qualquer mergulho. Para cada papel, registrei o que recebe, o que faz, o que passa adiante e quem é avisado. Começar pelo geral evita consertar uma equipe sem saber o que a próxima espera receber.",
  },
  "process.item5": {
    en: "One role at a time",
    pt: "Um papel por vez",
  },
  "process.item6": {
    en: "Three lenses, one scale. I went deep one role at a time, through the lenses of usability, interface and clarity of text. Each finding got a severity, an effort estimate and the source of its evidence: seen on screen, said by the team, inference or hypothesis.",
    pt: "Três lentes, uma escala. Aprofundei um papel por vez, pelas lentes de usabilidade, interface e clareza dos textos. Cada achado recebeu uma severidade, uma estimativa de esforço e a origem da evidência: visto na tela, dito pela equipe, inferência ou hipótese.",
  },
  "process.image-slot1": {
    en: "Affinity map",
    pt: "Mapa de afinidade",
  },
  "process.caption1": {
    en: "162 findings in 14 themes, color-coded by severity.",
    pt: "162 achados em 14 temas, coloridos por severidade.",
  },
  "process.alt1": {
    en: "Affinity map of the 162 design critique findings, with sticky notes grouped into themes, such as states with different names and signals, or filters and counters that don't say what there is to do. Note colors show severity: the legend counts 38 high, 90 medium and 34 low.",
    pt: "Mapa de afinidade dos 162 achados do design critique, com notas adesivas agrupadas em temas, como estados com nomes e sinais diferentes ou filtros e contadores que não dizem o que há para fazer. A cor de cada nota indica a gravidade: a legenda conta 38 altos, 90 médios e 34 baixos.",
  },
  "process.item7": {
    en: "The patterns went beyond the screens",
    pt: "Os padrões iam além das telas",
  },
  "process.item8": {
    en: "162 findings became 14 themes. The findings were 1 critical, 37 high, 90 medium and 34 low. Ten themes appeared in all three teams, which showed they were problems of the product, not of a single screen.",
    pt: "162 achados viraram 14 temas. Os achados foram 1 crítico, 37 altos, 90 médios e 34 baixos. Dez temas apareceram nas três equipes, o que mostrou que eram problemas do produto, e não de uma tela.",
  },
  "process.item9": {
    en: "Each finding called for a response",
    pt: "Cada achado pedia uma resposta",
  },
  "process.item10": {
    en: "Rules and screens were separated. 55 findings were about flow and rules, 47 were pure interface, 57 were mixed and 3 were defects to report. After splitting the mixed ones, 38 were interface, 13 both types and 6 rules.",
    pt: "Regra e tela foram separadas. 55 achados eram de fluxo e regra, 47 eram de interface pura, 57 eram mistos e 3 eram defeitos a reportar. Depois de separar os mistos, 38 eram de interface, 13 dos dois tipos e 6 de regra.",
  },
  "process.image-slot2": {
    en: "Interface lens",
    pt: "Lente de interface",
  },
  "process.caption2": {
    en: "Themes sorted into flow and rule, interface, both, or defect.",
    pt: "Temas separados em fluxo e regra, interface, os dois ou defeito.",
  },
  "process.alt2": {
    en: "The 14 themes in four groups: five on flow and rule, to decide with the team before wireframes; three on interface and polish, with no rule change; five on both; and one defect to report to developers, the system help that does not open.",
    pt: "Os 14 temas em quatro grupos: cinco de fluxo e regra, para decidir com o time antes do wireframe; três de interface e acabamento, sem mudar regra; cinco dos dois; e um defeito para reportar ao desenvolvimento, a ajuda do sistema que não abre.",
  },
  "process.item11": {
    en: "Assumptions in plain view",
    pt: "Suposições à vista do time",
  },
  "process.item12": {
    en: "The assumptions came with what changes if they are wrong. I wrote eight assumptions based on the findings. In the flow map, each assumption appears in yellow, so the team can see where my logic ends and their confirmation begins.",
    pt: "As suposições vieram com o que muda se estiverem erradas. Escrevi oito suposições a partir dos achados. No mapa do fluxo, cada suposição aparece em amarelo, para o time ver onde termina a minha lógica e onde começa a confirmação deles.",
  },
  "process.image-slot3": {
    en: "Impact and effort",
    pt: "Impacto e esforço",
  },
  "process.caption3": {
    en: "The 14 themes placed by impact and effort.",
    pt: "Os 14 temas posicionados por impacto e esforço.",
  },
  "process.alt3": {
    en: "Impact and effort matrix with the 14 themes. High impact and low effort: themes 3, 4, 6, 9 and 14, the last one a defect to report. High impact and high effort: themes 1, 2, 7, 8, 10 and 11. Low impact and low effort: themes 5 and 12. Low impact and high effort: theme 13.",
    pt: "Matriz de impacto e esforço com os 14 temas. Alto impacto e baixo esforço: temas 3, 4, 6, 9 e 14, este último um defeito a reportar. Alto impacto e alto esforço: temas 1, 2, 7, 8, 10 e 11. Baixo impacto e baixo esforço: temas 5 e 12. Baixo impacto e alto esforço: tema 13.",
  },
  "process.item13": {
    en: "Fidelity matched to the moment",
    pt: "Fidelidade na medida do momento",
  },
  "process.item14": {
    en: "The delivery was sized to the team's moment. I proposed the sequence: audit, synthesis, specification and wireframes, one team at a time, starting with Content. The team approved the idea and the steps. I chose a medium-fidelity delivery: enough detail to settle structure, states and wording, and light enough to change quickly while the rules were still being confirmed. The deadline was short, and this kept me from spending it on details that could still change. A higher-fidelity prototype comes later.",
    pt: "A entrega foi dimensionada ao momento da equipe. Propus a sequência: auditoria, síntese, especificação e wireframes, uma equipe por vez, começando pelo Conteúdo. O time aprovou a ideia e as etapas. Escolhi uma entrega de média fidelidade: detalhe suficiente para fechar estrutura, estados e textos, e leve o bastante para mudar rápido enquanto as regras ainda eram confirmadas. O prazo era curto, e isso evitou gastá-lo em detalhes que ainda podiam mudar. Um protótipo de maior fidelidade vem depois.",
  },
  "process.item15": {
    en: "The main path first",
    pt: "O caminho principal primeiro",
  },
  "process.item16": {
    en: "A request from the team shaped the scope. There was no need to draw every branch of every screen. I drew the main path and the states that matter, and described the branches in the specification. Issues Review is left for the next sprint and appears on the map only as \"in review\".",
    pt: "Um pedido do time moldou o escopo. Não era preciso desenhar cada ramificação de cada tela. Desenhei o caminho principal e os estados que importam, e descrevi as ramificações na especificação. A Revisão de Issues fica para a próxima sprint e aparece no mapa só como “em revisão”.",
  },

  // 8. Outcome
  "outcome.title": {
    en: "Outcome",
    pt: "Resultado",
  },
  "outcome.lead1": {
    en: "Content's curation flow, designed on top of the map of the whole flow.",
    pt: "O fluxo de curadoria do Conteúdo, desenhado sobre o mapa do fluxo inteiro.",
  },
  "outcome.text1": {
    en: "The Content team's flow is delivered: 16 desktop frames and an annotated specification for each screen, where every requirement points to the finding it came from. The project is in progress, so this is a first result, not the final one.",
    pt: "O fluxo da equipe de Conteúdo está entregue: 16 frames desktop e uma especificação anotada para cada tela, em que cada exigência aponta para o achado de onde veio. O projeto está em andamento, então este é um primeiro resultado, e não o final.",
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
    en: "Content's work was clear on screen and confusing once it left it.",
    pt: "O trabalho do Conteúdo era claro na tela e confuso depois que saía dela.",
  },
  "outcome.item2": {
    en: "A map of the whole flow, with every return path named.",
    pt: "Um mapa do fluxo inteiro, com cada caminho de volta nomeado.",
  },
  "outcome.item3": {
    en: "One click in Content could undo other teams' work.",
    pt: "Um clique no Conteúdo podia desfazer o trabalho de outras equipes.",
  },
  "outcome.item4": {
    en: "Rules for editing and revoking, written for the team to confirm.",
    pt: "Regras para editar e revogar, escritas para o time confirmar.",
  },
  "outcome.item5": {
    en: "Some findings were waiting on decisions, and others were not.",
    pt: "Alguns achados esperavam decisões, e outros não.",
  },
  "outcome.item6": {
    en: "Findings sorted into rules, interface and defects, so design could move ahead on what needed no decision.",
    pt: "Achados separados em regra, interface e defeitos, para o desenho andar no que não precisava de decisão.",
  },
  "outcome.text4": {
    en: "What comes next",
    pt: "O que vem a seguir",
  },
  "outcome.item7": {
    en: "The Issues Analyst flow comes next, then Client Service, both designed on the same map.",
    pt: "O fluxo do Analista de Issues vem a seguir, depois o do Atendimento, ambos desenhados sobre o mesmo mapa.",
  },
  "outcome.item8": {
    en: "The team's answers to the open questions in the flow, such as where a returned passage goes back to and who owns the client registry. The specification already says what each answer would change.",
    pt: "As respostas do time às perguntas abertas do fluxo, como para onde volta um trecho devolvido e quem é dono do cadastro de clientes. A especificação já diz o que cada resposta mudaria.",
  },
  "outcome.item9": {
    en: "Usability testing of the design. There are no outcome metrics yet, and these are design deliverables, not usage results.",
    pt: "Testes de usabilidade do desenho. Ainda não há métricas de resultado, e estas são entregas de design, não resultados de uso.",
  },
  "outcome.text5": {
    en: "What I take from this",
    pt: "O que levo disso",
  },
  "outcome.text6": {
    en: "In a flow shared by several teams, the hard part is not the screen. It is the moment one team hands the work to the next.",
    pt: "Em um fluxo compartilhado por várias equipes, a parte difícil não é a tela. É o momento em que uma equipe passa o trabalho para a próxima.",
  },

  // 9. Menu lateral do case e rodapé
  "case.footer.rights": {
    en: "All rights reserved.",
    pt: "Todos os direitos reservados.",
  },
} satisfies Record<string, Record<Lang, string>>;

export type PrysmoKey = keyof typeof copy;

export const prysmo = (lang: Lang) => (key: PrysmoKey) => copy[key][lang];
