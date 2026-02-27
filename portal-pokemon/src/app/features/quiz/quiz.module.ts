import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { QuizComponent } from './quiz.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule, QuizRoutingModule, SharedModule, ButtonModule],
})
export class QuizModule {}
