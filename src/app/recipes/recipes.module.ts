import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipePageComponent } from './pages/recipe/recipe-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RecipePageComponent,
  ],
    imports: [
        CommonModule,
        RecipesRoutingModule,
        SharedModule,
    ]
})
export class RecipesModule { }
