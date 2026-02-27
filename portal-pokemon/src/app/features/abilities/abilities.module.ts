import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { AbilitiesListComponent } from './abilities-list/abilities-list.component';
import { AbilityDetailComponent } from './ability-detail/ability-detail.component';
import { AbilitiesRoutingModule } from './abilities-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AbilitiesListComponent, AbilityDetailComponent],
  imports: [CommonModule, AbilitiesRoutingModule, RouterModule, SharedModule, TableModule],
})
export class AbilitiesModule {}
