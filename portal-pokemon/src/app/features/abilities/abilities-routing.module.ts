import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbilitiesListComponent } from './abilities-list/abilities-list.component';
import { AbilityDetailComponent } from './ability-detail/ability-detail.component';

const routes: Routes = [
  { path: '', component: AbilitiesListComponent },
  { path: ':id', component: AbilityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbilitiesRoutingModule {}
