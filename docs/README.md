# Documentação – Portal Pokémon

## Backlog do produto

O backlog do projeto está disponível em três formatos:

| Arquivo | Descrição |
|--------|-----------|
| `backlog-portal-pokemon.md` | Fonte em Markdown (versionável e editável). |
| `backlog-portal-pokemon.html` | Versão HTML para visualização e impressão. |
| `backlog-portal-pokemon.pdf` | PDF gerado a partir do Markdown (veja abaixo). |

### Como obter o PDF

**Opção 1 – Gerar com Node (recomendado)**  
Na raiz do projeto, execute:

```bash
npm run pdf:backlog
```

O PDF será criado em `docs/backlog-portal-pokemon.pdf`. Na primeira execução, a ferramenta pode demorar alguns minutos para baixar o Chromium.

**Opção 2 – Imprimir a partir do HTML**  
1. Abra o arquivo `docs/backlog-portal-pokemon.html` no navegador.  
2. Use **Arquivo → Imprimir** (ou atalho de impressão).  
3. Escolha **Salvar como PDF** como destino e salve o arquivo.

Ambas as opções produzem um PDF completo com capa, visão do produto, épicos, user stories, critérios de aceite, sprints, lista para ferramentas e legenda.

## Git e histórico de evoluções

| Arquivo | Descrição |
|--------|-----------|
| [GIT_WORKFLOW.md](GIT_WORKFLOW.md) | Padrão de commits (Conventional Commits com ID da US), branches por épico e fluxo de desenvolvimento. |
| [HISTORICO_EVOLUCOES.md](HISTORICO_EVOLUCOES.md) | Tabela das 29 evoluções (uma por user story), com versão, data, épico e branch; atualizar ao concluir cada US. |
