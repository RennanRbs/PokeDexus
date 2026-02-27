import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PokeApiService } from '../../../core/services/poke-api.service';
import { ItemResponse } from '../../../core/models/pokemon.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  item: ItemResponse | null = null;
  loading = true;

  constructor(private route: ActivatedRoute, private pokeApi: PokeApiService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.pokeApi.getItemById(params['id'])))
      .subscribe({
        next: (res) => {
          this.item = res;
          this.loading = false;
        },
        error: () => (this.loading = false),
      });
  }

  get effectText(): string {
    if (!this.item?.effect_entries?.length) return '';
    const en = this.item.effect_entries.find((e) => e.language?.name === 'en');
    return en?.effect || this.item.effect_entries[0]?.effect || '';
  }
}
