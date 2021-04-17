import { Component, OnInit } from '@angular/core';
import {ApiRecipeService} from '../../../shared/services/recipe.service.ts/api-recipe.service';
import {RecipeModel} from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-migration-db',
  templateUrl: './migration-db.component.html',
  styleUrls: ['./migration-db.component.scss']
})
export class MigrationDbComponent implements OnInit {

  constructor(
    private apiRecipeService: ApiRecipeService,
  ) { }

  ngOnInit(): void {
  }

  migrate() {
    this.apiRecipeService.apiGetAllRecipes().subscribe(
      (list) => {
        // @ts-ignore
        list.forEach((recipe: RecipeModel) => {

          // const recipeToAdd = Object.assign(recipe, { nameForSearch });
          const recipeToAdd = new RecipeModel({
            ...recipe,
            ingredientsList: Object.values(recipe.ingredientsList),
            ingredients: Object.values(recipe.ingredients),
          });
          delete recipeToAdd.id;
          this.apiRecipeService.apiCreateNewRecipeWithId(recipeToAdd, recipe.id).then();
        });
      }
    );
  }
}
