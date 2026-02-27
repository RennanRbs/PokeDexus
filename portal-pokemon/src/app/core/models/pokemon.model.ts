export interface NamedResource {
  name: string;
  url: string;
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonSprites {
  front_default: string | null;
  front_shiny?: string | null;
  other?: {
    'official-artwork'?: { front_default?: string };
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedResource;
}

export interface PokemonTypeSlot {
  slot: number;
  type: NamedResource;
}

export interface PokemonAbilitySlot {
  ability: NamedResource;
  is_hidden: boolean;
  slot: number;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  order: number;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonTypeSlot[];
  abilities: PokemonAbilitySlot[];
  species: NamedResource;
}

export interface TypeResponse {
  id: number;
  name: string;
  damage_relations?: {
    double_damage_to: NamedResource[];
    double_damage_from: NamedResource[];
    half_damage_to: NamedResource[];
    half_damage_from: NamedResource[];
    no_damage_to: NamedResource[];
    no_damage_from: NamedResource[];
  };
  pokemon: { slot: number; pokemon: NamedResource }[];
}

export interface AbilityResponse {
  id: number;
  name: string;
  effect_entries: Array<{ effect: string; language: NamedResource }>;
  pokemon: Array<{ is_hidden: boolean; pokemon: NamedResource }>;
}

export interface ItemListItem {
  name: string;
  url: string;
}

export interface ItemListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ItemListItem[];
}

export interface ItemResponse {
  id: number;
  name: string;
  category: NamedResource;
  effect_entries?: Array<{ effect: string; short_effect?: string; language: NamedResource }>;
}

export interface EvolutionChainLink {
  species: NamedResource;
  evolves_to: EvolutionChainLink[];
}

export interface EvolutionChainResponse {
  id: number;
  chain: EvolutionChainLink;
}
