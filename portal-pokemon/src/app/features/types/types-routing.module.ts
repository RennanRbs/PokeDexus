import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypesListComponent } from './types-list/types-list.component';
import { TypeDetailComponent } from './type-detail/type-detail.component';

const routes: Routes = [
  { path: '', component: TypesListComponent },
  { path: ':name', component: TypeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesRoutingModule {}
