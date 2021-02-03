import { IngredientModel } from './ingredient.model';

export class RecipeModel {
  type: string;
  owner: string;
  name: string;
  instruction: string;
  ingredients: IngredientModel[];
  ingredientsList: string[];
  rating?: number;
  isInList?: boolean;
  count?: number;
  id?: string;

  constructor(data) {
    this.type = data.type;
    this.owner = data.owner;
    this.name = data.name.toLowerCase();
    this.instruction = data.instruction;
    this.ingredientsList = data.ingredientsList.map((ingredient: string) => ingredient.toLowerCase());
    this.rating = data.rating;
    this.ingredients = data.ingredients.map((ingredient: IngredientModel) => {
      ingredient.name = ingredient.name.toLowerCase();
      return ingredient;
    });
    if (data.id) {
      this.id = data.id;
    }
  }
}
