import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRecipePageComponent } from './pages/create-recipe-page/create-recipe-page.component';
import { EditRecipePageComponent } from './pages/edit-recipe-page/edit-recipe-page.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { MigrationDbComponent } from './pages/migration-db/migration-db.component';
const routes: Routes = [
  {
    path: 'create-recipe',
    component: CreateRecipePageComponent,
  },
  {
    path: 'edit-recipe/:id',
    component: EditRecipePageComponent,
    resolve: {
      recipe: RecipeResolver,
    }
  },
  {
    path: 'migration',
    component: MigrationDbComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
