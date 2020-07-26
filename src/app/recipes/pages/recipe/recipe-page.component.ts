import { Component, OnInit } from '@angular/core';
import {switchMap, take} from 'rxjs/operators';
import {RecipeService} from '../../../shared/services/recipe.service.ts/recipe.service';
import {ActivatedRoute} from '@angular/router';
import {RecipeModel} from '../../../shared/models/recipe.model';
import {ValidatorValue} from '../../../shared/constans/validator-value';
import {RecipeTypesNames} from '../../../shared/constans/recipe-types-names';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {
  public recipe: RecipeModel;
  public backgroundImage = 'none';
  public maxRating = ValidatorValue.MAX_RATING;
  public isImageLoading = true;
  public recipeID = '';
  public isLoading: false;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.subscribeRecipe();
  }

  private subscribeRecipe(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.recipeID = params.id || '';
        return this.recipeService.getRecipeByID(this.recipeID);
      })
    ).subscribe((recipe: RecipeModel) => {
      this.recipe = recipe;
      this.subscribeRecipeImageUrl();
    });
  }

  public subscribeRecipeImageUrl() {
    let recipeImageUrl = '';
    this.recipeService.getRecipeImage(this.recipeID).pipe(take(1))
      .subscribe(
        (resp) => {
          recipeImageUrl = `url(\"${resp}\")`;
          this.backgroundImage = recipeImageUrl;
          this.isImageLoading = false;
        },
        () => {
          switch (this.recipe.type) {
            case RecipeTypesNames.BREAKFAST:
              recipeImageUrl = `url(\"/assets/image/breakfast-stub.jpg\")`;
              break;
            case RecipeTypesNames.LUNCH:
              recipeImageUrl = `url(\"/assets/image/lunch-stub.jpg\")`;
              break;
            case RecipeTypesNames.DINNER:
              recipeImageUrl = `url(\"/assets/image/dinner-stub.jpg\")`;
              break;
            case RecipeTypesNames.SNACKS:
              recipeImageUrl = `url(\"/assets/image/snacks-stub.jpg\")`;
              break;
          }
          this.backgroundImage = recipeImageUrl;
          this.isImageLoading = false;
        });
  }
}
