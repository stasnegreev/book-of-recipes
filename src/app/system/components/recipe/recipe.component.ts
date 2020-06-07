import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service.ts/recipe.service';
import { take } from 'rxjs/operators';
import { RecipeTypesNames } from '../../../shared/constans/recipe-types-names';
import { ValidatorValue } from '../../../shared/constans/validator-value';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent  implements OnInit {

  @Input() public recipe: RecipeModel;

  public backgroundImage = { 'background-image': 'none' };
  public maxRating = ValidatorValue.MAX_RATING;

  constructor(
    private recipeService: RecipeService,
    private basketService: BasketService,
  ) { }

  ngOnInit() {
    this.subscribeRecipeImageUrl();
    this.recipe.count = this.recipe.count || ValidatorValue.DEFAULT_QUANTITY;
  }

  public subscribeRecipeImageUrl() {
    let recipeImageUrl = '';
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
    this.backgroundImage = { 'background-image': recipeImageUrl};
    this.recipeService.getRecipeImage(this.recipe.id).pipe(take(1))
      .subscribe((resp) => {
        recipeImageUrl = `url(\"${resp}\")`;
        this.backgroundImage = { 'background-image': recipeImageUrl};
      });
  }

  public get positiveStarsCount() {
    return new Array(Math.ceil(this.recipe.rating));
  }
  public get negativeStarsCount() {
    return new Array(Math.floor(ValidatorValue.MAX_RATING - this.recipe.rating));
  }

  public decreaseCount() {
    this.basketService.decreaseCount(this.recipe);
  }

  public increaseCount() {
    this.basketService.increaseCount(this.recipe);
  }

  public addToBasket() {
    this.basketService.addRecipe(this.recipe);
  }
}
