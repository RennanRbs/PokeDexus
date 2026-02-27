import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, RouterModule, MenuModule, BreadcrumbModule],
  exports: [MainLayoutComponent],
})
export class LayoutModule {}
