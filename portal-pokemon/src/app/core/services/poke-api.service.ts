import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  PokemonListResponse,
  Pokemon,
  TypeResponse,
  AbilityResponse,
  ItemListResponse,
  ItemResponse,
  EvolutionChainResponse,
} from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokeApiService {
  private readonly baseUrl = environment.pokeApiBaseUrl;

  constructor(private http: HttpClient) {}

  get<T>(path: string): Observable<T> {
    const url = path.startsWith('http') ? path : `${this.baseUrl}/${path.replace(/^\//, '')}`;
    return this.http.get<T>(url);
  }

  getPokemonList(offset = 0, limit = 20): Observable<PokemonListResponse> {
    return this.get<PokemonListResponse>(`pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemonById(id: number | string): Observable<Pokemon> {
    return this.get<Pokemon>(`pokemon/${id}`);
  }

  getType(name: string): Observable<TypeResponse> {
    return this.get<TypeResponse>(`type/${name}`);
  }

  getTypesList(): Observable<{ count: number; results: { name: string; url: string }[] }> {
    return this.get('type?limit=100');
  }

  getAbility(id: number | string): Observable<AbilityResponse> {
    return this.get<AbilityResponse>(`ability/${id}`);
  }

  getAbilitiesList(offset = 0, limit = 100): Observable<{ count: number; next: string | null; previous: string | null; results: { name: string; url: string }[] }> {
    return this.get(`ability?offset=${offset}&limit=${limit}`);
  }

  getItemsList(offset = 0, limit = 50): Observable<ItemListResponse> {
    return this.get<ItemListResponse>(`item?offset=${offset}&limit=${limit}`);
  }

  getItemById(id: number | string): Observable<ItemResponse> {
    return this.get<ItemResponse>(`item/${id}`);
  }

  getItemCategories(): Observable<{ count: number; results: { name: string; url: string }[] }> {
    return this.get('item-category?limit=50');
  }

  getEvolutionChain(id: number): Observable<EvolutionChainResponse> {
    return this.get<EvolutionChainResponse>(`evolution-chain/${id}`);
  }

  getSpecies(id: number | string): Observable<{ evolution_chain: { url: string } }> {
    return this.get(`pokemon-species/${id}`);
  }
}
