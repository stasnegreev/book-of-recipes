import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RecipeFormComponent } from './components/new-recipe-form/recipe-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRecipePageComponent } from './pages/edit-recipe-page/edit-recipe-page.component';
import { CreateRecipePageComponent } from './pages/create-recipe-page/create-recipe-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { MigrationDbComponent } from './pages/migration-db/migration-db.component';


@NgModule({
  declarations: [
    AdminComponent,
    RecipeFormComponent,
    EditRecipePageComponent,
    CreateRecipePageComponent,
    MigrationDbComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AdminRoutingModule,
  ],
  providers: [
    RecipeResolver,
  ]
})

export class AdminModule { }
