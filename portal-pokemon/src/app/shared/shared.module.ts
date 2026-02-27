import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { PadIdPipe } from './pipes/pad-id.pipe';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { TypeChipComponent } from './components/type-chip/type-chip.component';
import { StatsBarComponent } from './components/stats-bar/stats-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

@NgModule({
  declarations: [
    PadIdPipe,
    PokemonCardComponent,
    TypeChipComponent,
    StatsBarComponent,
    SearchBarComponent,
    LoadingSpinnerComponent,
    EmptyStateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    TagModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    InputTextModule,
  ],
  exports: [
    PadIdPipe,
    PokemonCardComponent,
    TypeChipComponent,
    StatsBarComponent,
    SearchBarComponent,
    LoadingSpinnerComponent,
    EmptyStateComponent,
  ],
})
export class SharedModule {}
