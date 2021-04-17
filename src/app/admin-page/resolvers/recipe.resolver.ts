import {RecipeModel} from '../../shared/models/recipe.model';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {RecipeService} from '../../shared/services/recipe.service.ts/recipe.service';
import {Observable} from 'rxjs';


@Injectable()
export class RecipeResolver implements Resolve<RecipeModel> {
  constructor(
    private recipeService: RecipeService,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RecipeModel> {
    return this.recipeService.getRecipeByID(route.params.id);
  }
}
