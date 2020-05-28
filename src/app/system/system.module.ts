import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { RecipesTypeComponent } from './components/recipes-type/recipes-type.component';
import { UsersListsComponent } from './components/users-lists/users-lists.component';
import { UsersFavoritesListsComponent } from './components/users-favorites-lists/users-favorites-lists.component';
import { UsersPopularsListsComponent } from './components/users-populars-lists/users-populars-lists.component';
import {RecipesService} from './services/recipes.service';



@NgModule({
  declarations: [
    SystemComponent,
    RecipesTypeComponent,
    UsersListsComponent,
    UsersFavoritesListsComponent,
    UsersPopularsListsComponent
  ],
  exports: [
    SystemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RecipesService
  ]
})
export class SystemModule { }
