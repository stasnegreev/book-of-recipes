import { Injectable  } from '@angular/core';
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

  public addNewRecipe(form: FormGroup): Promise<any> {
    const ingredientsListToAdd: string[] = [];
    form.get('ingredients').value.forEach((ingredient) => {
      ingredientsListToAdd.push(ingredient.name);
    });
    const recipeToAdd = new RecipeModel({ ...form.value, ingredientsList: ingredientsListToAdd });
    if (!form.get('image').value) {
      return this.apiRecipeService.apiCreateNewRecipe(recipeToAdd);
    } else {
      return this.apiRecipeService.apiCreateNewRecipe(recipeToAdd).then((resp) => {
        const file = form.get('image').value._files[0];
        this.apiRecipeService.uploadFile(resp.id, file, FILE_TYPES.RECIPE_IMAGE);
      });
    }
  }

  public updateRecipe(recipeData, recipeID: string): Promise<any> {
    const ingredientsListToAdd: string[] = [];
    recipeData.ingredients.forEach((ingredient) => {
      ingredientsListToAdd.push(ingredient.name);
    });
    const recipeToAdd = new RecipeModel({ ...recipeData, ingredientsList: ingredientsListToAdd });
    if (!recipeData.image) {
      return this.apiRecipeService.apiUpdateRecipe(recipeToAdd, recipeID);
    } else {
      return this.apiRecipeService.apiUpdateRecipe(recipeToAdd, recipeID).then(() => {
        const file = recipeData.image._files[0];
        this.apiRecipeService.uploadFile(recipeID, file, FILE_TYPES.RECIPE_IMAGE);
      });
    }
  }

  public updateRecipeField(recipeId: string, field: { [key: string]: string | boolean | number | any[] }) {
    return this.apiRecipeService.apiUpdateRecipeField(recipeId, field);
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
        return new RecipeModel(data);
      })
    );
  }

  public deleteRecipe(recipeID: string): Promise<any> {
    return this.apiRecipeService.apiDeleteRecipe(recipeID);
  }

  public getRecipesByName(filterType: string, filterValue: string): Observable<RecipeModel[]> {
    filterValue = filterValue.toLowerCase();
    return this.apiRecipeService.apiGetRecipesByName(filterType, filterValue).pipe(
      map((data) => {
        return  data as RecipeModel[];
      })
    );
  }

  public getRecipeImage(name: string): Observable<string> {
    return this.apiRecipeService.getFileUrl(FILE_TYPES.RECIPE_IMAGE, name);
  }
}
