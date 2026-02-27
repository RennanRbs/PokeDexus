# Backlog do Produto – Portal Pokémon (PokeAPI)

**Projeto:** Angular 15 + PrimeNG  
**Versão:** 1.0  
**Data:** Fevereiro de 2025

Este documento descreve o backlog completo do produto *Portal Pokémon*, um site que consome a PokeAPI para exibir listagens, detalhes, tipos, habilidades, itens, quiz e a funcionalidade "Minha equipe". O objetivo é demonstrar as competências exigidas na vaga de Desenvolvedor Front-End: Angular 15, PrimeNG, consumo de APIs RESTful, componentes reutilizáveis, UX/UI, Git, testes unitários, Clean Code, Code Review e metodologias ágeis.

---

## 1. Visão do produto

### Objetivo do site

O Portal Pokémon é um portal web que utiliza a [PokeAPI](https://pokeapi.co/) como fonte única de dados. O visitante pode:

- Navegar por uma lista de Pokémon com busca e filtros.
- Ver detalhes de cada Pokémon (stats, tipos, habilidades, evoluções).
- Explorar tipos de Pokémon e suas relações de vantagem/desvantagem.
- Consultar habilidades e quais Pokémon as possuem.
- Navegar por um catálogo de itens com filtros.
- Opcionalmente, ver gerações/jogos e Pokémon por geração.
- Responder a um quiz sobre Pokémon (tipo, nome, habilidade).
- Montar "Minha equipe" com até 6 Pokémon (persistido localmente).

Todas as telas seguem padrões de UX/UI consistentes e reutilizam componentes (cards, chips de tipo, tabelas, modais, busca).

### Stack técnica

- **Front-end:** Angular 15, PrimeNG, HTML5, CSS3, TypeScript
- **API:** PokeAPI (REST)
- **Controle de versão:** Git
- **Qualidade:** Testes unitários (Jasmine/Karma ou Jest), lint (ESLint), boas práticas (Clean Code, Code Review)
- **Gestão do trabalho:** Metodologias ágeis (Scrum/Kanban), backlog e sprints

### Critérios de "pronto" gerais

Uma história considera-se **pronta** quando:

- O código foi revisado (Code Review ou auto-revisão com checklist).
- Os itens planejados possuem testes unitários quando aplicável.
- Não há erros de lint no escopo alterado.
- A funcionalidade atende aos critérios de aceite descritos na história.

---

## 2. Épicos e user stories

### Épico 1: Fundação e navegação

**Objetivo:** Estabelecer o projeto Angular, a estrutura de pastas, a integração com a PokeAPI e a navegação principal para que o usuário encontre todas as seções do site.

| ID  | História | Critérios de aceite | Prioridade |
|-----|----------|---------------------|------------|
| F01 | Como visitante, quero acessar uma home para entender o que o site oferece. | Home exibe seções ou links para Pokémon, Tipos, Habilidades, Itens, Quiz e Minha equipe; layout responsivo. | Must |
| F02 | Como visitante, quero navegar entre seções por menu e breadcrumb. | Menu principal e breadcrumb presentes nas páginas; rotas funcionando corretamente. | Must |
| F03 | Como desenvolvedor, quero o projeto Angular 15 com PrimeNG e estrutura de pastas (core, shared, features). | Estrutura de pastas criada; tema PrimeNG aplicado; README com instruções de setup. | Must |
| F04 | Como desenvolvedor, quero serviços base para chamadas à PokeAPI (HTTP, tipagem). | Serviço genérico ou base para HTTP e interfaces TypeScript para os recursos utilizados. | Must |

---

### Épico 2: Listagem e detalhe de Pokémon

**Objetivo:** Permitir que o visitante liste Pokémon de forma paginada, busque e filtre por tipo, e visualize detalhes completos e cadeia de evolução.

| ID  | História | Critérios de aceite | Prioridade |
|-----|----------|---------------------|------------|
| P01 | Como visitante, quero ver uma lista paginada de Pokémon. | Página "Pokémon" com tabela ou cards, paginação (ex.: 20 por página), dados da PokeAPI. | Must |
| P02 | Como visitante, quero buscar Pokémon por nome. | Campo de busca com debounce; lista filtra por nome. | Must |
| P03 | Como visitante, quero filtrar Pokémon por tipo. | Filtro por tipo (dropdown ou chips); lista atualiza conforme seleção. | Must |
| P04 | Como visitante, quero ver detalhes de um Pokémon ao clicar. | Detalhe com foto, tipos, stats (HP, Ataque, etc.), habilidades; exibido em modal ou página dedicada. | Must |
| P05 | Como visitante, quero ver a cadeia de evolução do Pokémon. | Na tela de detalhe, exibir evoluções (pré-evolução e próximas formas). | Should |
| P06 | Como desenvolvedor, quero componente reutilizável de card de Pokémon. | Componente `pokemon-card` com input (pokémon) e output (click); usado na listagem e em outras telas. | Must |

---

### Épico 3: Tipos e Habilidades

**Objetivo:** Permitir a exploração de tipos de Pokémon (lista e Pokémon por tipo, vantagens/desvantagens) e de habilidades (lista, busca e detalhe com Pokémon associados).

| ID  | História | Critérios de aceite | Prioridade |
|-----|----------|---------------------|------------|
| T01 | Como visitante, quero ver todos os tipos de Pokémon. | Página "Tipos" com lista ou grid de tipos (nome e cor ou ícone). | Must |
| T02 | Como visitante, quero ver quais Pokémon pertencem a um tipo. | Ao clicar em um tipo, listar Pokémon daquele tipo (reutilizando componente de lista/card). | Must |
| T03 | Como visitante, quero ver relações de vantagem/desvantagem do tipo. | Na tela do tipo, exibir "super efetivo contra" e "fraco contra". | Should |
| H01 | Como visitante, quero ver lista de habilidades com busca. | Página "Habilidades" com listagem e busca por nome. | Must |
| H02 | Como visitante, quero ver detalhe da habilidade e quais Pokémon a possuem. | Detalhe com nome, descrição e lista de Pokémon; reuso de card ou tabela. | Must |

---

### Épico 4: Itens e Gerações

**Objetivo:** Oferecer catálogo de itens com filtro e detalhe e, se escopo permitir, listagem de gerações/jogos e Pokémon por geração.

| ID  | História | Critérios de aceite | Prioridade |
|-----|----------|---------------------|------------|
| I01 | Como visitante, quero ver catálogo de itens. | Página "Itens" com listagem (nome, categoria, ícone se disponível) a partir da PokeAPI. | Should |
| I02 | Como visitante, quero filtrar itens por categoria e ver detalhe. | Filtro por categoria; ao clicar em item, exibir nome, descrição e efeito. | Should |
| G01 | Como visitante, quero ver gerações/jogos e Pokémon de cada geração. | Página "Gerações" listando gerações; ao escolher, listar jogos e Pokémon daquela geração. | Could |

---

### Épico 5: Quiz e engajamento

**Objetivo:** Propor um quiz com perguntas baseadas em dados da PokeAPI (tipo, nome, habilidade) e exibir pontuação ao final.

| ID  | História | Critérios de aceite | Prioridade |
|-----|----------|---------------------|------------|
| Q01 | Como visitante, quero responder perguntas sobre Pokémon (tipo, nome, número). | Tela "Quiz" com pergunta e opções; dados vindos da PokeAPI; feedback de certo/errado. | Must |
| Q02 | Como visitante, quero ver minha pontuação ao final do quiz. | Contador de acertos; ao terminar, exibir total e opção de jogar novamente. | Must |
| Q03 | Como visitante, quero escolher categoria do quiz (tipo, nome, habilidade). | Dropdown ou botões para tipo de pergunta antes de iniciar. | Should |

---

### Épico 6: Minha equipe

**Objetivo:** Permitir que o visitante monte uma equipe de até 6 Pokémon, persista localmente, visualize e remova itens.

| ID  | História | Critérios de aceite | Prioridade |
|-----|----------|---------------------|------------|
| E01 | Como visitante, quero adicionar Pokémon à "Minha equipe" (até 6). | Botão "Adicionar à equipe" no detalhe ou lista; persistência (ex.: localStorage); limite de 6. | Must |
| E02 | Como visitante, quero ver e remover Pokémon da minha equipe. | Página "Minha equipe" com os 6 slots; opção de remover e lista atualizada. | Must |
| E03 | Como visitante, quero ver minha equipe refletida na home (resumo). | Na home, exibir preview ou contador da equipe com link para a página. | Should |

---

### Épico 7: Qualidade e boas práticas

**Objetivo:** Garantir testes unitários, tratamento de erros e loading nas chamadas de API, e documentação básica do projeto.

| ID  | História | Critérios de aceite | Prioridade |
|-----|----------|---------------------|------------|
| QD01 | Como desenvolvedor, quero testes unitários nos serviços de API. | Serviços principais (Pokémon, Tipo, Habilidade) com testes (HttpClient mock, resposta mock). | Must |
| QD02 | Como desenvolvedor, quero testes unitários em componentes críticos. | Pelo menos: card de Pokémon, barra de stats, busca; testes de input/output e interação. | Should |
| QD03 | Como desenvolvedor, quero pipes testados (formatação de nome, número, tipo). | Pipes com testes unitários. | Should |
| QD04 | Como desenvolvedor, quero tratamento de erro e loading nas chamadas de API. | Loading durante requisições; mensagem amigável em erro; tela não quebra. | Must |
| QD05 | Como desenvolvedor, quero README com setup, scripts e decisões técnicas. | README com clone, install, run, estrutura de pastas e escolhas (Angular 15, PrimeNG, PokeAPI). | Must |

---

## 3. Sugestão de sprints

As sprints abaixo têm duração sugerida de 2 semanas cada. Os IDs referem-se às user stories do backlog.

| Sprint | Objetivo | IDs incluídos |
|--------|----------|----------------|
| **Sprint 1** | Fundação, navegação, listagem e detalhe de Pokémon, card reutilizável. | F01, F02, F03, F04, P01, P04, P06 |
| **Sprint 2** | Busca e filtro de Pokémon, evoluções, módulo de tipos completo. | P02, P03, P05, T01, T02, T03 |
| **Sprint 3** | Habilidades, itens, testes em serviços e tratamento de erro. | H01, H02, I01, I02, QD01, QD04 |
| **Sprint 4** | Quiz e Minha equipe. | Q01, Q02, Q03, E01, E02, E03 |
| **Sprint 5** | Gerações (opcional), testes em componentes e pipes, README. | G01, QD02, QD03, QD05 |

---

## 4. Backlog para ferramentas (GitHub Issues / Trello)

Lista de itens no formato sugerido para criação de issues ou cards:

```
[Épico 1] F01 - Home com seções e links
[Épico 1] F02 - Menu e breadcrumb
[Épico 1] F03 - Projeto Angular 15 + PrimeNG + estrutura
[Épico 1] F04 - Serviços base PokeAPI
[Épico 2] P01 - Lista paginada de Pokémon
[Épico 2] P02 - Busca por nome
[Épico 2] P03 - Filtro por tipo
[Épico 2] P04 - Detalhe do Pokémon
[Épico 2] P05 - Cadeia de evolução
[Épico 2] P06 - Componente pokemon-card reutilizável
[Épico 3] T01 - Lista de tipos
[Épico 3] T02 - Pokémon por tipo
[Épico 3] T03 - Vantagens/desvantagens do tipo
[Épico 3] H01 - Lista de habilidades com busca
[Épico 3] H02 - Detalhe da habilidade e Pokémon
[Épico 4] I01 - Catálogo de itens
[Épico 4] I02 - Filtro e detalhe de item
[Épico 4] G01 - Gerações e Pokémon por geração
[Épico 5] Q01 - Quiz com perguntas
[Épico 5] Q02 - Pontuação ao final
[Épico 5] Q03 - Categoria do quiz
[Épico 6] E01 - Adicionar à equipe (até 6)
[Épico 6] E02 - Ver e remover da equipe
[Épico 6] E03 - Resumo da equipe na home
[Épico 7] QD01 - Testes em serviços
[Épico 7] QD02 - Testes em componentes
[Épico 7] QD03 - Testes em pipes
[Épico 7] QD04 - Loading e tratamento de erro
[Épico 7] QD05 - README completo
```

---

## 5. Legenda

- **Must (obrigatório):** Item essencial para o MVP; o produto não está completo sem ele.
- **Should (desejável):** Importante para a experiência e a qualidade; deve ser feito se o tempo permitir.
- **Could (opcional):** Melhoria ou escopo extra; pode ser deixado para iterações futuras.

- **Pronto:** História considerada concluída quando atende aos critérios de aceite, passa por revisão de código (ou checklist de auto-revisão), possui testes unitários quando aplicável e não introduz erros de lint.
