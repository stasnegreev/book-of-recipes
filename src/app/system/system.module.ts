import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { RecipesTypeComponent } from './components/recipes-type/recipes-type.component';
import { UsersListsComponent } from './components/users-lists/users-lists.component';
import { UsersFavoritesListsComponent } from './components/users-favorites-lists/users-favorites-lists.component';
import { UsersPopularsListsComponent } from './components/users-populars-lists/users-populars-lists.component';
import { SharedModule } from '../shared/shared.module';
import { RecipesComponent } from '../recipes/pages/recipes/recipes.component';
import { RouterModule } from '@angular/router';
import { SystemRoutingModule } from './system-routing.module';
import { RecipeComponent } from '../recipes/components/recipe/recipe.component';
import { ShoppingListComponent } from '../main-layout/components/shoping-list/shopping-list.component';

@NgModule({
  declarations: [
    StartPageComponent,
    RecipesTypeComponent,
    UsersListsComponent,
    UsersFavoritesListsComponent,
    UsersPopularsListsComponent,
    RecipesComponent,
    RecipeComponent,
    ShoppingListComponent,
  ],
  exports: [
    StartPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    SystemRoutingModule
  ],
})
export class SystemModule { }
