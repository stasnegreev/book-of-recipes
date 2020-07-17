import { Injectable } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { FormGroup } from '@angular/forms';
import { FILE_TYPES } from '../../constans/file-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiRecipeService } from './api-recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private apiRecipeService: ApiRecipeService) {

  }

  public addNewRecipe(form: FormGroup) {
    const ingredientsListToAdd: string[] = [];
    form.get('ingredients').value.forEach((ingredient) => {
      ingredientsListToAdd.push(ingredient.name);
    });
    const recipeToAdd = new RecipeModel({ ...form.value, ingredientsList: ingredientsListToAdd });
    this.apiRecipeService.apiCreateNewRecipe(recipeToAdd).then(
      (resp) => {
        if (form.get('image').value) {
          const file = form.get('image').value._files[0];
          this.apiRecipeService.uploadFile(resp.id, file, FILE_TYPES.RECIPE_IMAGE);
        }
      }
    );
  }

  public getRecipes(filterType: string, filterValue: string): Observable<RecipeModel[]> {
    return this.apiRecipeService.apiGetRecipes(filterType, filterValue).pipe(
      map((data) => {
        return  data as RecipeModel[];
      })
    );
  }

  public getRecipeByID(recipeID: string): Observable<RecipeModel> {
    return this.apiRecipeService.apiGetRecipeByID(recipeID).pipe(
      map((data) => {
        return  data as RecipeModel;
      })
    );
  }

  public getRecipesByName(filterType: string, filterValue: string): Observable<RecipeModel[]> {
    filterValue = filterValue.toLowerCase();
    return this.apiRecipeService.apiGetRecipesByName(filterType, filterValue).pipe(
      map((data) => {
        return  data as RecipeModel[];
      })
    );
  }

  public getRecipeImage(name: string) {
    return this.apiRecipeService.getFileUrl(FILE_TYPES.RECIPE_IMAGE, name);
  }
}
