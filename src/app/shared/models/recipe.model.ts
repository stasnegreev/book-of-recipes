import { IngredientModel } from './ingredient.model';

export class RecipeModel {
  type: string;
  name: string;
  instruction: string;
  ingredients: IngredientModel[];
  ingredientsList: string;
  rating?: number;
  isInList?: boolean;
  count?: number;
  id?: string;

  constructor(data) {
    this.type = data.type.toLowerCase();
    this.name = data.name.toLowerCase();
    this.instruction = data.instruction.toLowerCase();
    this.ingredientsList = data.ingredientsList.toLowerCase();
    this.rating = data.rating.toLowerCase();
    this.ingredients = data.ingredients.toLowerCase();
    if (data.id) {
      this.id = data.id.toLowerCase();
    }
  }
}
