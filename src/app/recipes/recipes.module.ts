import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipePageComponent } from './pages/recipe/recipe-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecipePageComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class RecipesModule { }
