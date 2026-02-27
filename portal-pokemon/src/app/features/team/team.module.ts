import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TeamComponent],
  imports: [CommonModule, TeamRoutingModule, RouterModule, SharedModule, ButtonModule],
})
export class TeamModule {}
