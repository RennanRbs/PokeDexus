import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../core/services/poke-api.service';
import { Pokemon } from '../../core/models/pokemon.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  question = '';
  options: string[] = [];
  correctId: number | null = null;
  score = 0;
  answered = false;
  loading = true;
  pokemonList: Pokemon[] = [];

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit(): void {
    this.nextQuestion();
  }

  nextQuestion(): void {
    this.loading = true;
    this.answered = false;
    const offset = Math.floor(Math.random() * 200);
    this.pokeApi.getPokemonList(offset, 4).subscribe({
      next: (res) => {
        const results = (res.results || []).slice(0, 4);
        const ids = results.map((r) => {
          const parts = r.url.split('/');
          return parseInt(parts[parts.length - 2], 10);
        });
        const requests = ids.map((id) => this.pokeApi.getPokemonById(id));
        let done = 0;
        const list: Pokemon[] = [];
        requests.forEach((obs, i) => {
          obs.subscribe({
            next: (p) => {
              list[i] = p;
              done++;
              if (done === 4) {
                this.pokemonList = list.filter(Boolean);
                const correct = this.pokemonList[Math.floor(Math.random() * this.pokemonList.length)];
                this.correctId = correct?.id ?? null;
                this.question = 'Qual é este Pokémon?';
                this.options = this.pokemonList.map((p) => p.name);
                this.loading = false;
              }
            },
            error: () => {
              done++;
              if (done === 4) this.loading = false;
            },
          });
        });
      },
      error: () => (this.loading = false),
    });
  }

  check(name: string): void {
    if (this.answered) return;
    this.answered = true;
    const correctName = this.pokemonList.find((p) => p.id === this.correctId)?.name;
    if (name === correctName) this.score++;
  }

  get imageUrl(): string {
    const p = this.pokemonList.find((x) => x.id === this.correctId);
    if (!p?.sprites) return '';
    return p.sprites.other?.['official-artwork']?.front_default || p.sprites.front_default || '';
  }
}
