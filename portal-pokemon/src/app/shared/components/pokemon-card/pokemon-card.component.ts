import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon, PokemonSprites, PokemonTypeSlot } from '../../../core/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon | { id: number; name: string; sprites?: PokemonSprites; types?: PokemonTypeSlot[] };
  @Output() cardClick = new EventEmitter<Pokemon | { id: number; name: string; sprites?: PokemonSprites; types?: PokemonTypeSlot[] }>();

  get imageUrl(): string {
    const sprites = this.pokemon?.sprites;
    if (!sprites) return 'assets/placeholder.png';
    return (
      sprites.other?.['official-artwork']?.front_default ||
      sprites.front_default ||
      'assets/placeholder.png'
    );
  }

  get types(): PokemonTypeSlot[] {
    return (this.pokemon as Pokemon).types || [];
  }

  onClick(): void {
    this.cardClick.emit(this.pokemon);
  }
}
