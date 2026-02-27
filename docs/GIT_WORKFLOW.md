# Workflow Git – Portal Pokémon

Este guia descreve o padrão de commits, as branches de feature e como manter o [histórico de evoluções](HISTORICO_EVOLUCOES.md) alinhado ao desenvolvimento do Portal Pokémon.

---

## 1. Padrão de commits

Use **Conventional Commits** em português, com ID da user story e título curto:

```
<tipo>(<escopo>): [<ID>] <descrição curta>
```

### Tipos

| Tipo | Uso |
|------|-----|
| `feat` | Nova funcionalidade (user story de produto) |
| `fix` | Correção de bug ou ajuste fino |
| `docs` | Apenas documentação (ex.: README) |
| `test` | Testes unitários ou e2e |
| `refactor` | Refatoração sem mudança de comportamento |
| `chore` | Configuração, build, dependências |

### Escopo (opcional)

Módulo ou área do projeto: `core`, `pokemon`, `tipos`, `habilidades`, `itens`, `quiz`, `equipe`, `services`, etc. Pode ser omitido se o ID já identificar a área.

### ID e descrição

- **ID:** Código da user story do backlog (F01, P02, T01, H01, I01, G01, Q01, E01, QD01, etc.).
- **Descrição curta:** Mesmo texto da lista "Backlog para ferramentas" em [backlog-portal-pokemon.md](backlog-portal-pokemon.md) (ex.: "Home com seções e links").

### Exemplos

```
feat(core): [F01] Home com seções e links
feat(core): [F02] Menu e breadcrumb
feat(core): [F03] Projeto Angular 15 + PrimeNG + estrutura
feat(core): [F04] Serviços base PokeAPI
feat(pokemon): [P01] Lista paginada de Pokémon
feat(pokemon): [P04] Detalhe do Pokémon
feat(tipos): [T01] Lista de tipos
feat(quiz): [Q01] Quiz com perguntas
test(services): [QD01] Testes em serviços
docs: [QD05] README completo
fix(pokemon): [P02] Ajuste no debounce da busca
```

### Regra

**Um commit por user story entregue.** Uma "evolução" = uma US concluída (critérios de aceite atendidos, code review, testes e lint ok). Commits de correção podem referenciar o mesmo ID na mensagem.

---

## 2. Branches de feature (um épico = uma branch)

Cada épico do backlog corresponde a uma branch de feature:

| Épico | Branch |
|-------|--------|
| 1 – Fundação e navegação | `feature/epico-1-fundacao-navegacao` |
| 2 – Listagem e detalhe de Pokémon | `feature/epico-2-listagem-detalhe-pokemon` |
| 3 – Tipos e Habilidades | `feature/epico-3-tipos-habilidades` |
| 4 – Itens e Gerações | `feature/epico-4-itens-geracoes` |
| 5 – Quiz e engajamento | `feature/epico-5-quiz-engajamento` |
| 6 – Minha equipe | `feature/epico-6-minha-equipe` |
| 7 – Qualidade e boas práticas | `feature/epico-7-qualidade-boas-praticas` |

### Fluxo

1. **Branch base:** `main` (ou `develop`, conforme convenção do time).
2. Para cada épico:
   - Criar a branch a partir de `main`:  
     `git checkout main && git pull && git checkout -b feature/epico-N-nome`
   - Implementar as user stories daquele épico, com **um commit por US** no padrão acima.
   - Ao concluir o épico: abrir PR, revisar e fazer merge em `main`.
3. Repetir para o próximo épico a partir de `main` atualizado.

### Ordem recomendada

Seguir a ordem dos épicos **1 → 7**, pois há dependência lógica (fundação primeiro, depois listagem/detalhe, tipos, itens, quiz, equipe, qualidade). Alternativamente, pode-se seguir a [sugestão de sprints](backlog-portal-pokemon.md) do backlog (sprints 1 a 5), que misturam US de vários épicos; nesse caso, as branches ainda são por épico, mas o planejamento de merge pode ser por sprint.

---

## 3. Histórico de evoluções

O arquivo [HISTORICO_EVOLUCOES.md](HISTORICO_EVOLUCOES.md) contém uma tabela com as 29 entregas previstas (uma por user story).

### Como atualizar

Ao concluir uma user story e fazer o commit correspondente:

1. Abra `docs/HISTORICO_EVOLUCOES.md`.
2. Localize a linha do **ID** da US entregue.
3. Preencha a coluna **Data** com a data da entrega (ex.: `2025-03-15`).
4. Se usar versionamento semântico por entrega, ajuste a coluna **Versão** conforme sua convenção (ex.: 1.0.0 para épico 1 completo, 1.1.0 para épico 2 completo).
5. Faça commit da atualização do histórico junto com o merge da feature ou em um commit separado em `main` após o merge.

Assim, o histórico permanece alinhado ao backlog e aos commits reais do repositório.
