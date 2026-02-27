import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PokemonRoutingModule,
    DropdownModule,
    PaginatorModule,
    ButtonModule,
  ],
})
export class PokemonModule {}
