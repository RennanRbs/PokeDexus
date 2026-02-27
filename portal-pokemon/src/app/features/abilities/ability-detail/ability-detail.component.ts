import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PokeApiService } from '../../../core/services/poke-api.service';
import { AbilityResponse } from '../../../core/models/pokemon.model';
import { Pokemon } from '../../../core/models/pokemon.model';

@Component({
  selector: 'app-ability-detail',
  templateUrl: './ability-detail.component.html',
  styleUrls: ['./ability-detail.component.scss'],
})
export class AbilityDetailComponent implements OnInit {
  ability: AbilityResponse | null = null;
  pokemonList: Pokemon[] = [];
  loading = true;

  constructor(private route: ActivatedRoute, private pokeApi: PokeApiService) {}

  getFirstEffect(): string {
    const entries = this.ability?.effect_entries || [];
    return entries[0]?.effect ?? '';
  }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.pokeApi.getAbility(params['id'])))
      .subscribe({
        next: (res) => {
          this.ability = res;
          const urls = (res.pokemon || []).map((p) => p.pokemon.url).slice(0, 20);
          const ids = urls.map((u) => parseInt(u.split('/').filter(Boolean).pop()!, 10));
          if (ids.length === 0) {
            this.loading = false;
            return;
          }
          let done = 0;
          ids.forEach((id, i) => {
            this.pokeApi.getPokemonById(id).subscribe({
              next: (p) => {
                this.pokemonList[i] = p;
                done++;
                if (done === ids.length) {
                  this.pokemonList = this.pokemonList.filter(Boolean);
                  this.loading = false;
                }
              },
              error: () => {
                done++;
                if (done === ids.length) this.loading = false;
              },
            });
          });
        },
        error: () => (this.loading = false),
      });
  }
}
