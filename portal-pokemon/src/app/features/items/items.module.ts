import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ItemsListComponent, ItemDetailComponent],
  imports: [CommonModule, ItemsRoutingModule, RouterModule, SharedModule, TableModule],
})
export class ItemsModule {}
