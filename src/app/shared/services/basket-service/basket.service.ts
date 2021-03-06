import { Injectable } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { BehaviorSubject } from 'rxjs';
import { IngredientModel } from '../../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public basket: {[key: string]: RecipeModel} = {};
  public $basketList = new BehaviorSubject(this.basket);

  constructor() { }

  public addRecipe(recipe: RecipeModel) {
    recipe.isInList = true;
    this.basket[recipe.id ] = recipe;
    this.$basketList.next(this.basket);
  }

  public deleteRecipe(recipe: RecipeModel) {
    recipe.isInList = false;
    delete this.basket[recipe.id];
    this.$basketList.next(this.basket);
  }

  public decreaseCount(recipe: RecipeModel) {
    if (recipe.count > 1) {
      recipe.count--;
      this.basket[recipe.id] = recipe;
      this.$basketList.next(this.basket);
    }
  }

  public increaseCount(recipe: RecipeModel) {
    recipe.count++;
    recipe.isInList = true;
    this.basket[recipe.id] = recipe;
    this.$basketList.next(this.basket);
  }

  public getBasket() {
    return this.$basketList;
  }

  public getShoppingList(): IngredientModel[] {
    const shoppingList: { [key: string]: IngredientModel} = {};
    const basketItemsList: RecipeModel[] = Object.values(this.basket);
    basketItemsList.forEach((recipe: RecipeModel) => {
      Object.values(recipe.ingredients).forEach((ingredient: IngredientModel) => {
        if (!shoppingList[ingredient.name]) {
          shoppingList[ingredient.name] = { ...ingredient };
          shoppingList[ingredient.name].amount = ingredient.amount * recipe.count;
        } else {
          shoppingList[ingredient.name].amount += ingredient.amount * recipe.count;
        }
      });
    });
    return Object.values(shoppingList);
  }
}
