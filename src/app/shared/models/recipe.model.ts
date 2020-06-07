import { IngredientModel } from './ingredient.model';

export class RecipeModel {
  type: string;
  name: string;
  instruction: string;
  ingredients: IngredientModel[];
  ingredientsList: string;
  rating?: number;
  count?: number;
  id?: string;

  constructor(data) {
    this.type = data.type;
    this.name = data.name;
    this.instruction = data.instruction;
    this.ingredientsList = data.ingredientsList;
    this.rating = data.rating;
    this.ingredients = data.ingredients;
    if (data.id) {
      this.id = data.id;
    }
  }
}
