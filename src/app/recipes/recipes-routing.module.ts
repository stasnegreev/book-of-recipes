import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipePageComponent } from './pages/recipe/recipe-page.component';

const routes: Routes = [
  {
    path: ':type',
    component: RecipesComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipe/:id',
    component: RecipePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule { }
