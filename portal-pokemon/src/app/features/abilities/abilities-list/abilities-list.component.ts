import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from '../../../core/services/poke-api.service';

@Component({
  selector: 'app-abilities-list',
  templateUrl: './abilities-list.component.html',
  styleUrls: ['./abilities-list.component.scss'],
})
export class AbilitiesListComponent implements OnInit {
  abilities: { name: string; url: string }[] = [];
  loading = true;
  searchTerm = '';

  constructor(private pokeApi: PokeApiService, private router: Router) {}

  ngOnInit(): void {
    this.pokeApi.getAbilitiesList(0, 100).subscribe({
      next: (res) => {
        this.abilities = res.results || [];
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  get filteredAbilities(): { name: string; url: string }[] {
    if (!this.searchTerm.trim()) return this.abilities;
    const term = this.searchTerm.toLowerCase();
    return this.abilities.filter((a) => a.name.toLowerCase().includes(term));
  }

  onSearch(term: string): void {
    this.searchTerm = term;
  }

  goToDetail(url: string): void {
    const id = url.split('/').filter(Boolean).pop();
    if (id) this.router.navigate(['/abilities', id]);
  }
}
