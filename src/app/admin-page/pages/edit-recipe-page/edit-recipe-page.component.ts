import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service.ts/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-recipe-page',
  templateUrl: './edit-recipe-page.component.html',
  styleUrls: ['./edit-recipe-page.component.scss']
})
export class EditRecipePageComponent {

  public recipe: RecipeModel;
  public recipeImageUrl = '';

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    ) {
    this.recipe = this.route.snapshot.data.recipe;
    if (this.recipe) {
      this.getRecipeImageUrl();
    }
  }

  public getRecipeImageUrl() {
    this.recipeService.getRecipeImage(this.recipe.id).pipe(take(1))
      .subscribe(
        (resp) => {
          this.recipeImageUrl = resp;
        }
      );
  }
}
