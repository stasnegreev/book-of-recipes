import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { SystemComponent } from './system.component';

const routes: Routes = [
  {
    path: 'system',
    component: SystemComponent,
  },
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
