# Portal Pokémon

Projeto Angular 15 + PrimeNG que consome a [PokeAPI](https://pokeapi.co/) para listar Pokémon, tipos, habilidades, itens, quiz e montar uma equipe de até 6 Pokémon.

## Stack

- **Angular 15** – framework
- **PrimeNG 15** – componentes de UI (tabelas, cards, menu, breadcrumb, etc.)
- **TypeScript** – tipagem
- **SCSS** – estilos
- **PokeAPI** – fonte de dados REST

## Estrutura de pastas

```
src/app/
├── core/           # Serviços singleton (PokeApiService, TeamService), modelos
├── shared/         # Componentes e pipes reutilizáveis (pokemon-card, type-chip, stats-bar, search-bar, etc.)
├── layout/         # MainLayout (menu, breadcrumb, router-outlet)
├── features/       # Módulos por funcionalidade (home, pokemon, types, abilities, items, quiz, team)
├── app.module.ts
└── app-routing.module.ts
```

## Como rodar

```bash
cd portal-pokemon
npm install
ng serve
```

Acesse `http://localhost:4200/`.

## Comandos

- `ng serve` – servidor de desenvolvimento
- `ng build` – build de produção
- `ng test` – testes unitários (Karma)

## Backlog

O backlog do produto está em `../docs/backlog-portal-pokemon.md` (e em HTML/PDF na pasta `docs/` na raiz do repositório).
