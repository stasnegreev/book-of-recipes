import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { RecipesTypeComponent } from './components/recipes-type/recipes-type.component';
import { UsersListsComponent } from './components/users-lists/users-lists.component';
import { UsersFavoritesListsComponent } from './components/users-favorites-lists/users-favorites-lists.component';
import { UsersPopularsListsComponent } from './components/users-populars-lists/users-populars-lists.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RouterModule } from '@angular/router';
import { SystemRoutingModule } from './system-routing.module';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  declarations: [
    SystemComponent,
    RecipesTypeComponent,
    UsersListsComponent,
    UsersFavoritesListsComponent,
    UsersPopularsListsComponent,
    RecipesComponent,
    RecipeComponent,
  ],
  exports: [
    SystemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
