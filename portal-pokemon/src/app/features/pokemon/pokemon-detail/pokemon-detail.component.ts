import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PokeApiService } from '../../../core/services/poke-api.service';
import { TeamService } from '../../../core/services/team.service';
import { Pokemon } from '../../../core/models/pokemon.model';
import { StatItem } from '../../../shared/components/stats-bar/stats-bar.component';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | null = null;
  loading = true;
  stats: StatItem[] = [];
  imageUrl = '';

  constructor(
    private route: ActivatedRoute,
    private pokeApi: PokeApiService,
    public teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.pokeApi.getPokemonById(params['id'])))
      .subscribe({
        next: (p) => {
          this.pokemon = p;
          this.stats = (p.stats || []).map((s) => ({
            name: s.stat.name.replace('-', ' '),
            value: s.base_stat,
          }));
          this.imageUrl =
            p.sprites?.other?.['official-artwork']?.front_default ||
            p.sprites?.front_default ||
            '';
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
