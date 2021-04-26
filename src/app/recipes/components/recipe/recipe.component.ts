import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service.ts/recipe.service';
import { take } from 'rxjs/operators';
import { RecipeTypesNames } from '../../../shared/constans/recipe-types-names';
import { ValidatorValue } from '../../../shared/constans/validator-value';
import { BasketService } from '../../../shared/services/basket-service/basket.service';
import {GeneralGroupsNames} from '../../../shared/constans/general-groups-names';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent  implements OnInit {

  @Input() public recipe: RecipeModel;

  public backgroundImage = 'none';
  public maxRating = ValidatorValue.MAX_RATING;
  public isImageLoading = true;

  constructor(
    private recipeService: RecipeService,
    private basketService: BasketService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.subscribeRecipeImageUrl();
    this.recipe.count = this.recipe.count || ValidatorValue.DEFAULT_QUANTITY;
  }

  public subscribeRecipeImageUrl() {
    let recipeImageUrl = '';
    this.recipeService.getRecipeImage(this.recipe.id).pipe(take(1))
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

  public onClickFavorite() {
    const groups = new Set(this.recipe.groups);
    if (groups.has(GeneralGroupsNames.Favorites)) {
      groups.delete(GeneralGroupsNames.Favorites);
    } else {
      groups.add(GeneralGroupsNames.Favorites);
    }
    this.recipeService.updateRecipeField(this.recipe.id, { groups: Array.from(groups) }).then(
      () => this.recipe.groups = Array.from(groups),
      () => this.snackBar.open('Не удалось сохронить', 'Закрыть'),
    );
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

  public deleteFromBasket() {
    this.basketService.deleteRecipe(this.recipe);
  }
}
