import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../../core/services/poke-api.service';

@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.scss'],
})
export class TypesListComponent implements OnInit {
  types: { name: string; url: string }[] = [];
  loading = true;

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApi.getTypesList().subscribe({
      next: (res) => {
        this.types = (res.results || []).filter((t) => !['shadow', 'unknown'].includes(t.name));
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }
}
