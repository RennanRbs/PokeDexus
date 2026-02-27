import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from '../../../core/services/poke-api.service';
import { ItemListItem } from '../../../core/models/pokemon.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  items: ItemListItem[] = [];
  loading = true;

  constructor(private pokeApi: PokeApiService, private router: Router) {}

  ngOnInit(): void {
    this.pokeApi.getItemsList(0, 100).subscribe({
      next: (res) => {
        this.items = res.results || [];
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  goToDetail(url: string): void {
    const id = url.split('/').filter(Boolean).pop();
    if (id) this.router.navigate(['/items', id]);
  }
}
