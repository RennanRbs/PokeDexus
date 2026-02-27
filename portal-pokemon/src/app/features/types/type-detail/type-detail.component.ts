import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PokeApiService } from '../../../core/services/poke-api.service';
import { TypeResponse } from '../../../core/models/pokemon.model';
import { Pokemon } from '../../../core/models/pokemon.model';

@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.component.html',
  styleUrls: ['./type-detail.component.scss'],
})
export class TypeDetailComponent implements OnInit {
  typeName = '';
  type: TypeResponse | null = null;
  pokemonList: Pokemon[] = [];
  loading = true;

  constructor(private route: ActivatedRoute, private pokeApi: PokeApiService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          this.typeName = params['name'];
          return this.pokeApi.getType(params['name']);
        })
      )
      .subscribe({
        next: (res) => {
          this.type = res;
          const urls = (res.pokemon || []).map((p) => p.pokemon.url).slice(0, 30);
          const ids = urls.map((u) => {
            const parts = u.split('/');
            return parseInt(parts[parts.length - 2], 10);
          });
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
