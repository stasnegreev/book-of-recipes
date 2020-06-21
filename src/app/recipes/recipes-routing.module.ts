import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';

const routes: Routes = [
  {
    path: 'recipes/:type',
    component: RecipesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule { }
