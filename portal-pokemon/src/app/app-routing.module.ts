import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'pokemon', loadChildren: () => import('./features/pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'types', loadChildren: () => import('./features/types/types.module').then(m => m.TypesModule) },
  { path: 'abilities', loadChildren: () => import('./features/abilities/abilities.module').then(m => m.AbilitiesModule) },
  { path: 'items', loadChildren: () => import('./features/items/items.module').then(m => m.ItemsModule) },
  { path: 'quiz', loadChildren: () => import('./features/quiz/quiz.module').then(m => m.QuizModule) },
  { path: 'team', loadChildren: () => import('./features/team/team.module').then(m => m.TeamModule) },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
