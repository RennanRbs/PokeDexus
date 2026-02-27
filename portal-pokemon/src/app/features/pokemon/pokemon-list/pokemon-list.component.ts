import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from '../../../core/services/poke-api.service';
import { Pokemon, PokemonListItem } from '../../../core/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  items: Pokemon[] = [];
  loading = true;
  totalRecords = 0;
  pageSize = 20;
  searchTerm = '';
  selectedType = '';
  types: { name: string; value: string }[] = [];

  constructor(private pokeApi: PokeApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadTypes();
    this.loadPage(0);
  }

  loadTypes(): void {
    this.pokeApi.getTypesList().subscribe((res) => {
      this.types = (res.results || [])
        .filter((t) => !['shadow', 'unknown'].includes(t.name))
        .map((t) => ({ name: t.name.charAt(0).toUpperCase() + t.name.slice(1), value: t.name }));
    });
  }

  loadPage(offset: number): void {
    this.loading = true;
    this.pokeApi.getPokemonList(offset, this.pageSize).subscribe({
      next: (res) => {
        this.totalRecords = res.count;
        const results = (res.results || []).slice(0, this.pageSize);
        if (results.length === 0) {
          this.items = [];
          this.loading = false;
          return;
        }
        const ids = results.map((r) => this.idFromUrl(r.url));
        this.fetchPokemonDetails(ids);
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  private idFromUrl(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2], 10);
  }

  private fetchPokemonDetails(ids: number[]): void {
    const requests = ids.map((id) => this.pokeApi.getPokemonById(id));
    let completed = 0;
    const pokemonList: Pokemon[] = [];
    requests.forEach((obs, i) => {
      obs.subscribe({
        next: (p) => {
          pokemonList[i] = p;
          completed++;
          if (completed === requests.length) {
            this.items = pokemonList.filter(Boolean);
            if (this.searchTerm) {
              this.items = this.items.filter((p) =>
                p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
              );
            }
            if (this.selectedType) {
              this.items = this.items.filter((p) =>
                p.types.some((t) => t.type.name === this.selectedType)
              );
            }
            this.loading = false;
          }
        },
        error: () => {
          completed++;
          if (completed === requests.length) this.loading = false;
        },
      });
    });
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    if (!term && !this.selectedType) {
      this.loadPage(0);
      return;
    }
    if (this.items.length && !this.selectedType) {
      this.items = this.items.filter((p) => p.name.toLowerCase().includes(term.toLowerCase()));
    } else {
      this.loadPage(0);
    }
  }

  onTypeChange(): void {
    if (this.selectedType) {
      this.pokeApi.getType(this.selectedType).subscribe((typeRes) => {
        const urls = (typeRes.pokemon || []).map((p) => p.pokemon.url);
        const ids = urls.map((u) => this.idFromUrl(u)).slice(0, 20);
        if (ids.length === 0) {
          this.items = [];
          this.loading = false;
          return;
        }
        this.fetchPokemonDetails(ids);
      });
    } else {
      this.loadPage(0);
    }
  }

  onPageChange(event: { first: number }): void {
    if (!this.selectedType) this.loadPage(event.first);
  }

  onCardClick(pokemon: Pokemon): void {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
