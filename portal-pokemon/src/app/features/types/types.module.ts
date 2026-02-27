import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TypesListComponent } from './types-list/types-list.component';
import { TypeDetailComponent } from './type-detail/type-detail.component';
import { TypesRoutingModule } from './types-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TypesListComponent, TypeDetailComponent],
  imports: [CommonModule, TypesRoutingModule, RouterModule, SharedModule],
})
export class TypesModule {}
